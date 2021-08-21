import React, {
  //
  useState,
  useContext,
} from "react";
import KeyValue from "react-key-value";

import {
  //
  bearlog,
} from "../../index";
import { BearList } from "../list/BearList";
// import { BearButton } from "../button/";
import { BearDiv } from "../BearDiv";
import { BearTextMedia } from "../BearTextMedia";
import { BearSelect } from "../select/BearSelect";
import { BearForm } from "../form/BearForm";

export function BearKeyValue({
  //
  initialData = {},
  onChange,
  keyConfig,
  onKeyCreate,
  ...args
}) {
  // 1const
  const kvmsf =
    //
    initialData;

  const [mainDate, setmainDate] = useState(kvmsf);

  const nkivds = [
    //
    { name: "key" },
  ];
  const [keyList, setkeyList] = useState(nkivds);

  //   rows: [
  //     {
  //       keyItem: "",
  //       valueItem: "",
  //     },
  //   ],

  function xccxv(cxv) {
    //
  }

  //   mainDate
  function cxvxc(zcxvd) {
    setmainDate(zcxvd);
    if (onChange) {
      onChange(zcxvd);
    }
  }

  const [stateKey, setstateTitle] = useState("value");

  //   1form
  function Msadas() {
    const xcisdf = {
      horizList: [
        {
          name: "key",
        },
        {
          name: "value",
        },
      ],
    };

    function vksdfA({ key, value }) {
      bearlog.lug("___ key, value ___", key, value);
    }

    const nissdfer = {
      dictvar: {
        input: xcisdf,
      },
      list: ["input"],
      // button
      formid: "WQdsa",
      onSubmit: vksdfA,
      bearName: "3QSAd",
    };

    return <BearDiv flex>{BearForm(nissdfer)}</BearDiv>;
  }

  //   1selecgt
  function Aovksd({ key, value }) {
    // setkeyList;

    // 1key
    function ijsdfsd(asdf) {
      //   const
      bearlog.lug("___ KEY___", asdf);

      //   cxvxc()
    }

    // 1create VALUE
    function kxzfa(zxcvf) {
      //

      bearlog.lug("___CREATE VALUE ___", zxcvf);

      //
      cxvxc();
    }
    //

    // 1create KEY
    function kcxz(xcvldsf) {
      bearlog.lug("___ CREATE KEY ___", xcvldsf);

      if (onKeyCreate) {
        // onKeyCreate()
      }
    }

    // 1key
    const ikxvfdf = {
      onBlurValue: ijsdfsd,
      onCreate: kcxz,
    };

    // 1value
    const kvfdfsd = {
      menuIsOpen: false,
      onBlurValue: kxzfa,
    };

    const ckbmdfs = [
      //
      ikxvfdf,
      kvfdfsd,
    ];

    // const iojxvsf = [
    //     //
    //     BearSelect(kvasde),
    //     BearSelect(kvasde),
    //   ],

    const kvasde = {
      //   onCreate: onNewKeyCreate,
      ...keyConfig,
    };

    const kvmxcf = {
      //
      hideSearchIcon: true,
      //   noSearchBarIcon: false,
      placeholder: "",
      create: true,
    };

    const vxvdv = {
      list: ckbmdfs,
      horiz: true,
      bearName: "aoskdas",
      listType: "return",
      itemConfig: kvmxcf,
      renderItem: BearSelect,
      //   ...zxcvif,
    };

    return BearList(vxvdv);
  }

  const nivdf = keyList.map(
    //
    // Msadas
    Aovksd
  );

  const ixvbfds = ButNew();
  //   1new
  function ButNew() {
    const ixjbfd = {
      //
      iconvar: "plus",
      textvar: "New",
      onClick: cvbxckv,
      //   itemType: "button",
    };

    function cvbxckv() {
      const kxfv = [
        //
        ...keyList,
        { name: "key" },
      ];

      setkeyList(kxfv);
    }

    return <BearTextMedia {...ixjbfd} />;
  }

  const okfdsd = (
    <>
      {/*  */}
      {nivdf}
      {ixvbfds}
      {/* <KeyValue {...kivsd} /> */}
    </>
  );

  //   args = {
  //     obj: okfdsd,
  //     ...args,
  //   };

  return okfdsd;
}
