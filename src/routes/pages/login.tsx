import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-10 w-[500px] overflow-hidden h-full bg-[#FFFCF1] rounded-[10px] z-40 max-h-[800px] shadow shadow-main2">
      <div className="w-full flex justify-start">
        <span className="text-xl font-semibold cursor-pointer text-gray-600" onClick={() => navigate(-1)}>
          뒤로가기
        </span>
      </div>
      <h1 className="text-3xl z-50 font-bold mt-10 text-[#FFCE2C]">로그인</h1>
      <div>
        <div>
          <label></label>
          <input />
        </div>
      </div>
    </div>
  );
}
