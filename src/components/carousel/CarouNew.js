// import React from "react";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

// const getItems = () =>

//   return (
//         <ScrollMenu
//           LeftArrow={LeftArrow}
//           RightArrow={RightArrow}
//         >
//           {items.map(({ id }) => (
//             <Card
//               itemId={id} // NOTE: itemId is required for track items
//               title={id}
//               key={id}
//               onClick={handleClick(id)}
//               selected={isItemSelected(id)}
//             />)
//           )}

//         </ScrollMenu>
//   );
// }

// function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

//   return (
//     <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//       Left
//     </Arrow>
//   );
// }

// function RightArrow() {
//   const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

//   return (
//     <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
//       Right
//     </Arrow>
//   );
// }

// function Card({
//   onClick,
//   selected,
//   title,
//   itemId
// }) {
//   const visibility = React.useContext(VisibilityContext)

//   return (
//     <div
//       onClick={() => onClick(visibility)}
//       style={{
//         width: "160px",
//       }}
//       tabIndex={0}
//     >
//       <div className="card">
//         <div>{title}</div>
//         <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
//         <div>selected: {JSON.stringify(!!selected)}</div>
//       </div>
//       <div
//         style={{
//           height: "200px",
//         }}
//       />
//     </div>
//   );
// }

// export default App;
