import React, {
  //
  useState,
} from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import {
  //
  logs,
} from "bearui-web";
import { BearListItem } from "./BearListItem";
import { BearListBase } from "./BearListBase";
import { BearListComp } from "../GlobalComps";
import { BearCheckList } from "../check/BearCheckList";

export function BearCarousel({
  //
  list,
  slideNum = 0,
  messvar = "",
  ...args
}) {
  //
  //   slideNum = 1

  function baseRet(Asdew) {
    return Asdew;
  }

  function caroRet(sdfewr, index) {
    const sokdaw = {
      // onExiting={() => setAnimating(true)}
      // onExited={() => setAnimating(false)}
      // key={item.src}
    };

    const nijsa =
      //
      // index;
      sdfewr;
    // BearListItem(sdfewr, args);

    logs.logga("___ sdfewr ___", { sdfewr, nijsa });

    const iasd = (
      <CarouselItem {...sokdaw}>
        <>
          <br />
          {nijsa}
        </>
      </CarouselItem>
    );

    return iasd;
  }

  const isdjfr = {
    logtrue: true,
    containFunc: caroRet,
    ...args,
  };

  const nisaw =
    //
    // "";
    // list.map(Asdew);
    // BearListComp(list, isdjfr);
    list.map(caroRet);

  const slidirBase = {
    // slidesToShow: 1,
    // slidesToScroll: 1,
    className: "center",
    // arrows: false,
    slideIndex: slideNum,
    // initialSlide: slideNum,
  };

  const strapCaro = {
    activeIndex: slideNum,
  };

  args = {
    // ...slidirBase,
    ...strapCaro,
    ...args,
  };

  logs.logga(messvar, "___ CarouslMain ___", args);

  const kesae = (
    <>
      {/*  */}
      {/* <Slider {...args}>{nisaw}</Slider> */}
      {/* {nisaw} */}
      <Carousel {...args}>{nisaw}</Carousel>
    </>
  );

  const vidfsd = {
    //
    list,
  };

  const ncvdfd =
    //
    kesae;
  // BearCheckList("BearCarousel", kesae, args);

  return ncvdfd;

  // return kesae;
}
