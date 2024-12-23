import { Button, InputForm } from "../../components";

const Login = () => {
  return (
    <div className="bg-white w-[600px] p-[30px] pb-[100px] rounded-sm shadow-sm">
      <h3 className="text-2xl font-semibold">Đăng nhập</h3>
      <div className="flex flex-col w-full gap-5">
        <InputForm label={"số điện thoại"}></InputForm>
        <InputForm label={"mật khẩu"}></InputForm>
        <Button
          bgColor={"bg-secondary1"}
          textColor={"text-white"}
          text={"Đăng nhập"}
          fullwidth
        ></Button>
      </div>
      <div className="flex items-center justify-between cursor-pointer mt-7">
        <small className="text-blue-700 hover:text-orange-700">
          Bạn quên mật khẩu?
        </small>
        <small className="text-blue-700 cursor-pointer hover:text-orange-700">
          Tạo tài khoản mới
        </small>
      </div>
    </div>
  );
};

export default Login;
