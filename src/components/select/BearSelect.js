import React, {
  //
  useState,
  useContext,
} from "react";
// import { Input } from "@chakra-ui/react";
import Select, { components } from "react-select";
import CreatableSelect from "react-select/creatable";
import AsyncCreatableSelect from "react-select/async-creatable";
import { bearlog } from "../../index";

import { BearIcon } from "../BearIcon";
import { vertAlign } from "../../consts/genStyle";
import { BearDiv } from "../BearDiv";
import { BearBorder, BearErrArgType } from "../GlobalComps";
import { BearError } from "../BearError";
import { mapSelectValue } from "../../functions/selectFuncs";

// import { Input } from "reactstrap";
// import AsyncSelect, { makeAsyncSelect } from "react.-select/async";

export function BearSelect({
  //
  multi,
  optionsDict,
  noMenu,
  menuConfig,
  typeSelect,
  //
  // 1options
  options,
  optionsArray,
  optionStyle,
  hoverStyle,
  optionConfig,
  initOptions,
  optionBorder,
  bearName,
  //
  //
  maxSelect,
  openEdit,
  //
  //
  // 1value
  onChangeSetValue = true,
  initialValue,
  valRemoveAfter,
  // 1create
  create,
  onCreate,
  onCreateValue,
  createTop,
  //
  // 1blur
  onBlurValue,
  //
  //
  hideSearchIcon,
  //
  //
  notClearable,
  logtrue,
  //
  //
  valueFormat,
  valueFunc,
  //
  //
  fontSize = "16px",
  newLineTrue,
  // 1none
  noOptionsMessage,
  //
  //
  // 1change
  onChange,
  onChangeValue,
  //
  // 1menu
  introMessage,
  showMenuIfValue,
  menuStyle,
  searchBarIcon,
  noMenuBorder,
  menuStick,
  //
  //
  messvar = "",
  name = "",
  limitvar,
  //
  // 1ref
  // ref,
  // onInputChange,
  //
  // 1style
  resultsStyle,
  menuHeight,
  margin,
  width = "100%",
  style = {},
  noValueReturn,
  ...args
}) {
  // 1baseargs
  //
  // bearName;

  // 1const
  const [inputBase, setinputBase] = useState();
  const [type, setType] = useState("");
  const sodkfre = overLen(type);

  // 1optionstyle
  const waeaj = {
    ...optionStyle,
  };

  width = width ? width : style["width"] ? style["width"] : "100%";

  // 1search 1icon
  function DropdownIndicator(props) {
    bearlog.lug("___ Dropprops ___", props);

    const ijsde = {
      //
      fontSize: "1.3em",
    };

    const asew = searchBarIcon && BearIcon(searchBarIcon, ijsde);

    const isdjfew = (
      <components.DropdownIndicator {...props}>
        {asew}
      </components.DropdownIndicator>
    );

    const uhfesa =
      //
      hideSearchIcon ? "" : isdjfew;
    // "sdwqe";

    return uhfesa;
  }

  function showTrue(inputValue, selectValue, selectOptions) {
    if (!inputValue) {
      return false;
    }

    let isValid = true;
    // for (let option of selectOptions) {
    //   if (isOptionMatchesInputValue(option, inputValue)) {
    //     isValid = false;
    //     break;
    //   }
    // }

    return isValid;
  }

  // 1OPEN

  // menuIsOpen: true,
  // defaultMenuIsOpen: true,

  function skwe(base) {
    const dokdfew = {
      ...base,
      // paddingTop: "-40px",
      marginTop: "0px",
      // marginBottom: "-40px",
    };

    // bearlog.lug("dropdownIndicator:", dokdfew);

    return dokdfew;
  }

  const sdjfre =
    //
    optionsArray;
  // !optionsArray
  //   ? ""
  //   : initialValue
  //   ? removeItemArray(optionsArray, initialValue)
  //   : optionsArray;

  bearlog.lug("___ ARRAY sdjfre ___", sdjfre);

  let vbmofd =
    //
    options
      ? options
      : optionsDict
      ? mappodDict(optionsDict)
      : optionsArray
      ? optionsArray.map(fsfewr)
      : initOptions;

  bearlog.lug("___ ARRAY sdjfre ___", vbmofd);

  function mappodDict(xcva) {
    let arrro = [];

    for (const [key, value] of Object.entries(xcva)) {
      const iswae = { value: key, label: value };
      arrro.push(iswae);
    }

    bearlog.lug("arrro-zz", arrro);

    return arrro;
  }

  let dsfijaae =
    //
    // optBase;
    vbmofd;

  function fsfewr(sfdgasf) {
    let faesdf = sfdgasf;
    let tpform = typeof sfdgasf;
    switch (tpform) {
      case "string":
        faesdf = asdiwje9(sfdgasf);
        break;
    }

    bearlog.lug("faesdf-zz", { sfdgasf, tpform, faesdf });

    return faesdf;
  }

  function asdiwje9(xckjvf) {
    return { value: xckjvf, label: xckjvf };
    // return mapSelectValue(xckjvf, {});
  }

  // 1option STYLE
  function optRdio({ color, width, ...base }, { isDisabled }) {
    //
    // 1border
    const deqwease =
      //
      // "";
      optionBorder && BearBorder("grey", "5px", "0.5px");

    const colorOpt = {
      color: "black",
    };

    const ijsdr = {
      ...base,
      textAlign: "left",
      // fontSize: fontSize - 4,
      ...waeaj,
      ...deqwease,
      ...vertAlign,
      ...colorOpt,
    };

    bearlog.lug("___ Style OPTIONS ___", ijsdr);

    const sodk =
      //
      hoverbase(ijsdr);
    // skwe(ijsdr);

    return allSty(sodk, "option");
  }

  // 1hover
  function hoverbase(sfdger) {
    const ijsaew = {
      // background: "white",
      "&:hover": {
        ...waeaj,
        ...hoverStyle,
        // background: "red",
        // border: "11px solid green",
      },
      "&active": {
        color: "black",
      },
    };

    return {
      ...sfdger,
      ...ijsaew,
    };
  }

  // 1menu
  function rendMenu(bsao) {
    const aaese = menuStick && {
      marginTop: "0px",
    };

    const sdoewr = !noMenuBorder && bsao;

    const oasde = {
      // paddingRight: "0 100px",
      marginTop: "0px",
      ...sdoewr,
      ...menuStyle,
      ...aaese,
      // ...misdfs,
    };

    bearlog.lug("___ beaselect MENU HEIGHT ___", oasde);

    return allSty(oasde, "rendMenu");
  }

  // 1control
  function rendCont(base) {
    //
    const iksdrqe = {
      ...base,
      // maxHeight: 20,
      // fontSize: fontSize,
      ...style,
    };

    bearlog.lug("___ rendCont ___", iksdrqe);

    return allSty(iksdrqe, "control");
  }

  // 1menulist
  function allLios({ maxHeight, ...styles }) {
    const oksdr = {
      ...styles,
      //
      // padding: "0 100px",
      // WebkitOverflowScrolling: "",
      // boxSizing: "",
      ...misdfs,
      // paddingTop: "-30px",
    };

    bearlog.lug("menuList:", oksdr);

    return allSty(oksdr, "menuList");
  }

  function allSty(adfwer, mesioa) {
    // 1width
    const fullWdh = {
      fontSize,
      // margin,
      ...adfwer,
      minWidth: width,
    };

    bearlog.lug(mesioa, "___ SELECT STYLES ___", fullWdh);

    return fullWdh;
  }

  // 1nooption STYLE
  function optNoos(base) {
    const cvbf = {
      // ...base,
      // ...introStyle,
    };

    return allSty(cvbf, "noOptions");
  }

  // 1height
  const misdfs = menuHeight && {
    height: menuHeight,
    // menuHeight:
  };

  //   1styles
  const stylBasoe = {
    control: rendCont,
    option: optRdio,
    menuList: allLios,
    menu: rendMenu,
    noOptionsMessage: optNoos,
    // clearIndicator: (base) => ({
    //   ...base,
    //   paddingTop: 0,
    //   paddingBottom: 0,
    // }),
  };

  const emptio =
    //
    "";
  // true;
  // isEmpty();

  // 1empty
  const fullOpts =
    // emptio &&
    {
      components: {
        // NoOptionsMessage:
        // NoOptionsMessage: () => null,
        DropdownIndicator,
        // ClearIndicator: () => null,
        IndicatorSeparator: () => null,
        // Menu: () => null,
      },
    };

  //   1menu
  //   newLineTrue
  const mennoPIt = newLineTrue && {
    classNamePrefix: "lp-copy-sel",
  };

  // 1true
  const asidjwe = multi && {
    isMulti: true,
  };

  function sijsad(sdfe) {
    bearlog.lug("___ sdfe ___", sdfe);

    return sdfe && sdfe.value;
  }

  // 1remove
  function qe4ead(vcdfge) {
    const nsdijre = vcdfge.indexOf(valRemoveAfter);
    bearlog.lug = nsdijre;
    var nameos = vcdfge.substr(0);

    return nameos;
  }

  function changeos(params) {
    //

    const ijsdre = valueFormat ? valueFormat : sijsad;

    let sdfgas =
      //
      noValueReturn ? params : multi ? params.map(ijsdre) : params.value;

    let sovkoe = valRemoveAfter ? qe4ead(sdfgas) : sdfgas;

    if ("logtrue") {
      bearlog.lug(messvar + "__SELECT onChange____", params);
    }

    // const ojsde = onChangeDict = onChangeDict

    if (onChange) {
      onChange(sovkoe);
    }

    if (onChangeValue) {
      onChangeValue(sovkoe);
    }

    if (valueFunc) {
      valueFunc(params);
    } else {
      // setType(params);
    }
  }

  function overLen(xvfd) {
    const dasf = maxSelect && xvfd && xvfd.length === maxSelect;

    return dasf;
  }

  // 1onchange maxSelect ?
  function dfgoe(aewqe) {
    const lenOver = overLen(aewqe);
    const difjre =
      //
      // "";
      true;
    // aewqe;
    // lenOver ? aewqe : "";

    bearlog.lug("___  ONCHANGE SELECmain  ___", { lenOver, VALUES: aewqe });

    if (difjre) {
      changeos(aewqe);
    }

    // setType(difjre);

    // if (lenOver) {
    // changeos(aewqe);
    //   setType(aewqe)
    // } else {
    //   setType()
    // }
  }

  // limitvar ? sliceArray(vbmofd, limitvar) : vbmofd;

  // 1id reffo
  let ideoBasa = {
    inputProps: name,
    inputId: name,
    name: name,
  };

  // 1ref
  let ogkfds = {
    // innerRef: ref,
    // ref: ref,
  };

  const iasjdwe = !notClearable && {
    isClearable: true,
  };

  const creatios = onCreate && {
    onCreateOption: onCreate,
    // value: type,
  };

  // 1create Daosm

  let toppoIos =
    //
    // "first";
    createTop ? "first" : "last";

  const sdijer = {
    ...creatios,
    createOptionPosition: toppoIos,
  };

  // 1options 1format
  const fsdogkdr =
    //
    optionConfig && bijewwe;

  // 1args 1base
  const vsfewr = {
    // STYLE
    //
    // 1blur
    // ...blurBase,
    //
    //
    // 1create
    ...sdijer,
    styles: stylBasoe,
    formatOptionLabel: fsdogkdr,
    isSearchable: true,
    ...iasjdwe,
    ...asidjwe,
    ...ideoBasa,
    ...args,
  };

  const xcvbfmg = {
    // MENU
    //
    ...vsfewr,
    ...mennoPIt,
  };

  function setBear(sfje) {}

  function odkqwe(asdfwe) {
    bearlog.lug("___ BEASELECT onreate ___", {
      VALey: asdfwe,
    });

    // const aidjwe = params

    if (onCreate) {
      onCreate(asdfwe);
    }

    setType(asdfwe);
  }

  function Notspse(inputValue, sdsa) {
    const svnsdfsr = typeof noOptionsMessage == "function";
    const idjvsa = !svnsdfsr
      ? BearErrArgType("noOptionsMessage", "function", { bearName })
      : noOptionsMessage(inputValue, sdsa);

    return idjvsa;
  }

  // 1nooptions
  function Rendoa({ inputValue, ...sdsa }) {
    noOptionsMessage
      ? Notspse(inputValue, sdsa)
      : sodkfre
      ? "You can only chooe"
      : "no options for '" + inputValue + "'";
  }

  const xockozd = onBlurValue && {
    onBlur: (sofad) => onBlurValue(sofad.target.value),
  };

  const dfgjrt = {
    menuPlacement: "top",
  };

  function bijewwe({ value, label, customAbbreviation }) {
    const ijsras = {
      ...optionConfig,
    };

    // return "asokqweq";
    return <BearDiv {...ijsras}>{label}</BearDiv>;
  }

  function adsfwer(igje) {
    bearlog.lug("___ igje ___", igje);

    // return "asfwerk";
    return bijewwe;
  }

  const dfijger = !onChangeSetValue && {
    value: "",
  };

  // 1default
  const fgoktr = initialValue && {
    // initialValue: initialValue,
    // defaultInputValue: initialValue,
    // defaultValue:  asdiwje9(initialValue),
    defaultValue: fsfewr(initialValue),
    // value: fsfewr(initialValue),
    // defaultValue: {label: initialValue, value: initialValue },
    // inputValue: initialValue,
  };

  // 1blur
  function blurDone({ input, options }) {
    // this.setState(({
    //   menuIsOpen: false,
    // }))
    input.onBlur(input.value);
  }

  const blurBase = {
    onBlur: blurDone,
  };

  // 1nooptions
  const nvxsads = noOptionsMessage && {
    promptTextCreator: Notspse,
    formatCreateLabel: Notspse,
    noOptionsMessage: Rendoa,
  };

  function ShowItMENU(zxcvok) {
    bearlog.lug("___ zxcvok ___", zxcvok);

    setinputBase(zxcvok);
  }

  // 1intro
  //

  // 1value 1search
  const sdfer = showMenuIfValue && {
    inputValue: inputBase,
    options: inputBase ? dsfijaae : [],
    noOptionsMessage: inputBase ? Rendoa : (asd) => introMessage,
    menuIsOpen: inputBase,
    onInputChange: ShowItMENU,
  };

  const MAINRGS = {
    // ...dfgjrt,
    onChange: dfgoe,
    //
    //
    // 1nooptions
    ...nvxsads,
    // 1EMPTY
    ...fullOpts,
    isValidNewOption: showTrue,
    options: dsfijaae,
    ...dfijger,
    ...xockozd,
    ...fgoktr,
    ...xcvbfmg,
    ...sdfer,
    // ...ogkfds,
  };

  // 1test

  function askdjwe(xcvod) {
    return {
      label: xcvod,
      value: xcvod,
    };
  }

  const xvbdfog = [
    //
    askdjwe("sdfokewr"),
    askdjwe("oiqwe"),
    askdjwe("sfkew0"),
  ];

  const cvbsd = {
    options: xvbdfog,
    // value: [askdjwe("oiqwe")],
    ...vsfewr,
  };

  // 1return 1args
  let dfijew =
    //
    MAINRGS;
  // {};
  // cvbsd;
  // xcvbfmg;

  let bmcvfd =
    //
    // ""
    "2342we";
  // name == "testSelect";
  // logtrue;
  // messvar == "otherTitles";

  // bearlog.lug("bear", dsfijaae);

  // 1console
  bearlog.lug("MAINRGS---", MAINRGS);
  if ("bmcvfd") {
    // bearlog.lug(name, messvar + "___ BeSelect BASE___", xcvbfmg);
    bearlog.lug(name, messvar + "___ BeSelect ALL___", dfijew);
  }

  const sdknsr = create || onCreate || onCreateValue;

  typeSelect = !sodkfre && sdknsr ? "create" : typeSelect;

  let endValue = "";

  //

  switch (typeSelect) {
    case "create":
      endValue = <CreatableSelect {...dfijew} />;
      break;
    case "async":
      endValue = <AsyncCreatableSelect {...dfijew} />;
      break;

    default:
      endValue = (
        //
        // <CreatableSelect {...dfijew} />
        <Select {...dfijew} />
      );
  }

  return endValue;
}

// autoFocus - focus the control when it mounts
// className - apply a className to the control
// classNamePrefix - apply classNames to inner elements with the given prefix
// isDisabled - disable the control
// isMulti - allow the user to select multiple values
// isSearchable - allow the user to search for matching options
// name - generate an HTML input with this name, containing the current value
// onChange - subscribe to change events
// options - specify the options the user can select from
// placeholder - change the text displayed when no option is selected
// value - control the current value
