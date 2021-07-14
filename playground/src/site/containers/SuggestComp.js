import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearDiv,
  BearSelect,
  BearForm,
} from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";
import { compTypesBear } from "../const/bearConst";

export function SuggestComp({
  //
  seriesObj,
  ...args
}) {
  // 1const

  function SAjkee() {
    //  1list
    const fdigre = [
      //
      // "nameFirstLast",
      "name",
      "meta",
      "componentGroup",
      "description",
      "timeSaved",
      "tags",
      // "price",
      // "codeExamples",
      // "paid",
    ];

    const ijfdgert = ["List", "Div"];

    // 1name
    const fgfds =
      "This will be what people import into their projects, so try and keep it short. amdoasd k osadk osdk soweowe ksod owe k";

    function SAasjw(Dasd) {
      const ijsdr = "The " + Dasd + " component already exists.";

      const iasse =
        //
        "";
      // homeBear("explore", Dasd)

      const dfkgjer = {
        link: iasse,
      };

      return <BearDiv {...dfkgjer}>{ijsdr}</BearDiv>;
    }

    function dfwesdr(object) {
      logs.logga("___ object ___", object);

      const nidfjsa = object.matches(/^[A-Z]/, {
        message: "Name must start with a capital letter",
        // excludeEmptyString: true,
      });

      return nidfjsa;
    }

    const dnfi = {
      // mustInclude: ["number"],
      // mustOnlyInclude: ["letters"],
      // mustNotInclude: ["spaces", "numbers",]
      validationType: "string",
      validationFunc: dfwesdr,
      infoPopup: fgfds,
      errorName: "Your component name",
      checkExistError: SAasjw,
      checkNotExistArr: ijfdgert,
    };

    const jfaease =
      //
      compTypesBear;

    // 1componentgroup
    const ijsdfwe =
      //
      "ijsdase  asokdqweq";

    const kjdfwe = {
      label: "Component Group",
      inputType: "select",
      // create: true,
      subtitle: ijsdfwe,
      optionsArray: jfaease,
      // valueLower: true,
      // valueFormat: (ASQWE) => ASQWE + ".JASODAW",
      // valueConfig:
      // multi: true,
    };

    // 1meta
    const dazdad =
      //
      "A snappy description which";

    const isdweas = {
      expand: false,
      subtitle: dazdad,
    };

    // 1description
    const dshqeae = {
      default: "Here's another ones",
      subtitle:
        "Some more detail about your component and what it's meant to accomplish.",
    };

    // 1tags
    const weokwq = {
      optionsArray: ["onChange"],
      maxSelect: 2,
      subtitle: "This will help it show up in search terms",
    };

    const sdijfdf = {
      inputType: "number",
      name: "price",
      // label: "Price",
    };

    const ifdsswe = {
      inputType: "checkbox",
      name: "variabeTrue",
      checkboxText: "Let users pay what they want",
      defaultIsChecked: true,
      style: {
        // background: "blue",
        marginTop: "20px",
      },
    };

    // 1paid 1price
    const fglkfer = {
      // noLabel: true,
      label: "Price",
      horizList: [
        //
        sdijfdf,
        ifdsswe,
      ],
      // true
    };

    // 1timesaved
    const ndifgr = (
      //
      <>
        How much time people could save by importing this component into their
        project, rather than building a similar component themselves. <br />
        This should a rough estimate of how long it took for you learn, so be
        realistic!
      </>
    );

    const djfrt = {
      horizList: [
        {
          // style: { fontSize: "30px", width: "160px" },
          name: "timeSavedNumber",
          inputType: "number",
          // step: true,
        },
        { name: "timeSavedEst", inputType: "timeList" },
      ],
    };

    const dfij = {
      subtitle: ndifgr,
      label: "Time Saved",
      placeholder: "2 hours, 2 days or even a week...",
      // ...djfrt
    };

    const difjrt = {
      name: dnfi,
      componentGroup: kjdfwe,
      meta: isdweas,
      description: dshqeae,
      tags: weokwq,
      price: fglkfer,
      timeSaved: dfij,
    };

    function draftSave(sdgfrt) {
      logs.logga("___ DRAFT SAVE ___", sdgfrt);
    }

    function osnfei({ bearName, ...sdgfrt }) {
      //

      logs.loggu("___ suggest Item ___", sdgfrt);

      // addModel(adaew)
      // function
    }

    const difjs = {
      style: {
        background: "red",
      },
    };

    const dfjgerr = {
      first: "Andrew",
      middle: "John",
      last: "Maguire",
      name: "James okasd",
    };

    const ijasease = [
      //
      {
        text: "Submit",
        onClick: osnfei,
      },
      {
        //
        text: "Save Draft",
        onClick: draftSave,
        style: { background: "blue" },
      },
    ];

    function Tisaoke(sdfker) {
      const asuhew = " ";
      const jdfwae = <>{sdfker}</>;
      const kdfgese = {
        // obj:
      };
    }

    const ijfsdf = {
      requireAll: true,
      formid: "sfdas",
      bearName: "SuggestallBear",
      dictvar: difjrt,
      list: fdigre,
      labelConfig: difjs,
      onSubmit: osnfei,
      inputConfig: {
        style: { fontSize: "20px" },
      },
      //
      subtitlePlacement: "infoPopup",
      infoPopupConfig: {
        // divContainer: (qweq) => "asdiojqwewq",
        style: { minWidth: "350px", fontSize: "20px" },
      },
      // style: {
      //   width: "100px",
      // },
      // formData: dfjgerr,
      // buttonList: ijasease,
    };

    const fkdjgt = <BearForm {...ijfsdf} />;

    return fkdjgt;
  }

  const okfdsd = (
    <>
      {/*  */}
      <SAjkee />
    </>
  );

  const kjfd = {
    //
    padding: "0 2%",
    // color: "white",
    // background: "red",
  };

  args = {
    obj: okfdsd,
    style: kjfd,
    ...args,
  };

  return <BearDiv {...args} />;
}
