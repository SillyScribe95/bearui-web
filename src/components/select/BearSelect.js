import Select from "react-select";
import CreatableSelect from "react-select/creatable";
// import { Input } from "@chakra-ui/react";
import AsyncCreatableSelect from "react-select/async-creatable";
// import { Input } from "reactstrap";
// import AsyncSelect, { makeAsyncSelect } from "react.-select/async";
import React, {
  //
  useState,
  useContext,
} from "react";
import * as logs from "../../functions/logFuncs";

export function BearSelect({
  //
  multi,
  noMenu,
  menuConfig,
  typeSelect,
  options,
  optionConfig,
  notClearable,
  initOptions,
  onChange,
  createTop,
  logtrue,
  createFunc,
  valueFunc,
  fontSize = 16,
  newLineTrue,
  // 1menu
  noMenuBorder,
  menuStick,
  messvar = "",
  name = "",
  limitvar,
  ref,
  // onInputChange,
  //
  // VALUE
  noValueReturn,
  ...args
}) {
  // 1const
  const [type, setType] = useState("");

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

  const lcxvb = {
    width: "100%",
  };

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

  // 1option
  function optRdio(base) {
    const ijsdr = {
      ...base,
      ...lcxvb,
      textAlign: "left",
      fontSize: fontSize - 4,
      ...optionConfig,
    };

    const sodk =
      //
      ijsdr;
    // skwe(ijsdr);

    return sodk;
  }

  // 1menu
  function rendMenu(bsao) {
    const aaese = menuStick && {
      marginTop: "0px",
    };

    const sdoewr = !noMenuBorder && bsao;

    const oasde = {
      ...sdoewr,
      ...aaese,
    };

    return oasde;
  }

  // 1control
  function rendCont(base) {
    const iksdrqe = {
      ...base,
      ...lcxvb,
      // maxHeight: 20,
      fontSize: fontSize,
    };

    logs.logga("___ rendCont ___", iksdrqe);

    return iksdrqe;
  }

  //   1styles
  const stylBasoe = {
    control: rendCont,
    option: optRdio,
    menuList: (styles) => {
      const oksdr = {
        ...lcxvb,
        ...styles,
        // paddingTop: "-30px",
        // maxHeight: "160px",
      };

      logs.logga("menuList:", oksdr);

      return oksdr;
    },
    menu: rendMenu,
    noOptionsMessage: (base) => ({
      ...base,
      fontSize: fontSize,
    }),
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
  const fullOpts = emptio && {
    components: {
      DropdownIndicator: () => null,
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

  function changeos(params) {
    //

    let sovkoe =
      //
      noValueReturn
        ? params
        : multi
        ? params.map((sdfe) => sdfe.value)
        : params.value;

    if (logtrue) {
      logs.logga(messvar + "__SELECT onChange____", params);
    }

    if (onChange) {
      onChange(sovkoe);
    }

    if (valueFunc) {
      valueFunc(params);
    }
  }

  function dfgoe(aewqe) {
    logs.logga("___ ONCHANGE SELECmain  ___", aewqe);

    changeos(aewqe);
  }

  let vbmofd =
    //
    options ? options : initOptions;

  let dsfijaae =
    //
    vbmofd;
  // vbmofd & {

  // }

  // limitvar ? sliceArray(vbmofd, limitvar) : vbmofd;

  // 1id reffo
  let ideoBasa = {
    inputProps: name,
    inputId: name,
    name: name,
  };

  // 1ref
  let ogkfds = {
    innerRef: ref,
    ref: ref,
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
      VALUE: asdfwe,
      createFunc: createFunc,
    });

    setType(asdfwe);

    if (createFunc) {
      createFunc(asdfwe);
    }
  }

  const creatios = createFunc && {
    onCreateOption: createFunc,
    // value: type,
  };

  const fdgrt = {
    styles: stylBasoe,
    onChange: dfgoe,
    ...creatios,
    createOptionPosition: toppoIos,
    //
    // STYLE
    //
    //
    //
    // 1EMPTY
    ...fullOpts,
    isValidNewOption: showTrue,
    options: dsfijaae,
    ...sdfijewr,
    ...ogkfds,
  };

  let dfijew =
    //
    // {};
    fdgrt;
  // sdfijewr;

  let bmcvfd =
    //
    // "";
    name == "testSelect";
  // logtrue;
  // messvar == "otherTitles";

  // 1console
  if (bmcvfd) {
    logs.logga(name, messvar + "___ BearSelect BASE___", sdfijewr);
    logs.logga(name, messvar + "___ BearSelect ALL___", dfijew);
  }

  let endValue = "";
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
