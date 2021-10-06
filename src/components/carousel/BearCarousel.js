import React, {
  //
  useState,
} from "react";

import {
  //
  bearlog,
} from "../../index";
import { BearListItem } from "../list/BearListItem";
import { BearListBase } from "../list/BearListBase";
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
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

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
      //   sdfewr;
      BearListItem(sdfewr, args);

    bearlog.lug("___ sdfewr ___", { sdfewr, nijsa });

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

  bearlog.lug(messvar, "___ CarouslMain ___", args);

  const kesae = (
    <>
      {/*  */}
      {/* <Slider {...args}>{nisaw}</Slider> */}
      {/* {nisaw} */}
      <Carousel {...args}>
        {/*  */}
        {nisaw}
      </Carousel>
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
