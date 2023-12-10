import { FunctionComponent } from "react";
import { IoDocumentText } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import CoverLetter from "assets/cover_letter.pdf";

const GITHUB_URL = "https://github.com/agger89";
const EMAIL = "mailto:castlehill89@gmail.com";

const Header: FunctionComponent = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex h-[45px] items-center justify-between bg-[#1f2124] pl-[18px] pr-[12px]">
      <div className="text-[14px] text-[#ffffff]">Portfolio</div>
      <div className="flex items-center gap-[14px]">
        <a href={CoverLetter} download title="자기소개서 다운로드">
          <IoDocumentText size={22} color="#ffffff" />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub 바로가기"
        >
          <AiFillGithub size={22} color="#ffffff" />
        </a>
        <a
          href={EMAIL}
          target="_blank"
          rel="noopener noreferrer"
          title="Email 보내기"
        >
          <MdEmail size={22} color="#ffffff" />
        </a>
      </div>
    </div>
  );
};

export default Header;
