import React, {
  //
  useState,
  useContext,
} from "react";
import {
  //
  BearTitle,
  BearSearchList,
  BearDiv,
} from "bearui-web";
import {
  //
  logs,
} from "@SillyScribe95/bedia-shared";
import { questionConst } from "../../const/questionConst";

export function SearchQuestionBear({
  //
  seriesObj,
  ...args
}) {
  // 1const

  // 1function
  function SearchBaser() {
    function Aqwejsa({ question, answer }) {
      const ijsdeas = {
        title: question,
        subtitle: answer,
      };

      logs.logga("___ ijsdeas ___", ijsdeas);

      return <BearTitle {...ijsdeas} />;
    }

    const naskjew = {
      bearName: "bearQuestions",
      list: questionConst,
      searchAttrs: ["question", "answer", "tags"],
      renderItem: Aqwejsa,
    };

    return <BearSearchList {...naskjew} />;
  }

  const okfdsd = (
    <>
      {/*  */}
      <SearchBaser />
    </>
  );

  args = {
    obj: okfdsd,
    ...args,
  };

  return <BearDiv {...args} />;
}
