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
import * as logs from "../../functions/logFuncs";

export function BearCarousel({
  //
  listvar,
  slideNum = 0,
  messvar = "",
  ...args
}) {
  //
  //   slideNum = 1

  function baseRet(Asdew) {
    return Asdew;
  }

  function caroRet(sdfewr) {
    const sokdaw = {
      // onExiting={() => setAnimating(true)}
      // onExited={() => setAnimating(false)}
      // key={item.src}
    };

    const iasd = (
      <CarouselItem {...sokdaw}>
        <br />
        {sdfewr}
      </CarouselItem>
    );

    return iasd;
  }

  const nisaw =
    //
    // listvar.map(Asdew);
    listvar.map(caroRet);

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

  logs.logga(messvar + "___ CarouslMain ___", args);

  const kesae = (
    <>
      {/*  */}
      {/* <Slider {...args}>{nisaw}</Slider> */}
      <Carousel {...args}>{nisaw}</Carousel>
    </>
  );

  return kesae;
}
