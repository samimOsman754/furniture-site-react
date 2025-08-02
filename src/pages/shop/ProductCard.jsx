import React, { useContext } from 'react'
import { getImgURL } from '../../utils/getImageURL'
import Rating from '../../components/Rating'
import { FiPlus } from 'react-icons/fi'
import { CartContext } from '../../contex/CartContext'

const ProductCard = ({ product }) => {
    const {addToCart} = useContext(CartContext)
  return (
    <div className="group flex flex-col justify-between h-full p-4 border rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
      {/* Image container with hover effect */}
      <div className="relative overflow-hidden rounded-md bg-[#FAFAFA]">
        <img
          src={getImgURL(`${product.imageUrl}`)}
          alt={product.name}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product details */}
      <div className="flex flex-col pt-4">
        <h4 className="text-sm text-gray-500 mb-1">{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2 truncate" title={product.name}>
          {product.name}
        </h3>
        <Rating rating={product.rating} />

        {/* Price and Add to Cart button */}
        <div className="mt-5 flex justify-between items-center">
          <p className="text-gray-800 font-bold text-lg">
            <sup>$</sup>
            <span>{product.price}</span>
          </p>
          <button
            onClick={() => addToCart(product)}
            aria-label={`Add ${product.name} to cart`}
            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            <FiPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard