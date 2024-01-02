import { Tabs } from "@mantine/core";
import { SkillData, data as skills } from "api/skill-data";
import { FunctionComponent } from "react";

interface SectionProps {
  data: SkillData[];
}

const Section: FunctionComponent<SectionProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-[16px]">
      {data.map((skill: SkillData) => (
        <div
          key={skill.id}
          className="bg-[rgb(2, 33, 36)] block rounded-[12px]"
        >
          <div className="relative rounded-[12px] bg-[#000]">
            <div className="absolute left-[50%] top-[50%] z-[999] flex translate-x-[-50%] translate-y-[-50%] ">
              <span className="block whitespace-nowrap rounded-[6px] bg-[rgba(0,0,0,0.5)] align-bottom text-[16px] font-[500] text-[#fff]">
                {skill.name}
              </span>
            </div>
            <div className="h-[158px]">
              <span
                className="block h-[100%] rounded-[12px] bg-[length:50%] bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(/skills/${skill.imageUrl})`,
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Skill: FunctionComponent = () => {
  function buildData(key: string, value: string) {
    return skills.reduce((acc: any, cur: any) => {
      if (cur[key] === value) {
        return [...acc, cur];
      } else {
        return [...acc];
      }
    }, []);
  }

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="common-title">Skills ──</div>
      <div className="common-description-box">
        <p className="common-description-text">
          <span className="mr-[10px]">💬</span> 현재 사용하고 있는 기술과 이전에
          제가 경험했던 기술들입니다.
        </p>
      </div>
      <div>
        <Tabs defaultValue="recent">
          <Tabs.List className="mb-[20px]">
            <Tabs.Tab value="recent" className="tab-common w-[33.333%]">
              current
            </Tabs.Tab>
            <Tabs.Tab
              value="company project"
              className="tab-common w-[33.333%]"
            >
              frontend
            </Tabs.Tab>
            <Tabs.Tab value="side project" className="tab-common w-[33.333%]">
              publisher
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="recent">
            <Section data={buildData("type", "CURRENT")} />
          </Tabs.Panel>
          <Tabs.Panel value="company project">
            <Section data={buildData("type", "FRONTEND")} />
          </Tabs.Panel>
          <Tabs.Panel value="side project">
            <Section data={buildData("type", "PUBLISHER")} />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Skill;
