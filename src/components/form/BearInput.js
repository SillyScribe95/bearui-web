import React, {
  //
  useState,
  useContext,
} from "react";
import TextareaAutosize from "react-textarea-autosize";
import { useForm, Controller } from "react-hook-form";
import { BearDiv } from "../BearDiv";
import { BearIcon } from "../BearIcon";
import { BearFloat } from "../BearFloat";
import { BearButton } from "../button/BearButton";
import * as logs from "../../functions/logFuncs";

// import CreatableSelect from "react-select/creatable";
// import { BearButton } from "./BearButton";
// import SelectMain from "./SelectMain";
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
  inputObj,
  inputFunction,
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
  typevar,
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

  // const [checkBoxo, setcheckBoxo] = useState();
  // const [chekBxTrue, setchekBxTrue] = useState(checked);

  logs.logga("___ errors ___", errors);

  //   const [valInit, setvalInit] = useState(initialValue);

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
    const valows = adowe.target.value;

    // logs.logga("___ adowe ___", adowe);
    logs.logga("___ valows ___", valows);

    // setvalInit(valows);

    if (onChange) {
      onChange(valows);
    }
  }

  const changBssoe = {
    onChange: chaneeo,
    // value: valInit,
  };

  const sdweew = {
    name: name,
    id: name,
    ref: ref,
    innerRef: ref,
    // onBlur: chaneeo,
    className: slasso,
  };

  let cntrMan = {
    control: control,
    ...sdweew,
  };

  const objbase = {
    ...dfsgre,
    ...cntrMan,
    fontSize: fontSize,
    errorobj: asw,
    textvar: textvar,
    required: required,
    innerRef: { required: required },
    // ...changBssoe,
    style: daezxv,
  };

  let sdfoewr =
    //
    "select";

  let sdjrete =
    //
    typevar == sdfoewr;
  // logtrue

  // 1console
  if (sdjrete) {
    logs.logga(typevar + "___formMain--INPUT------zzz", name, objbase);
  }

  //
  //
  let ujsdqwe = "";
  //

  function retFunc() {
    switch (typevar) {
      case "select":
        let fodsfew = {
          isMulti: true,
          ...sdweew,
        };

        // ujsdqwe = "dlpadewq";

        // ujsdqwe = <SelectMain {...fodsfew} />;
        ujsdqwe = <Controller as={ujsdqwe} {...cntrMan} />;

        // ujsdqwe = <SelectMain {...fodsfew} />;

        // ujsdqwe = (
        //   <select {...objbase}>
        //     {selectvar.map((value) => (
        //       <option key={value} value={value}>
        //         {value}
        //       </option>
        //     ))}
        //   </select>
        // );

        break;

      case "selectable":
        //
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

        const dfdsawe = {
          ...objbase,
          isClearable: true,
          // onInputChange={this.handleInputChange}
          // options={colourOptions}
        };
        ujsdqwe = <CreatableSelect {...dfdsawe} />;

        //
        break;
      case "textarea":
        // const gfknht =  ref={(tag) => (this.textarea = tag)}
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

        logs.logga("___ inputBase--INPUT ___", ijawe);

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
  function TitleOBbi() {
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
      ...titleConfig?.style,
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
      newTrue ? <ChooseTit /> : BearIcon(iconvar, titlevar);
    //         {iconvar} {titlevar}

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

  const oksdwqe = showTit && <TitleOBbi />;

  const confijre = {
    size: "sm",
    type: "submit",
    obj: "YES",
  };

  // ujsdqwe = <Controller as={inputFunction(objbase)} {...cntrMan} />;

  ujsdqwe = inputObj
    ? inputObj(objbase)
    : inputFunction
    ? inputObj(objbase)
    : // <Controller as={inputFunction(objbase)} {...cntrMan} />
      retFunc();

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
