import Profile from "./Profile";
import Project from "./Project";

const Contents = () => {
  return (
    <div className="mx-[auto] my-[0px] flex w-[1000px] flex-col gap-[180px] pt-[200px]">
      <Profile />
      <Project />
    </div>
  );
};

export default Contents;
