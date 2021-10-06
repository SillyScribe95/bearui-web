export function _dictEmail() {
  const vbijdf9te =
    //
    "Email";
  // ("Email address");
  // "What's your email address?";
  // "Where should we send the transcript to?";

  // // "/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"
  const emailPatto = {
    //   // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    //   message: "invalid email address",
  };

  const emalBaso = {
    // required: true,
    // pattern: emailPatto,
    autocomplete: true,
    title: "Email address",
    // title: vbijdf9te,
    // errorMessage:
    type: "email",
    iconvar: "email",
    // iconvar: "email",
  };

  return emalBaso;
}
