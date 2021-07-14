import React, {
  useState,
  useReducer,
  Fragment,
  createRef,
  forwardRef,
  useContext,
  useCallback,
  useRef,
  logs,
} from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { MainContext } from "../contexts/MainContext";

import * as gens from "../consts/GenStyled";

import BearDiv from "../components/BearDiv";

// IMPORT OTHER COMPONENTS HERE
import {
  getParamVar,
  ChooseOpt,
  ImageTextList,
  joinString,
} from "../functions/GlobalFunctions";
import ImageTextDiv from "./ImageTextDiv";
import HeaderRight from "../containers/header/HeaderRight";
import FindLinkForm from "../containers/FindLinkForm";
import HeaderCenter from "../containers/header/HeaderCenter";

import BediaLogo from "../containers/bedia/BediaLogo";

export default function HeaderContent({ stepTrue, centerobj, ...asdwew }) {
  //

  const {
    //
    requestHigh,
    currBasketMedia,
    orderLength,
    perMinute,
  } = useContext(MainContext);

  const hdSzo =
    //
    // 12;
    gens.mobview(18, 26);

  const showHamburger = true;
  const styledSearo = true;
  const orienTrue = true;
  const collLeft =
    //
    4;
  // styledSearo ? 6 : orienTrue ? 3 : 3;
  const collMid =
    //
    gens.mobview(6, 12);
  // styledSearo ? 4 : orienTrue ? 18 : 18;
  const collRight =
    //
    gens.mobview(14, 8);
  // 6;
  // styledSearo ? 6 : orienTrue ? 3 : 3;

  const styledHeadView = true;

  function addLnko(asdwe) {
    logs.logga("___ asdwe ___", asdwe);

    const oksew = requestHigh ? "home?rq=" + requestHigh : asdwe;
    return oksew;
  }

  // 1center
  function HeadCenter() {
    const ijdsaawe = (
      <>
        <HeaderCenter {...asdwew} />
        {/*  */}
      </>
    );

    return ijdsaawe;
  }

  // 1logo
  function HeadLogo({ magTrue }) {
    magTrue = magTrue ? orienTrue : "";

    const iasdw = {
      // border: "2px solid green",
      fontSize: hdSzo,
    };

    const sadygqwe =
      //
      "/home";
    // addLnko("home");
    // gens.homeFull + "home"

    const oksdf =
      //
      // 30;
      gens.mobview(30, 38);

    const ijasdwe = {
      imagesize: oksdf,
      style: iasdw,
      linkvar: sadygqwe,
      // fontSize: "44px",
    };

    const asijqwe = (
      // 1problem
      // "asdlqwe"
      <BediaLogo {...ijasdwe} />
    );
    // "";

    return asijqwe;
  }

  function HeadHam() {
    //
    const ijaew = (
      <>
        {/* <gens.HambMenu pageWrapId={"page-wrap"} /> */}

        {/* <HamBut /> */}

        {/* <DropDownMain
          triggerVar="click"
          visible={true}
          // disVar
          overlayVar={<ChooseMenuLinks styleVar={styM} />}
          obj={<HamBut />}
        /> */}
      </>
    );

    return ijaew;
  }

  // 1function
  function clickHeady() {
    const headHumber = !styledHeadView && showHamburger;

    return <BearDiv obj="Asd9qwe" />;
  }

  const injdsf =
    //
    "40px";
  // gens.mobview("17vw", "10vw");

  const popIcono = {
    // color: "red",
    // background: "green",
    // border: "2px solid green",
    fontSize: hdSzo,
    minWidth: injdsf,
    // maxWidth: injdsf,
    // textAlign: "center",
    margin: "0px 10px",
    // padding: "5px",
  };

  const juswaew =
    //
    "";
  // "nav-link";
  // "shadowHover";
  // gens.butClass;
  // gens.buttonMain;

  function asodkae(typowat) {
    // logs.logga("___ typowat ___", typowat)
    // setcurrenPage(typowat);
    // return cgpnldr;
  }

  const ijsadaw = {
    className: juswaew,
    style: popIcono,
    noImage: true,
    noIcon: true,
    divTrue: true,
    // onClick: asodkae,
    // linkvar: addLnko,
    // confirmTrue: true,
    // bediaTrue: true,
  };

  function Fargos({ ...dfsdwer }) {
    const sfsdas = {
      ...ijsadaw,
      ...dfsdwer,
    };

    logs.logga("___ dfsdwer ___", dfsdwer);
    logs.logga("___ Fargos ___", sfsdas);

    const kxdassdsf = <ImageTextDiv {...sfsdas} />;

    return kxdassdsf;
  }

  // 1buttons 1links
  function Trioa() {
    // transcript
    const listIcons = [
      //
      // "subtitle",
      // "video",
      // "audio",
      // "search",
      "price",
      "info",
      // "request",
      // "transcript",
      "order",
      // "user",
    ];
    //

    const getios =
      //
      currBasketMedia;
    // "4";

    const ijgdf = {
      ...gens.lightOpac,
      color: "white",
      margin: "0 10px ",
      paddingBottom: "1px",
      // paddingBottom: "10px",
      fontSize: "0.9em",
    };

    const tyokyrdfv = {
      obj: orderLength,
      style: ijgdf,
      // className: ""
    };

    const ausjdwe =
      //
      checkFullArray(getios);

    const xvbpdf = ausjdwe && <BearDiv span {...tyokyrdfv} />;

    const kasde = (
      <>
        {/*  */}
        Order{/* {orderLength} */}
        {/* SDOER */}
        {/* {xvbpdf} */}
      </>
    );

    const ijsae = {
      ...ChooseOpt("order"),
      textvar: kasde,
    };

    const cksada = {
      ...ChooseOpt(),
      order: ijsae,
    };

    const dictit = {
      dictvar: cksada,
      listvar: listIcons,
      obj: Fargos,
      itemConfig: ijsadaw,
    };

    logs.logga("___ dictit ___", dictit);

    const ijawewe = (
      //
      // "sfosfsd";
      // <BearList {...dictit} objFuncTrue noSlider horizTrue />
      <ImageTextList {...dictit} noSlider horizTrue />
    );

    return ijawewe;
  }

  // function finBig(){
  //   itemConfig: ijsadaw,
  // }

  // https://hermanya.github.io/react-landing-page/

  function LeftHead() {
    //
    const okaew = (
      <>
        {/* asdflkx */}
        {/* <HeadHam /> */}
        <HeadLogo />
      </>
    );

    return okaew;
  }

  //
  function MidHead() {
    const endMid = {
      style: {
        fontSize: "1em",
        // background: "yellow",
        // padding: gens.headPad,
        // paddingTop: topPadSear,
        textAlign: "center",
      },
    };

    const xkszx = "";
    // const xkszx = (
    //   <gens.HeaderMiddle {...endMid}>
    //     {/* <HeadLogo /> */}
    //     {/* <BoolDiv noneTrue bool={styledSearo} obj={<HeadLogo />} /> */}
    //     {/* <CrossFadeMain
    //   bool={styledSearo}
    //   trueObj={<HeadLogo />}
    //   falseObj={<BarSearch />}
    // /> */}
    //   </gens.HeaderMiddle>
    // );

    return xkszx;
  }

  // 1right
  function RightHead() {
    const sworqw = {
      // width: "30px",
      // textAlign: "right",
      // background: "green",
    };

    const ijaeedf = (
      <>
        {/* bnvcbdf */}
        <HeaderRight />
        {/* <Trioa /> */}
        {/* <HeadHam /> */}
        {/* {styledHeadView ? <LogoPar /> : <HeadHam />} */}
      </>
    );

    const hsdaw = {
      // marginRight: "10px",
      // // border: "2px solid red",
      textAlign: "right",
    };

    const jaewfgd = {
      style: hsdaw,
      obj: ijaeedf,
    };

    return <BearDiv {...jaewfgd} />;
  }

  const iajwe = {
    style: { float: "right" },
    obj: <RightHead />,
  };

  const xcvoksd = {
    // // border: "2px solid red",
    textAlign: "center",
    width: "40vw",
    margin: "10px 50px",
  };
  const uahqwe = {
    obj: "",
    // obj: xcvqlm,
    style: xcvoksd,
  };
  const cbijdf = stepTrue && <BearDiv {...uahqwe} />;

  // {/* <BearDiv obj={centerobj} /> */}

  let oaskwe = joinString(
    [
      //
      "d-flex",
      "justify-content-center",
      "mr-auto",
    ],
    " "
  );

  const midHeada = {
    className: oaskwe,
    style: {
      width: "80%",
    },
    navbar: true,
  };

  const sdfiw = {
    // style: {padding:"0 20px"},
    expand: "md",
  };

  const ijqwew = (
    <>
      {/* <BearDiv {...iajwe} /> */}
      {/* <Collit span={collLeft} item={<LeftHead />} />
        {/* <Collit span={collMid} item={<MidHead />} /> */}
      {/* <Collit span={collRight} item={<RightHead />} /> */}
      <Navbar {...sdfiw}>
        {/* The fastest, easiest way to get trancripts. */}
        {!gens.testDev && <LeftHead />}
        <NavbarBrand>{/*  */}</NavbarBrand>
        {/* <Collapse
            // isOpen={isOpen}
            navbar
          > */}
        <Nav {...midHeada}>
          {/* asfdokwe */}
          {/* {centerobj} */}
          {centerobj ? centerobj : <HeadCenter />}
        </Nav>
        <Nav
          //
          // className="mr-auto"
          navbar
        >
          {/* dsfgokre */}
          {/* TO BE ADDED */}
          {/* <NavItem>
              <NavLink href="/make-request/">{ChooseOpt("request")}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about/">{ChooseOpt("info")}</NavLink>
            </NavItem> */}
          {/* <NavItem>
              <NavLink>{Fargos(ChooseOpt("info"))}</NavLink>
            </NavItem> */}
          {/* {cbijdf} */}
          {!gens.testDev && <RightHead />}
        </Nav>
        {/* <NavbarText>Simple Text</NavbarText> */}
        {/* </Collapse> */}
      </Navbar>
    </>
  );

  const ijasdswe =
    //
    "vertAlign";

  const qw8ueqwe = {
    // padding: "5px 5px 50px",
    // width: "100vw",
    // border: "2px solid red",
  };

  const cosdofen = {
    className: ijasdswe,
    style: qw8ueqwe,
    obj: ijqwew,
  };

  const usahdwqe = (
    <>
      {/* <gens.HeaderMain>
        asdojwqewqokwqeo
        <BearDiv {...cosdofen} />
      </gens.HeaderMain> */}
      {/* <BearDiv {...cosdofen} /> */}
      {/* asdawew */}
      {/* {nokgwas} */}
      {/* {perMinute} */}
      {ijqwew}
    </>
  );

  return usahdwqe;
}
