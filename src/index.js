// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "antd/dist/antd.css";
import "./index.css";
// 1css

// 1bear 1emoji
// 🐻

// 1logs
// import * as logs from "./functions/logFuncs";
import { bearlog } from "./functions/logFuncs";
// import  const bearlog = { ...logs };
export { bearlog };

// 1shared
// export * from "./index";
export * from "./functions/arrayFuncs";
export * from "./functions/dictFuncs";
export * from "./functions/selectFuncs";
export * from "./functions/stringFuncs";

export * from "./importBase";
export * from "./importExtra";
