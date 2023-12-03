import { FunctionComponent } from "react";
import { IoDocumentText } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Header: FunctionComponent = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex h-[45px] items-center justify-between bg-[#1f2124] pl-[18px] pr-[12px]">
      <div className="text-[14px] text-[#ffffff]">Portfolio</div>
      <div className="flex items-center gap-[14px]">
        <a href="/" download>
          <IoDocumentText size={22} color="#ffffff" />
        </a>
        <a href="/">
          <AiFillGithub size={22} color="#ffffff" />
        </a>
        <a href="/">
          <MdEmail size={22} color="#ffffff" />
        </a>
      </div>
    </div>
  );
};

export default Header;
