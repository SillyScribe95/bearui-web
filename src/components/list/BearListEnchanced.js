export function BearListEnchanced({
  logtrue,
  bediaTrue,
  typevar,
  ...fdsgssda
}) {
  //
  //
  logtrue = "";

  //   const obo = bediaTrue ? BediaTextDiv : ImageTextDiv;

  // gens.messCheck({
  //   messvar: "sakmdqe",
  //   messvar: "ImageTextList---configVars-zz", configVars
  // })

  function vxbmfg({ bediaTrue, style, ...obj }) {
    // const xcvmbdf = "sdvoksdfs";

    bearlog.lug("___ vxbmfg ___", obj);

    const iawesad = bediaTrue && gens.bediaMainStyle;
    const xkfs = {
      textAlign: "center",
      // fontSize: "10px",
      // padding: "0 20px",
      ...iawesad,
      ...style,
    };

    const okdsw =
      //
      obj.obj ? obj.obj : obj.textvar ? obj.textvar : obj.title;

    const asdije = {
      style: xkfs,
      ...obj,
      obj: okdsw,
      // onClick: asdowqe,
    };

    // logtrue = "sdwq";
    if (logtrue) {
      bearlog.lug("___ ImageTexlist ITEM ___", asdije);
    }

    function asdowqe() {
      bearlog.lug("___ ImageTextList ___", "asdowqe");
    }

    let endValue = "";
    switch (typevar) {
      case "button":
        endValue = <BearButton {...asdije} />;
        break;
      case "div":
        endValue = <BearDiv {...asdije} />;
        break;

      default:
        endValue = (
          //
          <BearDiv {...asdije} />
          // <ImageTextDiv {...asdije} />
        );
      // <BearTextMedia {...asdije} />
    }

    return endValue;
  }

  function osdkfewr({ mainObj, ...vncgf }) {
    bearlog.lug("___ ImageTeList AAA ___", vncgf);

    // mainObj
    const ivcobkd = mainObj ? mainObj(vncgf) : vxbmfg(vncgf);

    return ivcobkd;
  }

  const asijdwe = {
    obj: osdkfewr,
    ...fdsgssda,
  };

  bearlog.lug("___ asijdwe ___", asijdwe);

  return (
    <BearList
      //
      objFuncTrue
      // objReturnTrue
      {...asijdwe}
    />
  );
}
