import { FunctionComponent } from "react";
import { ExperienData, WorkList, data } from "api/experience-data";
import { FaFileAlt } from "react-icons/fa";

const Experience: FunctionComponent = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="common-title">Experience ──</div>
      <div className="common-description-box">
        <p className="common-description-text">
          <span className="mr-[10px]">💬</span> 처음 퍼블리셔부터 현재
          프론트엔드까지 근무했던 회사들입니다.
        </p>
      </div>
      <div className="grid grid-cols-[1fr_1fr] gap-[16px]">
        {data.map((experience: ExperienData) => (
          <div
            className="relative h-[320px] rounded-[16px] border-[1px] border-[#303134]  bg-[#26282C] py-[30px] pl-[32px] pr-[12px]"
            key={experience.id}
          >
            <div className="mb-[2px] flex items-center gap-[8px]">
              <span className="text-[18px] font-[500] text-[#ffffff]">
                {experience.name}
              </span>
              <span className="text-[12px] text-[#999999]">
                ({experience.date})
              </span>
            </div>
            <div className="mb-[18px] text-[13px] text-[#999999]">
              {experience.position}
            </div>
            <ul className="flex flex-col gap-[8px]">
              {experience.workList.map((work: WorkList, idx) => (
                <li className="text-[14px] text-[#ffffff]" key={idx}>
                  {work.item}
                </li>
              ))}
            </ul>
            <div className="absolute bottom-[24px] flex  items-center gap-[10px] ">
              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-[4px]">
                    <FaFileAlt size={18} color="#039be5" />
                    <span className="text-[14px] text-[#039be5]">홈페이지</span>
                  </span>
                </a>
              )}
              <a
                href={`/experience/${experience.fileName}`}
                download={experience.downloadName}
              >
                <span className="flex items-center gap-[4px]">
                  <FaFileAlt size={18} color="#039be5" />
                  <span className="text-[14px] text-[#039be5]">경력기술서</span>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
