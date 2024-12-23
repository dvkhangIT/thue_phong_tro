import { memo } from "react";

const Button = ({ text, textColor, bgColor, IcAfter, onClick, fullwidth }) => {
  return (
    <button
      type="button"
      className={`${textColor} ${bgColor} p-2 px-4 outline-none rounded-md hover:underline flex items-center justify-center gap-1 ${
        fullwidth && "w-full"
      }`}
      onClick={onClick}
    >
      {text}
      {IcAfter && (
        <span>
          <IcAfter />
        </span>
      )}
    </button>
  );
};

export default memo(Button);
