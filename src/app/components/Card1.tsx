import Image from "next/image"
import card from "../assets/row.png"

const Card1 = () => {
    return (
        <div className="relative w-[1440px] h-[770px] mt-16">
                <div className="w-[1050px] h-[770px] left-[195px] pt-20 pb-20 gap-12 m-auto">
                    <div className="w-[607px] h-[62px] m-auto">
                    <div className="flex flex-col items-center w-[607px] h-[62px] font-bold text-2xl">
                    EDITOR’S PICK
                    <div className="flex-none order-0 flex-grow-0 font-normal text-sm mt-[10px]">
                    Problems trying to resolve the conflict between 
                    </div>
                    </div>
                    <div className="w-[1050px] h-[500px] gap-[30px] -ml-[220px] mt-12">
                    <Image src={card} alt=''/>
                    </div>
                    </div>
                </div>            
        </div>
    );
};

export default Card1;