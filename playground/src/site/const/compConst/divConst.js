import {
  //
  BearDiv,
} from "bearui-web";

const aaaa = "";

//
const codeiosDiv = `
        <BearDiv 
            obj="Hi! I'm a Div." 
            style={{
                fontSize: 24,
                color: "red",
            }}
        />`;

const codFuncos = `
        function Rendmain(){
            
        }
    `;

const codlist = [
  //
  { codeAbove: codFuncos, code: codeiosDiv },
  { codeAbove: codFuncos, code: codeiosDiv },
  { codeAbove: codFuncos, code: codeiosDiv },
  { codeAbove: codFuncos, code: codeiosDiv },
];

const isjdr =
  //
  "A div for all seasons.";

const divtg = [
  //
  "",
];

// 1divContainer
const cokvrwe =
  //
  "encloses the object in a function which can change along with the other sides of things around here aijd .s kdeo kasdwe okswo";

const nisdfr = {
  name: "divContainer",
  description: cokvrwe,
  type: "function",
};

// 1link
const sfdetr = {
  name: "link",
  description: "",
  type: "string",
};

// 1outsideLink
const ewirjwe = {
  name: "outsideLink",
  description: "",
  type: "string",
};

// 1span
const vsbfdgre = {
  name: "span",
  description: "",
  type: "string",
};

// 1flex
const dsfokwer = {
  name: "flex",
  description: "",
  type: "string",
};

// 1new
const sdfok = {
  name: "outsideLink",
  description: "",
  type: "string",
};

// 1args
const dcvide = {
  link: sfdetr,
  outsideLink: ewirjwe,
  span: vsbfdgre,
  flex: dsfokwer,
  divContainer: nisdfr,
};

const jdfgww = [
  //
  "link",
  "outsideLink",
  "span",
  "flex",
  "divContainer",
];

export const divios = {
  title: "Div",
  dependencies: { BearDiv },
  subtitle: isjdr,
  codeList: codlist,
  argConfig: {
    dictvar: dcvide,
    list: jdfgww,
  },
  tags: divtg,
};