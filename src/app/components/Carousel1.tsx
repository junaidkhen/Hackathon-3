import Image from "next/image"
import picture from "../assets/shop-hero-1-product-slide-1.jpg"

const Carousel1 = () => {
    return (
        <div className="Carousel1 section -mt-32">
            <div className="relative w-[1439px] h-[716px] top-[136px] left-[1px]">
                <Image src={picture} alt='Descriptive alt text' layout="fill" objectFit="cover" />
                <div className="w-[599px] h-[331px] gap-[35px] absolute mt-[170px] ml-[275px]">
                    <div className="w-[122px] h-6 font-bold text-base mb-[35px]">SUMMER 2020</div>
                    <div className="w-[548px] h-[80px] font-bold text-[58px] mb-[35px]">NEW COLLECTION</div>
                    <div className="w-[376x] h-[60px] font-normal text-xl mb-[35px]">We know how large objects will act,
                        <br /> 
                    but things on a small scale.</div>
                    <button className="w-[221px] h-[62px] gap-[10px] radius-[5px] bg-[#2DC071] pt-[15px] pr-[40px] pb-[15px] pl-[40px]">SHOP NOW</button>
                </div>
            </div>
        </div>
    );
};
export default Carousel1;