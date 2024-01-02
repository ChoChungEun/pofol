import { FunctionComponent } from "react";
import Experience from "./Experience";
import Profile from "./Profile";
import Project from "./Project";
import Skill from "./Skill";

const Contents: FunctionComponent = () => {
  return (
    <div className="mx-[auto] my-[0px] flex w-[1000px] flex-col gap-[180px] pb-[180px] pt-[200px]">
      <Profile />
      <Project />
      <Experience />
      <Skill />
    </div>
  );
};

export default Contents;
