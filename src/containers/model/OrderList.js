import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "@SillyScribe95/bedia-shared/";
import { getLength } from "@SillyScribe95/bedia-shared/";

import MediaAlter from "./MediaAlter";
import * as gens from "../consts/GenStyled";
import BearDiv from "../components/BearDiv";

import {
  dateFromString,
  AddSeriesOpen,
  PluralFunc,
  checkTimeBefore,
  mediaDeliver,
  getSHortSet,
  joinString,
  // OrderCostDrop,
} from "../functions/GlobalFunctions";
import BearList from "../components/BearList";
import { MainContext } from "../contexts/MainContext";
import OrderMedia from "./OrderMedia";
import BearButton from "../components/BearButton";
import BearFloat from "../components/BearFloat";
import { GlobalFooter } from "../components/GlobalFooter";
import { DrawerHeader } from "@chakra-ui/core";

export default function OrderList({
  //
  mediaList,
  genConfig,
  orderObj,
  seriesObj,
  buttonConfig,
  addFunc,
  noAddMore,
  noTitle,
  noDate,
  topConfig,
  addButtonConfig,
  saveMediaConfig,
  ...args
}) {
  const { currBaasket, costConfig, seriesOver, orderDetails } =
    useContext(MainContext);

  // 1const

  logs.logga("___ OrderList-orderDetails ___", orderDetails);
  // logs.logga("___ ckbmvsf ___", ckbmvsf);

  // 1cancel
  // function cnclIt(

  const adhwe = {
    padding: "30px 0",
  };

  // MEDIA-ORDER
  // obj
  function asijwe(obj) {
    //
    logs.logga("___ orderList OBJ ___", obj);

    const iconfILL = {
      listvar: "cancel",
    };

    const yagqwe = {
      height: "200px",
      ...adhwe,
    };

    const aysgdw = orderDetails["noteJSON"]["optionsMedia"];
    const singOrd = aysgdw && aysgdw[obj.id];

    logs.logga("___ singOrd ___", singOrd);

    const iaweqe = {
      // rightIconsConfig: iconfILL,
      style: yagqwe,
      className: gens.butClass,
      // onNameChange: asdjwe,
      obj: obj,
      orderNote: singOrd,
      ...args,
    };

    logs.logga("___ OrderMedia ___", iaweqe);

    const sadsdfije = (
      <>
        {/* <InputMedia {...iaweqe} /> */}
        <OrderMedia
          //
          noClass
          {...iaweqe}
        />
      </>
    );

    return sadsdfije;
  }

  //   sdfioje
  const asidjw = {
    // cancelFunc: sdofjasd,
    style: adhwe,
  };

  logs.logga("___ mediaList ___", mediaList);

  const showORder =
    //
    // true
    mediaList;

  const numMain = getLength(mediaList);

  //
  //
  function MediaFind() {
    //
    //
    const sdokdwqe = {
      obj: asijwe,
      listvar: mediaList,
      itemConfig: asidjw,
      // style: padding
    };

    logs.logga("___ sdokdwqe ___", sdokdwqe);

    const sdfgerwr = (
      <BearList
        //
        //   addTrue
        objFuncTrue
        // dragTrue
        // selectableTrue
        {...sdokdwqe}
      />
    );

    const okasew = {
      obj: sdfgerwr,
      // style: {
      //   padding: "15px 0",
      // },
    };

    const isjdwe = <BearDiv {...okasew} />;

    return isjdwe;
  }

  function DateObj() {
    // const xobkzdf = (formatDate)

    const dateFinno =
      //
      // "";
      dateFromString(vcbsdfasdf);

    const fadsfa =
      //
      "We'll complete your files ";
    // "We'll send your files ";
    // "Your files will arrive by ";
    // "Email delivery: ";
    //   by
    // "Devliery: ";

    const ajsdw = fadsfa + dateFinno + ".";

    const qwygeqa = {
      fontSize: "24px",
      // background: "black",
      // color: "white",
      textAlign: "left",
      // padding: "0 10px",
    };

    const okawee = {
      obj: ajsdw,
      // className: "pointer",
      style: qwygeqa,
    };

    return <BearDiv {...okawee} />;
  }

  function TiTLOs() {
    //
    const bgfosdf =
      //
      PluralFunc("episode", numMain);

    const oiksdwe =
      //
      "Orders (" + bgfosdf + ")";

    const ijasdw = {
      obj: oiksdwe,
      // textvar: oiksdwe,
      // className: "buttonHover",
      style: {
        fontSize: "34px",
        textAlign: "left",
        fontWeight: "bold",
      },
    };

    const uashwe = (
      <>
        {/* <ImageTextDiv {...ijasdw} /> */}
        <BearDiv {...ijasdw} />
      </>
    );

    return uashwe;
  }

  //   const singlEaADDmE = asijwe()

  const yweqwe = (
    //
    //
    <MediaFind />
  );
  // showORder && isjdwe;

  const aysgwe = {
    obj: yweqwe,
    // fadeTrue: true,
    // obj: editMed,
    // trueobj: <Editos />,
    // falseobj: <MediaFind />,
  };

  const ajsew = (
    //
    // yweqwe;
    <BearDiv {...aysgwe} />
  );

  function AdddMore() {
    function cvxkbmfdf() {
      logs.logga("___ AdddMore ___", "cvxkbmfdf");

      if (addFunc) {
        addFunc();
      }
    }

    const uiasjdw = {
      onClick: cvxkbmfdf,
      seriesObj: seriesObj,
      ...addButtonConfig,
    };

    function ShortMess() {
      const ajdswe = seriesOver ? getSHortSet(seriesOver) + ", " : "";

      const xgforet = joinString(
        [
          ajdswe,
          'use the "Add More" button to get episodes directly from the',
          seriesOver.name,
          "Youtube channel.",
        ],
        " "
      ).toUpperCase();

      const ijaew = (
        <>
          {xgforet}
          <br />
          {/* (Opens Youtube in a new tab.) */}
        </>
      );

      const ijsadew = {
        obj: ijaew,
        closeTrue: true,
      };

      const vbfgrt =
        //
        true;
      // false;
      // gens.mobileView;

      const uashew =
        //
        vbfgrt ? <GlobalFooter {...ijsadew} /> : <BearDiv {...ijsadew} />;

      return uashew;
    }

    const jawwqe = seriesOver;
    const ijewasw = jawwqe && <ShortMess />;

    const asokwe = (
      <>
        {/* {ijewasw} */}
        <AddSeriesOpen {...uiasjdw} />
      </>
    );

    return asokwe;
  }

  const ocxvkbas = orderObj && orderObj.deliveryTime;
  //  && orderObj.deliveryTime;
  const { deliveryBase } = mediaDeliver(
    mediaList,
    orderObj && orderObj.deliveryPlusHours,
    "orderList"
  );

  const vcbsdfasdf =
    //
    // "";
    // formatDate(ocxvkbas);
    ocxvkbas ? ocxvkbas : deliveryBase;

  logs.logga("___ ocxvkbas ___", ocxvkbas);
  logs.logga("___ vcbsdfasdf ___", vcbsdfasdf);

  const checkShow =
    //
    true;
  // orderObj ? checkTimeBefore(orderObj.deliveryTime) : true;

  const datero = checkShow && <DateObj />;

  const dasfwer = (
    <>
      <TiTLOs />
      {datero}
    </>
  );

  const xkzxa =
    //
    // dasfwer;
    !noTitle && dasfwer;

  const ofkvs = {
    obj: <AdddMore />,
    style: {
      //
      textAling: "center",
      padding: "20px",
    },
  };

  const cvkmbd =
    //
    // "";
    !noAddMore && <BearDiv {...ofkvs} />;

  function Topios() {
    //
    const vifsdf = {
      // listvar:
      // horiz:
      listTrue: true,
      centerobj: xkzxa,
      rightobj: <AdddMore />,
    };

    const xcvkbdd = (
      <>
        {/* Asdfarwesdf */}
        {xkzxa}
        {/* {cvkmbd} */}
        {/* <BearFloat {...vifsdf} /> */}
        {/* {datero} */}
      </>
    );

    const ijwefdg = {
      obj: xcvkbdd,
      ...topConfig,
    };

    const ytpyt = <BearDiv {...ijwefdg} />;

    return ytpyt;
  }

  const sdjsa = {
    width: "200px",
    margin: "10px 0 ",
    fontSize: "30px",
  };

  const ijsdf = {
    style: sdjsa,
    ...costConfig,
  };
  const ijsdwe =
    //
    "";
  // <OrderCostDrop {...ijsdf} />;

  const oksadw = (
    <>
      {/* <ButtORder /> */}
      {/* {kads} */}
      {ijsdwe}
      <Topios />
      {/* {yweqwe} */}
      {ajsew}
      {cvkmbd}
      {/* {cvkmbd} */}
      {/* {singlEaADDmE} */}
    </>
  );

  const xicjvsr =
    //
    // "aosdwewe";
    oksadw;

  const wyeqew = {
    fontSize: 40,
  };

  const kasdwqe = {
    obj: xicjvsr,
    style: wyeqew.fontSize,
    ...genConfig,
  };

  return <BearDiv {...kasdwqe} />;
}
