import { data as projects } from "api/project-data";
import { Tabs, NavLink } from "@mantine/core";
import { useState } from "react";

const Section = () => {
  const [hoverName, setHoverName] = useState("");
  return (
    <div className="grid grid-cols-3 gap-[16px]">
      {projects.map((item, idx) => (
        <div key={item.id} className="h-[158px]">
          <div
            className="h-[100%]"
            onMouseEnter={() => setHoverName(item.name)}
            onMouseLeave={() => setHoverName("")}
          >
            <div className="h-[100%]">
              {hoverName === item.name && (
                <div>
                  <div>{item.name}</div>
                </div>
              )}
              <div className="h-[100%]">
                <span
                  className={`block h-[100%] rounded-[12px] bg-[#000000] bg-cover bg-no-repeat`}
                  style={{
                    // backgroundImage: `url(/projects/pots.png)`,
                    backgroundSize:
                      item.name === "프리패스 타이머" ? "contain" : "cover",
                    backgroundPosition:
                      item.name === "프리패스 타이머" ? "center" : "top center",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Project = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="text-[24px] font-[600] tracking-[1px] text-[#9B9A97]">
        Projects ──
      </div>
      <div className="flex h-[52px] items-center divide-solid rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0px] rounded-tr-[16px]  border-[1px] border-transparent bg-[#303134] ">
        <p className="pl-[12px] text-[#d7d7d7]">
          <span className="mr-[10px]">💬</span> 회사에서 개발한 프로젝트들과
          사이드 프로젝트들입니다.
        </p>
      </div>
      <div>
        <Tabs defaultValue="recent">
          <Tabs.List>
            <Tabs.Tab value="recent" className="tab-common"></Tabs.Tab>
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
            <Section />
          </Tabs.Panel>
          <Tabs.Panel value="company project">
            company project tab content
          </Tabs.Panel>
          <Tabs.Panel value="side project">side project tab content</Tabs.Panel>
          <Tabs.Panel value="frontend">frontend</Tabs.Panel>
          <Tabs.Panel value="publisher">publisher</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Project;
