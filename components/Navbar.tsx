import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PiSunBold } from "react-icons/pi";
import { BsFillMoonStarsFill } from "react-icons/bs";

type Props = {};

const NavBar = (props: Props) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="flex justify-between p-2">
      <Link href={"/"}>
        <p className="dark:text-white text-gray-900 sm:mr-16 cursor-pointer text-2xl font-bold ease-in duration-200 bg-clip-text mt-3">
          Omegayon
        </p>
      </Link>
      {theme === "dark" ? (
        <BsFillMoonStarsFill
          className="bg-transparent w-[35px] h-[35px] ease-in duration-400 text-gray-300 mt-3 mr-8"
          onClick={handleThemeSwitch}
        />
      ) : (
        <PiSunBold
          className="bg-transparent w-[35px] h-[35px] ease-in duration-400 text-gray-900 mt-3 mr-8"
          onClick={handleThemeSwitch}
        />
      )}
      <ConnectWallet modalTitle="Select sign in method" />
    </div>
  );
};

export default NavBar;
