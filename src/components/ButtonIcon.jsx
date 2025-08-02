import btnIcon from "../assets/button-icon.png";

const ButtonIcon = ({ text, className = "", ...rest }) => {
  return (
    <button
      className={`flex items-center gap-2 bg-gray-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-700 transition-colors ${className}`}
      {...rest}
    >
      {text}
      <img src={btnIcon} alt="" />
    </button>
  );
};

export default ButtonIcon;
