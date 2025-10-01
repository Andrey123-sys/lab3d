import Image from "next/image";
import first_logo from "../../../public/first_logo.png";

export const Logo = () => {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center">
      <Image className="" src={first_logo} priority alt="logo" />
    </div>
  );
};
