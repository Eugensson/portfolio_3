"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface SliderButtonsProps {
  containerStyles?: string;
  buttonStyles?: string;
  iconStyles?: string;
}

export const SliderButtons = ({
  containerStyles,
  buttonStyles,
  iconStyles,
}: SliderButtonsProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        className={buttonStyles}
      >
        <PiCaretLeftBold size={22} className={iconStyles} />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        className={buttonStyles}
      >
        <PiCaretRightBold size={22} className={iconStyles} />
      </button>
    </div>
  );
};
