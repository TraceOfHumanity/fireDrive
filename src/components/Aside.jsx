import React from "react";

import gsap from "gsap";
import { IoIosMoon } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "src/redux/features/themeSlice";
import { Button } from "src/ui-elements/Button";
import { getTheme, handleThemeSwitch } from "src/utils/functions";

export const Aside = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const asideRef = React.useRef(null);
  const [isOpenAside, setIsOpenAside] = React.useState(false);
  console.log("isOpenAside", isOpenAside);
  let timeoutId = null;

  React.useEffect(() => {
    if (isOpenAside) {
      gsap.to(asideRef.current, {
        width: "200px",
        ease: "elastic.out(1, 0.75)",
        duration: 1,
      });
    } else {
      gsap.to(asideRef.current, {
        width: "auto",
        duration: 1,
        ease: "elastic.inOut(1, 1)",
      });
    }
  }, [isOpenAside]);

  return (
    <div
      className="bg-black bg-opacity-10 m-2 rounded-xl p-2 flex flex-col"
      ref={asideRef}
      onMouseEnter={() => {
        clearTimeout(timeoutId);
        setIsOpenAside(true);
      }}
      onMouseLeave={() => {
        timeoutId = setTimeout(() => setIsOpenAside(false), 500);
      }}
    >
      <Button
        className="mt-auto block"
        onClick={() => {
          handleThemeSwitch();
          dispatch(setTheme(getTheme()));
        }}
      >
        {theme === "light" ? <MdOutlineWbSunny /> : <IoIosMoon />}
      </Button>
    </div>
  );
};
