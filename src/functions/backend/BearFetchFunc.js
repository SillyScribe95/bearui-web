// import { useQuery } from "react-query";
import { logs } from "../../index";
let axios = require("axios");

export function BearFetchFunc(
  askdw,
  { funcvar, name = "BearFetchFunc", ...ase }
) {
  //
  let funcveo = funcvar;

  logs.logga("___BearFetchFunc ARGS ___", ase);

  async function saijdwe() {
    const okdssae = {
      // params: params,
      ...ase,
    };

    return await axios.get(askdw, okdssae);
  }

  funcveo = funcveo ? funcveo : saijdwe;

  const { data, isLoading, ...dsokfe } = 
  // 
  ""
  // useQuery(name, funcveo);

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
