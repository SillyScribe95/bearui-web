import { bearlog } from "..";

export function focusBase({
  //
  list,
  dictvar,
  focusInput,
  onFocus,
}) {
  const kvdsf =
    //
    focusInput;

  bearlog.lug("___ focusBase ___", {
    //
    kvdsf,
  });

  if (kvdsf) {
    onFocus(kvdsf);
  }
}

// 1submit
// export function formSubmit(){
// //
// }
