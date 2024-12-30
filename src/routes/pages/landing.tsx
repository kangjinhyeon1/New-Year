import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div 
        className="flex flex-col items-center p-10 justify-between w-[500px] overflow-hidden h-full relative z-40 max-h-[800px] shadow shadow-main2"
        style={{backgroundImage: 'url("/img/Happy.jpg")', backgroundSize: 'cover'}}
      >
      <div className="absolute top-0 size-full bg-black opacity-20"/>
        <h1 className="text-3xl z-50 font-bold mt-10 text-[#FFCE2C]">신년 맞이 모임 찾기!!</h1>
        <div className="flex z-50 flex-col gap-5 justify-center items-center">
          <Link to={"/"} className="text-2xl font-semibold text-main3 cursor-pointer hover:text-[#FFC300]">시작하기</Link>
          <div className="flex text-xl text-main3 font-semibold flex-row gap-2 items-center">
            <Link to={"/login"} className="hover:text-[#FFC300] cursor-pointer">로그인</Link>
            <Link to={"/signup"} className="hover:text-[#FFC300] cursor-pointer">회원가입</Link>
          </div>
        </div>
      </div>
  )
}