import Image from "next/image"
import Icon5 from "../assets/navbar-brand.png"
import vec from "../assets/Vector.png"
import vec1 from "../assets/Vector (1).png"
import li from "../assets/li (4).png"
import li1 from "../assets/li (5).png"
import li2 from "../assets/a.png"

export default function NavbarLight(){
  return (
    <div className="flex w-[1437px] h-[58px] top-[70px]">
      <div className="pl-28 top-0 w-[300px] h-[58px]">
        <Image src={Icon5} alt="" />
      </div>
      <div className="flex left-[265px] w-[1155px] h-[58px]">
        <div className="pl-8 flex flex-row mt-4 gap-[15px] w-[361px] h-[25px] top-4">
          <div className="w-[43px] h-[24px] font-bold text-sm">Home </div>
          <div className="flex w-[43px] h-[24px] font-bold text-sm place-content-end">
            Shop
          </div>
          <div className="mt-2">
            <Image src={vec} alt="" />
          </div>
          <div className="w-[43px] h-[24px] font-bold text-sm">About</div>
          <div className="w-[43px] h-[24px] font-bold text-sm">Blog</div>
          <div className="w-[43px] h-[24px] font-bold text-sm">Contact</div>
          <div className="w-[43px] h-[24px] font-bold text-sm">Pages</div>{" "}
        </div>
        <div className="pl-4 flex w-[360px] h-[54px] top-[2px] left-[832px] ml-[380px]">
          <div className="pl-4 mt-5">
            <Image src={vec1} alt="" />
          </div>
          <div className="flex flex-row justify-items-end w-[166px] h-[54px] text-sm font-bold text-[#23A6F0] mt-4">
            Login / Register
          </div>
          <div className="w-[46px] h[46px] mt-[6px]">
            <Image src={li} alt="" />
          </div>
          <div className="w-[56px] h[46px] mt-[6px]">
            <Image src={li1} alt="" />
          </div>
          <div className="w-[56px] h[46px] mt-[6px]">
            <Image src={li2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
