import ProfileImage from "assets/profile.jpg";

const Profile = () => {
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="text-[24px] font-[600] tracking-[1px] text-[#9B9A97]">
        Profile ──
      </div>
      <div className="flex items-center gap-[66px]">
        <div className="h-[205px] w-[205px] overflow-hidden rounded-[20%]">
          <img
            src={ProfileImage}
            className="h-[100%] w-[100%] object-cover object-[50%,30%]"
            alt="프로필 이미지"
          />
        </div>
        <p className="text-[16px] text-[#ffffff]">
          음악과 코딩, 운동을 좋아하며 현재 프리랜서 소속으로 프론트엔드 개발을
          하고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default Profile;
