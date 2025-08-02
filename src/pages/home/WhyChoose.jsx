import ButtonIcon from "../../components/ButtonIcon"


const WhyChoose = () => {
  return (
    <section className='section-container'>
        <div className='my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center md:grid-12 text-left'>
            <div>
                <h2 className='text-4xl font-bold'>Why <br/>Choose Us</h2>
            </div>
            <div>
                <h3 className="text-2xl font-bold">Luxury facilities</h3>
                <p className="text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, totam.</p>
                <ButtonIcon text="More Info"/>
            </div>
            <div>
                <h3 className="text-2xl font-bold">Affordable prices</h3>
                <p className="text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, totam.</p>
                <ButtonIcon text="More Info"/>
            </div>
            <div>
                <h3 className="text-2xl font-bold">Many Choices</h3>
                <p className="text-base mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, totam.</p>
                <ButtonIcon text="More Info"/>
            </div>
        </div>
    </section>
  )
}

export default WhyChoose