// import React, { useState } from 'react';
// import Tab from './Tab';

// const data = {
//   tabs: [{text: "tab1"}, {text: "tab2"}, {text: "tab3"}]
// };

// const App = () => {
//   //변수선언(?)
//     const [selectedIndex, setSelectedIndex] = useState(0)
//     const [tabs, setTabs] = useState(data);

//   return (
//     <>
//       <Tab
//         selectedIndex={selectedIndex}
//         data={tabs.tabs}
//         //탭을 클릭했을 때 호출되는 콜백함수.
//         //인덱스를 업데이트
//         onClickItem={(item, index) => {
//           setSelectedIndex(index);
//         }}
//       />
//       <button
//         onClick={() => {
//           //깊은복사와 얕은복사.
//           //원본은 건들지 않는게 좋아서 깊은복사로 새로운 메모리를 생성하는게 좋다.(?)
//           const newTabs = { ...tabs };
//           if (tabs.tabs[0].text === "tab1") {
//             newTabs.tabs[0].text = "item1";
//           } else {
//             newTabs.tabs[0].text = "tab1";
//           }
          
//           setTabs(newTabs);
//         }}
//       >
//         tab ↔ item
//       </button>
//     </>
//   );
// };

// export default App;

import { useState } from "react";
import Tab from './Tab';

const data = {
  tabs: [{ text: "tab1" }, { text: "tab2" }, { text: "tab3" }],
};

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabs, setTabs] = useState(data);

  return(
  <>
      <Tab
        data={tabs.tabs}
        selectedIndex={selectedIndex}
        onClickItem={(item, index) => {
          setSelectedIndex(index)
        }}
      />
      <button
        onClick={() => {
          const newTabs = { ...tabs };
          newTabs.tabs[0].text = "item1";
          setTabs(newTabs);
        }}
      >
        tab1 - item1
      </button >
    
    </>
  )
}

export default App;