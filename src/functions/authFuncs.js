import { fireConnect } from "./firebaseFuncs";

export function BearUserConnect({ firebase, ...asaea }) {
  if (firebase) {
    // const userBase = await
    fireConnect(firebase, asaea);
    // ijsdr = {
    //   user: userBase,
    //   ...ijsdr,
    // };
  } else {
    //
  }
}
