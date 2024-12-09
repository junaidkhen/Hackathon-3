import Image from "next/image";
import Icon from "../assets/col-md-4 (2).png";
import Icon3 from "../assets/col-md-4.png";
import Icon4 from "../assets/col-md-4 (1).png";

export default function NavbarDark() {
  return (
    <div className="navbar-dark">
      <div className="top-0 left-0 right-0 h-[58px] bg-[#252B42]">
        <div className="absolute top-0 left-[calc(50%-1438px/2)] w-[1438px] h-[46px] flex flex-row justify-between items-start p-0 gap-[10px]">
          <div className="flex flex-row items-center pt-2 gap-2 mx-auto w-[415px] h-[46px]">
            <Image src={Icon} alt="" />
          </div>
          <div className="flex flex-row items-start p-[10px] gap-[10px] mx-auto w-[332px] h-[44px]">
            <Image src={Icon3} alt="" />
          </div>
          <div className="bg-yello-400 flex flex-row items-start p-2 gap-2 mx-auto w-[233px] h-[46px]">
            <Image src={Icon4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
