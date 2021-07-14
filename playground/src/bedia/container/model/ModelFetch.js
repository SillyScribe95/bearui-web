import React, {
  //
  useState,
  useContext,
} from "react";
import { logs } from "bearui-web";

// import { MainContext } from "../contexts/MainContext";
// import { AuthContext } from "../contexts/AuthContext";
import { fetchParams } from "../../functions/backend/backendFuncs";
import ModelList from "./ModelList";
import BearDiv from "../../components/BearDiv";

export default function ModelFetch({
  //
  genConfig,
  fetchArgs,
  ...args
}) {
  //   const { aaaaaa } = useContext(MainContext);
  //   const { bbbb } = useContext(AuthContext);

  const { data: sdrwsdfe, loading: asode, ...kmads } =
    //
    fetchParams("http://localhost:4000/fetch", fetchArgs);

  // 1const
  const [type, setType] = useState("");

  function Ajweq() {
    const ksdfre = {
      list: sdrwsdfe,
      loadTrue: asode,
      typevar: "media",
      ...args,
    };

    logs.logga("___ ksdfre ___", ksdfre);

    const ijadoke = <ModelList {...ksdfre} />;

    return ijadoke;
  }

  function Titanno() {
    //
    const isjdfre = {
      //   obj:
    };

    return <BearDiv {...isjdfre} />;
  }

  const okfdsd = (
    <>
      {/*  */}
      <Titanno />
      <Ajweq />
    </>
  );

  const okdawe = {
    obj: okfdsd,
    ...genConfig,
  };

  //
  return <BearDiv {...okdawe} />;
}
