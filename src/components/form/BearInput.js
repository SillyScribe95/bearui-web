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
import ResizeTextarea from "react-textarea-autosize";
import { useForm, Controller } from "react-hook-form";
import { BearDiv } from "../BearDiv";
import { BearFloat } from "../BearFloat";
import { BearButton } from "../button/BearButton";
import { Flex } from "@chakra-ui/layout";
import { InputTitle } from "./InputTitle";
import { Textarea as TextChak, Input as InputChak } from "@chakra-ui/react";
import { Input as InputStrap } from "reactstrap";

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
  // 1change 1onchange
  changeGlobal,
  onChange,
  obj,
  ref,
  required,
  name,
  errors,
  fontSize,
  sameLine,
  initialValue,
  selectvar,
  rightSubmit,
  inputType,
  rows,
  titlevar,
  placeholder,
  checkList,
  checklistTitle,
  lineBelow,
  //
  // 1title
  titleWidth = "160px",
  ...dfsgre
}) {
  logs.logga("___Asidnw obj ___", obj);

  // 1const
  const [checkBoxo, setcheckBoxo] = useState();
  const [chekBxTrue, setchekBxTrue] = useState(checked);
  const [valInit, setvalInit] = useState(initialValue);

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
    required;
  // requireClass && required;

  const slasso = ijdsew ? "required" : "";

  // 1onchange
  function mainChange(valows) {
    // logs.logga("___ adowe ___", adowe);
    logs.logga("___ valows ___", valows);

    setvalInit(valows);

    // if (onChange) {
    //   onChange(valows);
    // }
  }

  function chaneeo(adowe) {
    const valows =
      //
      adowe.target && adowe.target.value;

    logs.logga("___Asidnw obj ___", {
      MAIN: adowe,
      VALUE: valows,
    });

    mainChange(valows);
  }

  const changBssoe = {
    value: valInit,
    valueFunc: setvalInit,
  };

  const isjdfr = { onChange: chaneeo };

  const changeAll = {
    ...changBssoe,
    ...isjdfr,
  };

  const nsijqwe =
    //
    // isjdfr;
    changeGlobal && isjdfr;

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

  const asw =
    //
    // "";
    errors && errors[name] && errors[name]["message"];

  const zdssdire = {
    ...dfsgre,
    errorMessage: asw,
    required: required,
  };

  const objbase = {
    ...sdweew,
    fontSize: fontSize,
    textvar: textvar,
    ...zdssdire,
    innerRef: { required: required },
    ...changeAll,
    // ...cntrMan,
    // ...changBssoe,
    ...nsijqwe,
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

    const oisdkre =
      //
      "name";
    // "testSelect"

    let sdfijer =
      //
      // "asda";
      name == oisdkre;

    if (sdfijer) {
      logs.logge(name + "___BearForm--INPUT------zzz", ...asa);
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

        const chakResize = {
          minH: "unset",
          overflow: "hidden",
          w: "100%",
          resize: "none",
          as: ResizeTextarea,
        };

        const ijsdfasd = {
          rows: rows,
          minRows: rows,
          defaultValue: textvar,
          ...chakResize,
          ...objbase,
          ...textConfig,
          // ref={(tag) => (this.textarea = tag)}
        };

        // const sadije = innerRef({ required: required }

        logs.logga(textvar + "___ INPUTBASE TEXTAREA ___", ijsdfasd);

        // size="sm"

        const okasewe =
          //
          "";
        // placeholder

        // ujsdqwe = <TextareaAutosize {...ijsdfasd} />;
        ujsdqwe = <TextChak {...ijsdfasd} />;
        // ujsdqwe = <textarea {...ijsdfasd} />;

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

        // 1input
        ujsdqwe = (
          <>
            {/*  */}
            {/* <input {...dsoadkw0} />; */}
            <Input {...isawe} />
            {/* <input {...isawe} /> {dsf9jewr} */}
            {/* </input> */}
            {/* <gens.CheckboxMain {...dsoadkw0}>{obj["textvar"]}</gens.CheckboxMain> */}
          </>
        );

        break;

      // case "number":
      //   [type] = "tel";

      default:
        // textvar = "DEFAULT TEXT";

        const sdkfewr = {
          focusBorderColor: "lime",
          // placeholder: "Here is a sample placeholder"
        };

        const ijawe = {
          // type: "text",
          // height: "10px"
          ...sdkfewr,
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
          <InputChak {...ijawe} />
          // <InputStrap {...ijawe} />
          // <input {...ijawe} />
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
  function TitleOBbi({ style, ...cxzv }) {
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

    const sdfkewr = {
      titlevar: titlevar,
      style: iawqe,
      ...cxzv,
    };

    return <InputTitle {...sdfkewr} />;
  }

  const showTit =
    //
    // true;
    !noTitle && titlevar;

  const saewase = {
    ...zdssdire,
    ...titleConfig,
  };

  const oksdwqe = showTit && <TitleOBbi {...saewase} />;

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
