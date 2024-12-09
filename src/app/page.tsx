import NavbarDark from "../app/components/NavbarDark"
import NavbarLight from "../app/components/NavbarLight"
import Carousel1 from "./components/Carousel1";
import Card1 from "./components/Card1";
import Card2 from "./Card2"
import Carousel2 from "./Carousel2";
import Container from "./container"
import Featured from "./components/Featured"
import Footer from "./components/Footer"  
export default function Home() {
  return (
    <div>
    <NavbarDark/>
    <NavbarLight/>
    <Carousel1/>
    <Card1/>
    <Card2/>
    <Carousel2/>
    <Container/>
    <Featured/>
    <Footer/>
    </div>

  )
};
    