import Image from "next/image"
import card1 from "../app/assets/desktop-product-cards-10.png"

const Card1 = () => {
    return (
        <div className="w-[1440px] h-[1652px]">
               <Image src={card1} alt=''/>               
        </div>
    );
};
export default Card1;