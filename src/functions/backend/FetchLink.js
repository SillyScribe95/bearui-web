import { useQuery } from "react-query";
import { logs } from "@SillyScribe95/bedia-shared/";
let axios = require("axios");

export default function FetchLink(
  askdw,
  { funcvar, name = "fetchLink", ...ase }
) {
  //

  let funcveo = funcvar;

  logs.logga("___FetchLink ARGS ___", ase);

  async function saijdwe() {
    const okdssae = {
      // params: params,
      ...ase,
    };

    return await axios.get(askdw, okdssae);
  }

  funcveo = funcveo ? funcveo : saijdwe;

  const { data, isLoading, ...dsokfe } = useQuery(name, funcveo);

  let sdifew =
    //
    data && data.data;

  const sodfkew = {
    data: sdifew,
    dataList: sdifew && sdifew.results,
    dataBase: data,
    loading: isLoading,
    ...dsokfe,
    ...sdifew,
  };

  logs.logga("___ queryFuncs ___", sodfkew);

  return sodfkew;
}
