import {
  //
  BearList,
} from "bearui-web";

const aaaa = "";

//
const codeiosDiv = `<BearList
  bearName="fruit"
  list={["apples", "bananas", "oranges"]}
  renderItem={(fruit) => 'I love ' + fruit}
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
  "encloses the obj sfsdect in a function which can change ";

const nisdfr = {
  name: "typeList",
  description: cokvrwe,
  type: "string",
  // tags: ["another", "value"],
};

// 1list
const sfdetr = {
  required: true,
  name: "list",
  description: "",
  type: "array",
};

// 1dictvar
const ewirjwe = {
  name: "itemDict",
  description: "",
  type: "object",
};

// 1renderitem
const vsbfdgre = {
  name: "renderItem",
  description: "",
  type: "ReactNode",
  tags: ["return", ""],
};

// 1flex
const dsfokwer = {
  name: "flex",
  description: "",
  type: "boolean",
};

// 1horiz
const sdfok = {
  name: "horiz",
  description: "ProivAll items are spaced equally by default.",
  type: "boolean",
};

// 1listnumber
const cvobf = {
  name: "listNumber",
  description: "Restricts the amount of list items shown in number.",
  type: "number",
};

// 1nolistitem
const empyItdcto = {
  name: "emptyItem",
  description: "",
  type: "string",
  tags: ["", ""],
};

// addTrue

// 1clickSingle
const clksingdcto = {
  name: "clickSingle",
  description: "Chane",
  type: "string",
  tags: ["", ""],
};

// 1new
const newdcto = {
  name: "outsideLink",
  description: "",
  type: "string",
  tags: ["", ""],
};

export const baseArgDict = {
  list: sfdetr,
  dictvar: ewirjwe,
  horiz: sdfok,
  listNumber: cvobf,
};

// 1args
const xcvnd = {
  ...baseArgDict,
  flex: dsfokwer,
  renderItem: vsbfdgre,
  typeList: nisdfr,
  //
  // useDictList:
  // keepNull
  // removeItem
  //   itemStyle:
  // itemConfig
  //   capitaliseTypeText:
  emptyItem: empyItdcto,
  clickSingle: clksingdcto,
  //   returnArray
  // //
  // chooseTrue,
  //     chosenItem,
  //     chosenConfig

  //   emptyItem
};

export const baseArgList = [
  //
  "list",
  "dictvar",
  "renderItem",
  "typeList",
  "horiz",
  "flex",
  "listNumber",
];

const jdfgww = [
  //
  ...baseArgList,
];

export const listios = {
  title: "List",
  dependencies: { BearList },
  subtitle: isjdr,
  codeList: codlist,
  argConfig: {
    dictvar: xcvnd,
    list: jdfgww,
  },
  tags: divtg,
};
