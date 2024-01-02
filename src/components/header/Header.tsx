import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { IoDocumentText } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import CoverLetter from "assets/cover_letter_240102.pdf";

const GITHUB_URL = "https://github.com/agger89";
const EMAIL = "mailto:castlehill89@gmail.com";

interface HeaderProps {
  projectName?: string;
}

const Header: FunctionComponent<HeaderProps> = ({ projectName }) => {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex h-[45px] items-center bg-[#1f2124] pl-[18px] pr-[12px]">
      <Link to="/">
        <div className="text-[14px] text-[#ffffff]">Portfolio</div>
      </Link>
      {projectName && (
        <div className="text-[14px] text-[#bebcbc]">
          <span className="ml-[6px] mr-[6px] text-[#d7d7d7]">/</span>
          {projectName}
        </div>
      )}
      <div className="ml-[auto] flex items-center gap-[14px]">
        <a
          href={CoverLetter}
          download="cover_letter"
          title="자기소개서 다운로드"
        >
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
