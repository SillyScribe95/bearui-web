import { bearlog } from "@sillyscribe95/bear-ui-web";

export function BearFormSubmit(args) {
  //
  let {
    preSubmit,
    onSubmit,
    confirmModal,
    onCancel,
    onFailure,
    onSuccess,
    event,
  } = args;

  bearlog.lug("___ event ___", event);
  if (event) {
    event.preventDefault();
  }
  cxvbmf();

  async function cxvbmf(...asd) {
    bearlog.lug("preSubmit-zzz", { preSubmit, asd });
    if (preSubmit) {
      const asokwe = await preSubmit(...asd);
      if (asokwe) {
        confirmOs(...asd);
      }
    } else {
      confirmOs(...asd);
    }
  }

  function confirmOs(values, funta) {
    bearlog.lug("___ values ___", values);

    if (confirmModal) {
      switch (typeof confirmModal) {
        case "string":
          confirmModal = confirmModal;
          break;
        case "object":
          confirmModal = confirmModal(values);
          break;
        default:
          confirmModal = "Are you sure?";
      }

      if (window.confirm(confirmModal)) {
        sdaseas(values, funta);
      } else if (onCancel) {
        onCancel(values);
      }
    } else {
      sdaseas(values, funta);
    }
  }

  function sdaseas(values) {
    onSubmit(values);
  }

  function basos(values, funta) {
    //
    // setloadSetto(true);
    // const emptiosa = !isEmpty(values);
    // const trudsoe = onSubmit && emptiosa;
    // bearlog.lug("___ FORMAMAIN SUBMIT ___", {
    //   loadSubmit,
    //   loadSetto,
    //   values,
    //   emptiosa,
    //   trudsoe,
    // });
    // bearlog.lug("___ Fomain values ___", values);
    // if (trudsoe) {
    //   let dsifer = singleTrue ? goSing(values) : mainFI(values);
    //   dsifer = extPrep(dsifer);
    //   funta(dsifer);
    // }
  }
}
