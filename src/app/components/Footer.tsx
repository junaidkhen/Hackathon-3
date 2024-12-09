import Image from "next/image"
import card from "../assets/desktop-footer-6.png"

export default function Footer(){
    return (
        <div className="relative w-[1440px] h-[488px]">
                <Image src={card} alt=''/>      
        </div>
    );
};