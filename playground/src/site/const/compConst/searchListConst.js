import { BearSearchList } from "bearui-web";

// 1search
const ksae =
  //
  "Easy without a";

//   1easy
const zxcaasd = `<BearSearchList
            bearName="fruitSearch"
            list={["apples", "bananas", "sad", "angry"]}
            renderItem={(fruit) => "I like " + fruit}
        />`;

// 1medium
const medcodos = `<BearSearchList
                  bearName="fruitSearch"
                  list={["apples", "bananas", "sad", "angry"]}
                  renderItem={(fruit) => "I like " + fruit}
              />`;

// 1hard
const hrdcodos = `<BearSearchList
                  bearName="fruitSearch"
                  list={["apples", "bananas", "sad", "angry"]}
                  renderItem={(fruit) => "I like " + fruit}
              />`;

// 1expert
const expcodasd = `<BearSearchList
                        bearName="fruitSearch"
                        list={["apples", "bananas", "sad", "angry"]}
                        renderItem={(fruit) => "I like " + fruit}
                    />`;
const sdietw = [
  //
  "algolia",
  "",
  "",
];

export const searchios = {
  title: "SearchList",
  subtitle: ksae,
  dependencies: { BearSearchList },
  //
  codeList: [
    //
    { code: zxcaasd },
  ],
  // codeList: {
  //   //
  //   basic: { code: zxcaasd },
  //   medium: { code: medcodos },
  //   hard: { code: hrdcodos },
  //   expert: { code: expcodasd },
  // },
  tags: sdietw,
};
