"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import {WorkSliderBtnsProps} from "../../../types/types";

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({
  containerStyles,
  btnStyles,
  iconsStyles,
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold style={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold style={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;