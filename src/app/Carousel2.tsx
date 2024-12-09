import Image from "next/image"
import picture from "../app/assets/shop-hero-2-png-picture-1.png"

const Carousel2 = () => {
    return (
        <div className="relative Carousel1 section">
            <div className="bg-[#23856D] w-[1440px] h-[709px]">
                <div className="flex flex-row w-[1036px] h-[711px] m-auto">
                <div className="w-[510px] h-[685px] ml-[600px] mt-4">
                    <Image src={picture} alt='Descriptive alt text'/></div>
                <div className="w-[509px] h-[432px] gap-[30px] absolute mt-[170px] ml-[30px]">
                    <div className="w-[154px] h-[30px] font-bold text-base mb-[30px] text-white">SUMMER 2020</div>
                    <div className="w-[509px] h-[160px] font-bold text-[58px] mb-[35px] text-white">Vita Classis Product</div>
                    <div className="w-[341x] h-[40px] font-normal text-sm mb-[30px] text-white">We know how large objects will act, <br />We know how are objects will act, We know</div>
                    <div className="flex w-[295px] h-[52px]">
                        <h1 className="pt-4 text-white">$16.48</h1>
                    <button className="ml-4 w-[221px] h-[62px] gap-[10px] radius-[5px] bg-[#2DC071] pt-[15px] pr-[40px] pb-[15px] pl-[60px] text-white">SHOP NOW</button></div>
                </div>
            </div>
            </div>
        </div>
    );
};
export default Carousel2;