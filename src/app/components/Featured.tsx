import Image from "next/image"
import card from "../assets/desktop-blog-3.png"

export default function Featured(){
    return (
        <div className="relative w-[1440px] h-[1044px]">
                <Image src={card} alt=''/>      
        </div>
    );
};