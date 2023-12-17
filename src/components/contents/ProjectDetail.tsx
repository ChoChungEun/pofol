import { FunctionComponent, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { data as projects } from "api/project-data";
import { Header } from "components/header";

const ProjectDetail: FunctionComponent = () => {
  const { projectId }: any = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.filter((item) => item.id === parseInt(projectId))[0];

  return (
    <div className="bg-[#1F2124]">
      <Header projectName={project.name} />
      <div className="mx-[auto] w-[1000px] py-[150px]">
        <div className="mb-[20px] text-[40px] font-[700] text-[#f0f1f4]">
          {project.name}
        </div>
        <div className="common-description-box mb-[20px]">
          <p className="common-description-text">
            <span className="mr-[10px]">💬</span>
            {project.description}
          </p>
        </div>
        <div className="mb-[80px]">
          <img src={`/projects/${project.imageUrl}`} alt="프로젝트 이미지" />
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="divide-solid border-b-[1px] border-[#303134] pb-[10px] text-[20px] font-[300] italic tracking-[1.5px] text-[#f0f1f4]">
            info
          </div>
          <ul className="common-detail-info-item-box">
            <li className="common-detail-info-item">
              <span className="common-detail-info-item-title">기술 스택</span>
              <p className="common-detail-info-item-content">
                {project.skills}
              </p>
            </li>
            <li className="common-detail-info-item">
              <span className="common-detail-info-item-title">개발 기간</span>
              <p className="common-detail-info-item-content">
                {project.period}
              </p>
            </li>
            <li className="common-detail-info-item">
              <span className="common-detail-info-item-title">개발 인원</span>
              <p className="common-detail-info-item-content">
                {project.developers}
              </p>
            </li>
            <li className="common-detail-info-item">
              <span className="common-detail-info-item-title">구현 기능</span>
              <p className="common-detail-info-item-content">
                {project.features}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
