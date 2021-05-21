import { logs, turnarray } from "@SillyScribe95/bedia-shared/";
import { useQuery } from "react-query";
import FetchLink from "./backend/FetchLink";
import UseFirestoreQuery from "./backend/UseFirestoreQuery";

export function fetchParams(sdforw, sdokereq) {
  return FetchLink(sdforw, { params: sdokereq });
}

export function dataFunc(funcv) {
  return funcv();
}

export function QueryMain(funcv, nameo = "querybsae") {
  function fdsrase() {
    return funcv();
  }

  const {
    //
    data,
    isLoading,
    ...asodke
  } = useQuery(nameo, fdsrase);

  function sdfser({ data, ...asd }) {
    return {
      ...asd,
      ...data,
    };
  }

  const oksae = data && turnarray(data).map(sdfser);

  const okwwew = {
    data: oksae,
    loading: isLoading,
    ...asodke,
  };

  //   return okwwew;
  return UseFirestoreQuery(funcv);
}

// export function createModelApp(typeos, listvar, {!noaksew){
// if (!noNote) {
//     createModelNote(asdjew);
//   }
// }

export function getDocData(doc) {
  return doc.exists === true ? { id: doc.id, ...doc.data() } : "NO OBJECT";
}

export function fireDocs(response) {
  return response.docs ? response.docs.map(getDocData) : getDocData(response);
}

export async function queryData(funcv) {
  // const oksae = funcv();
  let osadwe = await funcv;
  osadwe = fireDocs(osadwe);
  // funcv.then();

  return osadwe;
  // return osadwe;
  // return ikaewsd;
}

// const okaeas =
// funcv &&
// funcv.onSnapshot((response) => {
//   // Get data for collection or doc

//   let asokwe = fireDocs(response);

//   logs.logga("___ queryData ___", {
//     response: response,
//     FILTERED: asokwe,
//   });

//   osadwe = asokwe;

//   // return asokwe;
// });
