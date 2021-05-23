import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  playBsaelist,
  logs,
} from "@SillyScribe95/bedia-shared/";
import TextareaAutosize from "react-textarea-autosize";
import { useForm, Controller } from "react-hook-form";
import { BearDiv } from "../BearDiv";
import { BearIcon } from "../BearIcon";
import { BearFloat } from "../BearFloat";
import { BearButton } from "../button/BearButton";
import { BearSelect } from "../select/BearSelect";
import { BearIconText } from "../GlobalComps";

// import CreatableSelect from "react-select/creatable";
// import { BearButton } from "./BearButton";
// import BearSelect from "./BearSelect";
// import SearchFormFields from "../containers/search/SearchFormFields";

export function BearInput({
  textConfig,
  titleConfig,
  textvar,
  errorobj,
  noInput,
  onInput,
  requireClass,
  noTitle,
  checked,
  control,
  //
  //
  inputObj,
  inputFunction,
  inputObjectFunction,
  //
  //
  selectTrue,
  style,
  onChange,
  obj,
  ref,
  required,
  name,
  fontSize,
  sameLine,
  newTrue,
  initialValue,
  selectvar,
  rightSubmit,
  inputType,
  rows,
  titlevar,
  placeholder,
  subtitlevar,
  errors,
  iconvar,
  checkList,
  checklistTitle,
  lineBelow,
  //
  // 1title
  addFunc,
  titleWidth = "160px",
  ...dfsgre
}) {
  logs.logga("___Asidnw obj ___", obj);

  // 1const
  const [checkBoxo, setcheckBoxo] = useState();
  const [chekBxTrue, setchekBxTrue] = useState(checked);
  const [valInit, setvalInit] = useState(initialValue);

  const asw =
    //
    // "";
    errors && errors[name] && errors[name]["message"];

  fontSize = fontSize ? fontSize : 18;

  const ashwe = {
    width: "100%",
    fontSize: fontSize,
    padding: "0px 5px",
    ...style,
  };

  let daezxv = {
    //
    fontSize: "1.1em",
    width: "100%",
  };

  const ijdsew =
    //
    // required
    requireClass && required;

  const slasso = ijdsew ? "required" : "";

  function chaneeo(adowe) {
    const valows = adowe.target && adowe.target.value;

    // logs.logga("___ adowe ___", adowe);
    logs.logga("___ valows ___", valows);

    // setvalInit(valows);

    if (onChange) {
      onChange(valows);
    }
  }

  const changBssoe = {
    onChange: chaneeo,
    value: valInit,
    valueFunc: setvalInit,
  };

  // 1ref
  function getRef(rfo) {
    return { ref: rfo, inputRef: rfo, innerRef: rfo };
  }

  const sdweew = {
    name: name,
    id: name,
    className: slasso,
    ...getRef(ref),
  };

  let cntrMan = {
    control: control,
    ...sdweew,
  };

  const objbase = {
    ...dfsgre,
    ...sdweew,
    // ...cntrMan,
    fontSize: fontSize,
    errorobj: asw,
    textvar: textvar,
    required: required,
    innerRef: { required: required },
    // ...changBssoe,
    style: daezxv,
  };

  let sdfoewr = "select";

  let sdjrete =
    //
    inputType == sdfoewr;
  // logtrue

  // 1console
  function logros(...asa) {
    //
    let sdfijer =
      //
      "asda";
    // name == "testSelect";

    if (sdfijer) {
      logs.logga(name + "___BearForm--INPUT------zzz", ...asa);
    }
  }

  //
  //
  let ujsdqwe = "";
  //

  function retFunc() {
    switch (inputType) {
      case "select":
        break;

      case "selectable":
        const dfdsawe = {
          ...objbase,
        };
        ujsdqwe = <CreatableSelect {...dfdsawe} />;
        break;
      case "textarea":
        // 1rows
        rows = rows ? rows : 3;

        const ijsdfasd = {
          rows: rows,
          minRows: rows,
          defaultValue: textvar,
          ...objbase,
          ...textConfig,
          // ref={(tag) => (this.textarea = tag)}
        };

        // const sadije = innerRef({ required: required }

        logs.logga(textvar + "___ INPUTBASE TEXTAREA ___", ijsdfasd);

        const okasewe =
          //
          "";
        // placeholder

        // ujsdqwe = <TextareaAutosize autoFocus />;
        ujsdqwe = <TextareaAutosize {...ijsdfasd} />;
        // {textvar}</TextareaAutosize>;
        // ujsdqwe = <textarea {...ijsdfasd} />;
        // ujsdqwe = <textarea {...ijsdfasd}>{textvar}</textarea>;
        // ujsdqwe = "";

        break;

      case "checkboxList":
        //
        ujsdqwe = "ijadqwoek";
      // ujsdqwe = <input {...dsoadkw0} />;

      case "checkbox":
        const dsoadkw0 = {
          type: "checkbox",
          // onChange: (e) => setchekBxTrue(!chekBxTrue),
          ...objbase,
        };

        // const okaswe;
        const isawe = {
          type: "checkbox",
          // {...dsoadkw0}
        };
        const ijasdwe = {
          obj: textvar,
          style: {
            marginRight: "10px",
          },
        };

        const dsf9jewr = <BearDiv {...ijasdwe} />;

        ujsdqwe = (
          <>
            {/*  */}
            {/* <input {...dsoadkw0} />; */}
            <input {...isawe} /> {dsf9jewr}
            {/* </input> */}
            {/* <gens.CheckboxMain {...dsoadkw0}>{obj["textvar"]}</gens.CheckboxMain> */}
          </>
        );

        break;

      default:
        // textvar = "DEFAULT TEXT";
        const ijawe = {
          // type: "text",
          // height: "10px"
          rows: 1,
          autocomplete: "off",
          className: "noresize",
          // defaultValue: textvar,
          // placeholder: textvar,
          // value: textvar,
          // value: textvar ? textvar : undefined,
          ...objbase,
        };

        logs.logga(name + "___ inputBase--INPUT ___", ijawe);

        // 1input
        ujsdqwe = noInput ? (
          ""
        ) : textvar ? (
          //
          // <gens.StInput {...objbase}>{textvar}</gens.StInput>
          <textarea {...ijawe}>{textvar}</textarea>
        ) : (
          // <input {...ijawe}>{textvar}</input>
          // <input {...ijawe} />
          // <textarea {...ijawe}>{textvar}</textarea>
          // <gens.StInput {...ijawe} />
          // <input {...ijawe} />
          <input {...ijawe} />
        );
    }

    return ujsdqwe;
  }

  function ChooseTit() {
    const isade = {
      // ,
    };

    const ijasde =
      //
      "";
    // <SearchFormFields {...isade} />;

    return ijasde;
  }

  // 1title
  function TitleOBbi({ style, ...sd }) {
    //

    const skdowqe = sameLine
      ? {
          //
          fontSize: "1.15em",
          minWidth: titleWidth,
          marginTop: "-10px",
        }
      : {
          //
          fontSize: "1.15em",
        };

    const iawqe = {
      ...skdowqe,
      fontWeight: "bold",
      ...style,
    };

    const ijweq = {
      obj: " *",
      style: {
        color: "red",
      },
    };

    const aokdwe =
      //
      ijdsew ? <BearDiv spanTrue {...ijweq} /> : "";

    const olbknfr = {
      fontSize: "0.7em",
      color: "red",
      marginLeft: "10px",
      // className: "error",
    };

    const asdwe = {
      obj: asw,
      className: "error",
      style: olbknfr,
    };

    const bnkifg = <BearDiv spanTrue {...asdwe} />;

    // TITLE MAIN
    const okasde =
      //
      newTrue ? (
        ChooseTit()
      ) : (
        <>
          {/* {BearIcon(iconvar, titlevar)} */}
          {/* {BearIconText(iconvar, titlevar)} */}
          {iconvar} {titlevar}
        </>
      );

    const ioakawe = (
      <>
        {okasde}
        {aokdwe}
        {bnkifg}
      </>
    );

    function BswTi() {
      const cvobkof = {
        className: "shadowHover pointer",
        onClick: addFunc,
        obj: BearIcon("➕", ""),
        style: {
          padding: "5px",
          marginTop: "-5px",
          fontSize: "0.8em",
          // marginLeft: "20px",
        },
      };

      const dfigjrt = <BearDiv {...cvobkof} />;
      const kcmdr = {
        centerobj: ioakawe,
        rightobj: dfigjrt,
      };

      const ijcwe = BearFloat(kcmdr);

      return ijcwe;
    }

    const ijsae = addFunc ? BswTi() : ioakawe;

    const asdojwqs = {
      obj: ijsae,
      // textvar: ioakawe,
      iconvar: iconvar,
      noImage: !iconvar,
      noIcon: !iconvar,
      ...titleConfig,
      style: iawqe,
      // noText: true,
      // disVar: true,
    };

    logs.logga(name + "___ inpuBase TITLE CONF ___", asdojwqs);

    const seokwer = (
      //
      // <ImageTextDiv {...asdojwqs} />
      // <BediaTextDiv {...asdojwqs} />
      <BearDiv {...asdojwqs} />
    );

    function Subtoter() {
      const ikawed = {
        fontSize: "0.8em",
      };

      const okawe = {
        obj: subtitlevar,
        style: ikawed,
      };
      const uiajwe = <BearDiv {...okawe} />;

      return uiajwe;
    }

    const ijawe = subtitlevar && <Subtoter />;

    const sdfgret = (
      <>
        {/* {okasde} */}
        {/* TITLE */}
        {seokwer}
        {ijawe}
        {/* <hr /> */}
      </>
    );

    const kase = {
      padding: "10px 0",
      textAlign: "left",
    };

    const isawqe = {
      obj: sdfgret,
      style: kase,
    };

    return <BearDiv {...isawqe} />;
  }

  const showTit =
    //
    // true;
    !noTitle && titlevar;

  const oksdwqe = showTit && <TitleOBbi {...titleConfig} />;

  const confijre = {
    size: "sm",
    type: "submit",
    obj: "YES",
  };

  function goCont(goObj) {
    // inputFunction(objbase)

    function inEar({
      //
      field: { ref, value, ...field },
    }) {
      const sfeqwwe = {
        ...objbase,
        ...field,
        ...getRef(ref),
      };

      logros("___ BearCont CONTROL field ___", field);
      logros("___ BerInot ___", sfeqwwe);

      const dfigjew =
        //
        inputFunction(sfeqwwe);
      // BearSelect(sfeqwwe);

      return dfigjew;
    }

    let asod =
      //
      Controller({
        // as: inputFunction(objbase),
        ...cntrMan,
        render: inEar,
      });

    return asod;
  }

  ujsdqwe = inputObj
    ? inputObj
    : inputFunction
    ? goCont()
    : inputObjectFunction
    ? inputObjectFunction(retFunc())
    : retFunc();

  const jaewdsr = {
    rightobj: <BearButton {...confijre} />,
    centerobj: ujsdqwe,
  };

  // rightSubmit = true;

  const asdijwe = rightSubmit ? (
    //
    <>
      <BearFloat {...jaewdsr} />
      {/* <InputGroup size="md">
          {ujsdqwe}
          <InputRightElement width="4.5rem">
            <BearButton {...confijre} />
          </InputRightElement>
        </InputGroup> */}
    </>
  ) : (
    ujsdqwe
  );

  logs.logga("___ ujsdqwe ___", ujsdqwe);
  logs.logga("___ asdijwe ___", asdijwe);

  let ijsa = {
    style: ashwe,
  };

  const okdsae = {
    style: {
      width: "100%",
    },
  };

  // lineBelow = true;
  const xvcmfde = lineBelow && (
    <>
      <hr />
      {/* sadowqkewqe */}
      {/* <Divider /> */}
    </>
  );

  const okaweasd = (
    <>
      {oksdwqe}
      <div {...okdsae}>{asdijwe}</div>
    </>
  );

  function asdowe() {
    return okaweasd;
  }

  const ijdas = sameLine ? (
    <Flex {...ijsa}>{asdowe()}</Flex>
  ) : (
    <div {...ijsa}>{okaweasd}</div>
  );

  const kaosdew = (
    <>
      {/*  */}
      {ijdas}
      {xvcmfde}
    </>
  );

  return kaosdew;
}
