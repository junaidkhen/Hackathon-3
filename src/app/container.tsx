import Image from "next/image";
import pic from "./assets/asian-woman-man-with-winter-clothes 1.png"

export default function Container(){
    return (
            <div className="w-[1440px] h-[682px] flex">
                
                <div className="w-[704px] h-[628px] ml-12">
                    <Image src={pic} alt=''/></div>
                <div className="w-[573px] h-[326px] gap-[30px] ml-[110px] mt-[150px]">
                    <div className="w-[154px] h-[30px] font-bold text-base mb-[30px] text-[#737373]">SUMMER 2020</div>
                    <div className="w-[509px] h-[160px] font-bold text-[58px] mb-[35px]">Part of the Neural Universe</div>
                    <div className="w-[341x] h-[40px] font-normal text-sm mb-[30px] text-[#737373]">We know how large objects will act, <br /> but things on a small scale. </div>
                    <div className="flex w-[295px] h-[52px]">
                        <button className="w-[153px] h-[52px] gap-[10px] radius-[5px] bg-[#2DC071] pt-[15px] pr-[20px] pb-[15px] pl-[20px] text-white font-bold text-sm">BUY NOW</button>
                    <button className="w-[173px] h-[52px] gap-[10px] radius-[5px] pt-[15px] pr-[20px] pb-[15px] pl-[20px] text-[#2DC071] font-bold text-sm">READ MORE</button></div>
                </div>
            </div>
    );
};
