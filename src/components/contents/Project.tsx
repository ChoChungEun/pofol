import { data as projects } from "api/project-data";
import { Tabs } from "@mantine/core";
import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

interface SectionProps {
  data: any[];
}

const Section: FunctionComponent<SectionProps> = ({ data }) => {
  const [hoverName, setHoverName] = useState("");

  return (
    <div className="grid grid-cols-3 gap-[16px]">
      {data.map((project) => (
        <Link to={{ pathname: `/project/${project.id}` }} key={project.id}>
          <div className="h-[158px]">
            <div
              className="h-[100%] cursor-pointer"
              onMouseEnter={() => setHoverName(project.name)}
              onMouseLeave={() => setHoverName("")}
            >
              <div className="relative h-[100%]">
                {hoverName === project.name && (
                  <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center rounded-[12px] bg-black opacity-[0.8] ">
                    <div className="text-[15px] font-[500] text-[#ffffff]">
                      {project.name}
                    </div>
                  </div>
                )}
                <div className="h-[100%]">
                  <span
                    className={`block h-[100%] rounded-[12px] bg-[#000000] bg-cover bg-no-repeat`}
                    style={{
                      backgroundImage: `url(/projects/${project.imageUrl})`,
                      backgroundSize:
                        project.name === "프리패스 타이머"
                          ? "contain"
                          : "cover",
                      backgroundPosition:
                        project.name === "프리패스 타이머"
                          ? "center"
                          : "top center",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const Project = () => {
  function buildData(key: string, value: string) {
    return projects.reduce((acc, cur) => {
      if (cur[key] === value) {
        return [...acc, cur];
      } else {
        return [...acc];
      }
    }, []);
  }

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="text-[24px] font-[600] tracking-[1px] text-[#9B9A97]">
        Projects ──
      </div>
      <div className="common-description-box">
        <p className="common-description-text">
          <span className="mr-[10px]">💬</span> 회사, 스터디, 독학
          프로젝트들입니다.
        </p>
      </div>
      <div>
        <Tabs defaultValue="recent">
          <Tabs.List className="mb-[20px]">
            <Tabs.Tab value="recent" className="tab-common">
              recent
            </Tabs.Tab>
            <Tabs.Tab value="company project" className="tab-common">
              company project
            </Tabs.Tab>
            <Tabs.Tab value="side project" className="tab-common">
              side project
            </Tabs.Tab>
            <Tabs.Tab value="frontend" className="tab-common">
              frontend
            </Tabs.Tab>
            <Tabs.Tab value="publisher" className="tab-common">
              publisher
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="recent">
            <Section data={projects} />
          </Tabs.Panel>
          <Tabs.Panel value="company project">
            <Section data={buildData("projectType", "COMPANY_PROJECT")} />
          </Tabs.Panel>
          <Tabs.Panel value="side project">
            <Section data={buildData("projectType", "SIDE_PROJECT")} />
          </Tabs.Panel>
          <Tabs.Panel value="frontend">
            <Section data={buildData("position", "FRONT_END")} />
          </Tabs.Panel>
          <Tabs.Panel value="publisher">
            <Section data={buildData("position", "PUBLISHER")} />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Project;
