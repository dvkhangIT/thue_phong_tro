import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logowithoutbg.png";
import { Button } from "../../components";
import icons from "../../ultils/icons";
import { useCallback } from "react";
import { path } from "../../ultils/constan";
const { AiOutlinePlusCircle } = icons;
const Header = () => {
  const navigate = useNavigate();
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);
  return (
    <div className="w-1100">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[240px] h-[70px] object-contain"
          />
        </Link>
        <div className="flex items-center gap-1">
          <span>Phongtro123.com xin chào!</span>
          <Button
            text={"Đăng nhập"}
            textColor="text-white"
            bgColor="bg-[#3961fb]"
            onClick={() => goLogin(false)}
          ></Button>
          <Button
            text={"Đăng ký"}
            textColor="text-white"
            bgColor="bg-[#3961fb]"
            onClick={() => goLogin(true)}
          ></Button>
          <Button
            text={"Đăng tin mới"}
            textColor="text-white"
            bgColor="bg-secondary2"
            IcAfter={AiOutlinePlusCircle}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
