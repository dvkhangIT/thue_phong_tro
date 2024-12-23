import { memo } from "react";

const InputForm = ({ label }) => {
  return (
    <div>
      <label className="text-xs uppercase" htmlFor="phone">
        {label}
      </label>
      <input
        type="text"
        id="phone"
        className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
      ></input>
    </div>
  );
};

export default memo(InputForm);
