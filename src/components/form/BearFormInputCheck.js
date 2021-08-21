import React, {
  //
  useState,
  useContext,
} from "react";
import { bearlog } from "../../index";
import { useForm, Controller } from "react-hook-form";
import { BearInputText } from "../input/BearInputText";
import { BearPassword } from "../input/BearPassword";
import { BearCheckbox } from "../input/BearCheckbox";
import { BearRadio } from "../input/BearRadio";
import { BearInputBase } from "../input/BearInputBase";
import { BearInputNameFirstLast } from "../input/BearInputNameFirstLast";
import { BearTextarea } from "../input/BearTextarea";
import { BearSelect } from "../select/BearSelect";
// import Select, { components } from "react-select";
// import CreatableSelect from "react-select/creatable";
// import AsyncCreatableSelect from "react-select/async-creatable";
import { BearInputNumber } from "../input/BearInputNumber";

export function BearFormInputCheck({
  //
  // FORM
  control,
  //
  //

  noInput,
  inputType,
  inputObj,
  inputFunction,
  inputObjectFunction,
  //
  //
  //
  // 1style
  style,
  fontSize = "18px",
  //
  //
  subtitle,
  subtitlePlacement,
  // placeholder,
  obj,
  ref,
  containerStyle,
  name,
  //
  dictvar,
  spaceBetween,
  //
  //
  ...dfsgre
}) {
  //

  const ashwe = {
    // width: "100%",
    padding: "5px",
    fontSize,
    ...style,
  };

  const stylBsae = {
    style: ashwe,
  };

  let sdokwre = {};
  switch (subtitlePlacement) {
    case "placeholder":
      sdokwre = {
        subtitle: "",
        placeholder: subtitle,
      };
      break;
    // default:
  }

  // 1baseargs
  const sdweew = {
    subtitle,
    ...sdokwre,
    // subtitlePlacement,
    name,
    fontSize,
    // containerStyle,
    ...stylBsae,
    ref,
  };

  let cntrMan = {
    control,
    name,
    ...dfsgre,
  };

  const zdssdire = {
    ...sdweew,
    ...dfsgre,
  };

  const objbase = {
    ...zdssdire,

    // ...cntrMan,
    // ...changBssoe,
  };

  // 1console
  function logros(...asa) {
    //

    const oisdkre =
      //
      // "name"
      "dfgerr";
    // "card";
    // "testSelect"

    let sdfijer =
      //
      // "asda";
      name == oisdkre;

    if (sdfijer) {
      bearlog.laggu(name + "___BearForm--INPUT------zzz", ...asa);
    }
  }

  function sijdgdf(
    objer,
    {
      //
      noBase,
      formData,
      errorMessage,
      ...argoes
    } = {},
    nameo
  ) {
    //
    const idjfr = {
      noBase: true,
      ...objbase,
      ...argoes,
    };

    const kdfjg =
      //
      // "";
      "firstLast";

    bearlog.lug("___ idjfr ___", idjfr);
    bearlog.lugCheck(
      "sijddf",
      idjfr.name,
      kdfjg,
      idjfr.name,
      nameo,
      "___ BrFormInpCheck ___",
      idjfr
    );

    return objer(idjfr);
  }

  let ujsdqwe = "";
  let baseTop = true;
  function retFunc() {
    bearlog.lug("___ retFunc-inputType ___", inputType);

    switch (inputType) {
      case "timeList":
        const jsdrse = {
          width: "100px",
          // style: { width: "40px" },
          hideSearchIcon: true,
          optionsArray: ["hours", "days", "weeks", "months", "years"],
        };
        ujsdqwe = goCont(BearSelect, jsdrse);
        break;
      // 1selec
      case "select":
        const sfkwer = {
          // fontSize: "0.2em",
        };
        ujsdqwe = goCont(BearSelect, sfkwer);
        // ujsdqwe = sijdgdf(BearSelect);
        // ujsdqwe = <Select {...objbase} />;
        // ujsdqwe = <AsyncCreatableSelect {...objbase} />;
        // ujsdqwe = <CreatableSelect {...objbase} />;
        break;
      case "button":
        ujsdqwe = sijdgdf(BearButton, {
          type: "submit",
        });
      case "radio":
        ujsdqwe = sijdgdf(BearRadio);
        break;
      case "checkbox":
        ujsdqwe = sijdgdf(BearCheckbox);
        break;
      case "password":
        ujsdqwe = sijdgdf(BearPassword);
        break;
      case "textarea":
        ujsdqwe = sijdgdf(BearTextarea);
        break;
      case "number":
        // baseTop = "";
        const jidr = {
          // noBase: false,
        };
        ujsdqwe = sijdgdf(BearInputNumber, jidr);
        break;
      // case "NAME ":
      //   ujsdqwe = Bear(objbase);
      //   break;
      case "checkboxList":
        ujsdqwe = "ijadqwoek";
        break;
      case "checkbox":
        ujsdqwe = sijdgdf(BearCheckbox);
        break;

      case "number":
        // [type] = "tel";
        break;

      default:
        ujsdqwe = noInput
          ? ""
          : sijdgdf(BearInputText, {
              //
              bearName: "BInput",
            });
    }

    return ujsdqwe;
  }

  function goCont(funcPush, aisjdwe) {
    //
    //

    const difjgr =
      //
      // Rendo
      inEar;
    // funcPush(aisjdwe);
    // inputFunction(objbase);
    // BearSelect(testSelect)
    // <Select {...testSelect} />

    const xbvkf = {
      // as: inputFunction(objbase),
      ...cntrMan,
      render: difjgr,
    };

    bearlog.lug("___ beform CONTROLLER ___", xbvkf);

    let asod = (
      //
      <Controller {...xbvkf} />
    );

    function inEar({
      //
      field: {
        //
        ref,
        value,
        // onChange,
        // onBlur,
        ...field
      },
    }) {
      bearlog.lug("brefeld", { field, objbase, aisjdwe });

      const jodswre = {
        ...containerStyle,
        ...ashwe,
      };

      const sfeqwwe = {
        ...objbase,
        ...aisjdwe,
        ...field,
        inputRef: ref,
        ref,
        // ...field,
        style: jodswre,
      };

      bearlog.lug("___ value ___", value);
      logros("___ BearCont CONTROL fld ___", field);
      bearlog.lug("___ BerInot ___", sfeqwwe);

      const nfdgers =
        //
        // "";
        funcPush(sfeqwwe);
      // BearInputBase(fijsdd, "");

      const dfigjew = (
        <>
          {nfdgers}
          {/* <BearSelect {...sfeqwwe} /> */}
          {/* <Select {...sfeqwwe} {...testSelect} /> */}
        </>
      );

      return dfigjew;
    }

    function Rendo({ onChange, value, name, ref }) {
      const ijdfg = {
        inputRef: ref,
        // classNamePrefix="addl-class"
        // value={options.find((c) => c.value === value)}
        // onChange={(val) => onChange(val.value)}
        // ...testSelect,
      };

      return <BearSelect {...ijdfg} />;
    }

    return asod;
  }

  logros("___ objbase ___", objbase);

  ujsdqwe = inputObj
    ? inputObj
    : inputFunction
    ? goCont(inputFunction)
    : inputObjectFunction
    ? inputObjectFunction(retFunc())
    : retFunc();

  const xsdd =
    //
    // dfsgre
    zdssdire;

  const nidferw =
    //
    // ujsdqwe
    baseTop ? BearInputBase(ujsdqwe, xsdd) : ujsdqwe;

  return nidferw;
}
