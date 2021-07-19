import React, {
  //
  useState,
  useContext,
} from "react";
// import { Input } from "@chakra-ui/react";
// import Select, { components } from "react-select";
// import CreatableSelect from "react-select/creatable";
// import AsyncCreatableSelect from "react-select/async-creatable";
import {
  //
  logs,
  mapSelectValue,
} from "@SillyScribe95/bedia-shared";
import { BearIcon } from "../BearIcon";
import { vertAlign } from "../../consts/genStyle";
import { BearDiv } from "../BearDiv";
import { BearBorder, BearErrArgType } from "../GlobalComps";
import { BearError } from "../BearError";

// import { Input } from "reactstrap";
// import AsyncSelect, { makeAsyncSelect } from "react.-select/async";

export function BearSelect({
  //
  multi,
  dictvar,
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
  //
  //
  // 1value
  onChangeSetValue,
  initialValue,
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
  width = "100px",
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

  function DropdownIndicator(props) {
    logs.logga("___ Dropprops ___", props);

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

    // logs.logga("dropdownIndicator:", dokdfew);

    return dokdfew;
  }

  // !sodkfre
  //     ? type
  //     :
  let vbmofd =
    //
    options
      ? options
      : optionsArray
      ? mapSelectValue(optionsArray, {})
      : initOptions;

  let dsfijaae =
    //
    // optBase;
    vbmofd;

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

    logs.logga("___ Style OPTIONS ___", ijsdr);

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

    const misdfs = menuHeight && {
      height: menuHeight,
      // menuHeight:
    };

    const oasde = {
      // paddingRight: "0 100px",
      marginTop: "0px",
      ...sdoewr,
      ...menuStyle,
      ...aaese,
      ...misdfs,
    };

    logs.logga("___ beaselect MENU HEIGHT ___", oasde);

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

    logs.logga("___ rendCont ___", iksdrqe);

    return allSty(iksdrqe, "control");
  }

  function allLios(styles) {
    const oksdr = {
      ...styles,
      //
      // padding: "0 100px",
      // WebkitOverflowScrolling: "",
      // boxSizing: "",
      // ...misdfs,
      // paddingTop: "-30px",
    };

    logs.logga("menuList:", oksdr);

    return allSty(oksdr, "menuList");
  }

  function allSty(adfwer, mesioa) {
    // 1width
    const fullWdh = {
      fontSize,
      ...adfwer,
      width: width,
    };

    logs.logga(mesioa, "___ SELECT STYLES ___", fullWdh);

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
        DropdownIndicator,
        IndicatorSeparator: () => null,
        // Menu: () => null,
      },
    };

  //   1menu
  //   newLineTrue
  const mennoPIt = newLineTrue && {
    classNamePrefix: "lp-copy-sel",
  };

  const asidjwe = multi && {
    isMulti: true,
  };

  function sijsad(sdfe) {
    logs.logga("___ sdfe ___", sdfe);

    return sdfe && sdfe.value;
  }

  function changeos(params) {
    //

    const ijsdre = valueFormat ? valueFormat : sijsad;

    let sovkoe =
      //
      noValueReturn ? params : multi ? params.map(ijsdre) : params.value;

    if (logtrue) {
      logs.logga(messvar + "__SELECT onChange____", params);
    }

    // const ojsde = onChangeDict = onChangeDict

    if (onChange) {
      onChange(sovkoe);
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
      "";
    // aewqe;
    // lenOver ? aewqe : "";

    logs.logga("___  ONCHANGE SELECmain  ___", { lenOver, VALUES: aewqe });

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

  const sdfijewr = {
    // MENU
    //
    isSearchable: true,
    ...iasjdwe,
    ...mennoPIt,
    ...asidjwe,
    ...args,
    ...ideoBasa,
  };

  let toppoIos =
    //
    // "first";
    createTop ? "first" : "last";

  function setBear(sfje) {}

  function odkqwe(asdfwe) {
    logs.logga("___ BEASELECT onCreate ___", {
      VALey: asdfwe,
      onCreate,
    });

    setType(asdfwe);

    // const aidjwe = params

    if (onCreate) {
      onCreate(asdfwe);
    }
  }

  const creatios = onCreate && {
    onCreateOption: onCreate,
    value: type,
  };

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

  // 1create Daosm
  const sdijer = {
    ...creatios,
    createOptionPosition: toppoIos,
  };

  const xockozd = onBlurValue && {
    onBlur: (sofad) => onBlurValue(sofad.target.value),
  };

  const dfgjrt = {
    menuPlacement: "top",
  };

  // 1options 1format
  const fsdogkdr =
    //
    optionConfig && bijewwe;

  function bijewwe({ value, label, customAbbreviation }) {
    const ijsras = {
      ...optionConfig,
    };

    // return "asokqweq";
    return <BearDiv {...ijsras}>{label}</BearDiv>;
  }

  function adsfwer(igje) {
    logs.logga("___ igje ___", igje);

    // return "asfwerk";
    return bijewwe;
  }

  const dfijger = !onChangeSetValue && {
    value: "",
  };

  // 1input
  const fgoktr = {
    // initialValue: initialValue,
    defaultInputValue: initialValue,
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
    logs.logga("___ zxcvok ___", zxcvok);

    setinputBase(zxcvok);
  }

  // 1intro

  const sdfer = showMenuIfValue && {
    inputValue: inputBase,
    options: inputBase ? dsfijaae : [],
    noOptionsMessage: inputBase ? Rendoa : (asd) => introMessage,
    // menuIsOpen: inputBase,
    onInputChange: ShowItMENU,
  };

  // 1return 1args
  const fdgrt = {
    // ...dfgjrt,
    styles: stylBasoe,
    onChange: dfgoe,
    formatOptionLabel: fsdogkdr,
    //
    // STYLE
    //
    // 1blur
    // ...blurBase,
    //
    //
    // 1create
    ...sdijer,
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
    ...sdfijewr,
    ...sdfer,
    // ...ogkfds,
  };

  let dfijew =
    //
    // {};
    fdgrt;
  // sdfijewr;

  let bmcvfd =
    //
    // ""
    "2342we";
  // name == "testSelect";
  // logtrue;
  // messvar == "otherTitles";

  logs.logga("options", dsfijaae);

  // 1console
  if (bmcvfd) {
    // logs.logga(name, messvar + "___ BearSelect BASE___", sdfijewr);
    logs.logga(name, messvar + "___ BearSelect ALL___", dfijew);
  }

  typeSelect = !sodkfre && create ? "create" : typeSelect;

  let endValue = "";

  //
  //

  // switch (typeSelect) {
  //   case "create":
  //     endValue = <CreatableSelect {...dfijew} />;
  //     break;
  //   case "async":
  //     endValue = <AsyncCreatableSelect {...dfijew} />;
  //     break;

  //   default:
  //     endValue = (
  //       //
  //       // <CreatableSelect {...dfijew} />
  //       <Select {...dfijew} />
  //     );
  // }

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
