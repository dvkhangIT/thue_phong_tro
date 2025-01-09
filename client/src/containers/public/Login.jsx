import { useEffect, useState } from "react";
import { Button, InputForm } from "../../components";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  console.log(location.state);
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-sm shadow-sm mt-5">
      <h3 className="text-2xl font-semibold">
        {isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}
      </h3>
      <div className="flex flex-col w-full gap-5">
        {isRegister && <InputForm label={"họ tên"}></InputForm>}
        <InputForm label={"số điện thoại"}></InputForm>
        <InputForm label={"mật khẩu"}></InputForm>
        <Button
          bgColor={"bg-secondary1"}
          textColor={"text-white"}
          text={isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}
          fullwidth
        ></Button>
      </div>
      <div className="flex items-center justify-between cursor-pointer mt-7">
        {isRegister ? (
          <small>
            Bạn đã có tài khoản?
            <span
              onClick={() => setIsRegister(false)}
              className="text-blue-500 hover:underline"
            >
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-blue-700 cursor-pointer hover:text-orange-700">
              Bạn quên mật khẩu?
            </small>
            <small
              onClick={() => {
                setIsRegister(true);
              }}
              className="text-blue-700 cursor-pointer hover:text-orange-700"
            >
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
