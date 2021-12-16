import React, {
  //
  useState,
  useContext,
} from "react";
import { bearlog } from "../../index";
import { authListDict } from "../../consts/socialConst";
import { BearTextMedia } from "../BearTextMedia";
import { BearList } from "../list/BearList";
import { BearCheckMain } from "../check/BearCheckMain";
import { BearDiv } from "../BearDiv";

export function BearSocialBase({
  //
  shareLink,
  shareText,
  userText,
  iconSide,
  nameTrue,
  iconPop,
  dictvar,
  embedCode,
  renderItem,
  ...sdfsrew
}) {
  const sdokfwe = userText ? `&usrn=${userText}` : "";

  shareLink =
    //
    // shareLink + "sdokfwe";
    shareLink + sdokfwe;

  function asdf(itemName) {
    const { styleIcon } = authListDict[itemName] ? authListDict[itemName] : "";
    const { textvar, link, icon, ...aaa } = dictvar[itemName]
      ? dictvar[itemName]
      : "";

    const iqeqwe = BearTextMedia({
      iconConfig: {style: { ...styleIcon }},
      outsideLink: link,
      iconvar: icon,
      textvar,
      ...aaa,
    });

    return renderItem ? renderItem(iqeqwe) : iqeqwe
  }

  function zsdfadF(aaa) {
    bearlog.lug("___ aaa ___", aaa);

    let dewwqasxcc =
      //
      asdf(aaa);

    return dewwqasxcc;
  }
  const ijsadwe = {
    renderItem: zsdfadF,
    ...sdfsrew,
  };

  const compBase = BearList(ijsadwe);
  const ijfdewr = BearCheckMain("BearSocialShare", compBase, ijsadwe);

  return ijfdewr;
}
