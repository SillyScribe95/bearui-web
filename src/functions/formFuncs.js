import { isObject } from "lodash";
import { logs } from "..";

export function focusBase({
  //
  list,
  onFocus,
}) {
  const existo =
    //
    Array.isArray(list) && list[0];
  const ijdswer =
    //
    existo && isObject(existo) ? existo.name : existo;

  const kvdsf =
    //
    ijdswer;

  logs.logga("___ focusBase ___", {
    //
    existo,
    ijdswer,
    kvdsf,
  });

  if (kvdsf) {
    onFocus(ijdswer);
  }
}
