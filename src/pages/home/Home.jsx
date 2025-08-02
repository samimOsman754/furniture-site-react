
import Expriences from "../../components/Expriences"
import Materials from "../../components/Materials"
import Testimonials from "../../components/Testimonials"
import Products from "../shop/Products"
import Hero from "./Hero"
import WhyChoose from "./WhyChoose"

const Home = () => {
  return (
    <>
    <Hero/>
    <WhyChoose/>
    <Products headline="Best Selling Products"/>
    <Expriences/>
    <Materials/>
    <Testimonials/>
    </>
  )
}

export default Home