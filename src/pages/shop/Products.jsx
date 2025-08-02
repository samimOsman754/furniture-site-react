import React, { useState } from 'react'
import { products } from '../../utils/products'
import ProductCard from './ProductCard'
import ButtonIcon from '../../components/ButtonIcon'

const Products = ({headline}) => {
    const categories = ["Chair", "Beds", "Sofa", "Lamp"];
    const [selectedCategory, setSelectedCategory] = useState("Chair");
    const [visibleProducts, setVisibleProducts] = useState(4);
    const filteredProducts = products.filter((product) => product.category === selectedCategory);

    const loadMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 4);
    }

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setVisibleProducts(4);
    }

    const handleAddToCart = (product) => {
        // In a real app, you'd dispatch an action to a state management library (like Redux or Context API)
        console.log(`Added ${product.name} to cart!`);
        // Example: addToCart(product);
    }
  return (
    <div>
        <div className='section-container'>
            <h2 className='text-4xl font-bold text-center my-8'>{headline}</h2>
            {/* category tabs */}
            <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
                <div className='flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4'>
                    {
                        categories.map((category) => (
                          <button
                          onClick={() => handleCategoryClick(category)}
                           key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-gray-700 hover:text-white transition-colors ${selectedCategory === category ? "bg-gray-700 text-white" : ""}`}>{category}</button>
                        ))
                    }
                </div>
            </div>
            {/* products */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    filteredProducts.slice(0, visibleProducts).map((product) => (
                        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))
                }
            </div>
            {/* load more button */}
            {
                filteredProducts.length > visibleProducts && (
                   <div className='flex justify-center my-8'>
                    <ButtonIcon
                    onClick={loadMore}
                    text="Load More"/>
                   </div>
                )
            }

        </div>
    </div>
  )
}

export default Products