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

import React, { useState } from 'react';
import Tab from "./Tab"

interface ButtonText {
  btn: { text: string }[];
}

const data = {
  tabs: [{ text: "tab1" }, { text: "tab2" }, { text: "tab3" }]
}
const newData = {
  tabs: [{ text: "item1" }, { text: "item2" }, { text: "item3" }]
}
const name = {
  btn: [{text: "tab1 - item1"}, {text: "tab2 - item2"}, {text: "tab3 - item3"}]
}


const App = () => {
  const [tabs, setTabs] = useState(data);
  const [newTabs, setNewTabs] = useState(newData);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [btnText, setBtnText] = useState<ButtonText>(name)

  return (
    <>
      <Tab
        data={data.tabs}
        selectedIndex={selectedIndex}
        onClickItem={(item, index) => {
          setSelectedIndex(index)
        }}
      />
      <button
        onClick={() => {
          const newTabs = { ...tabs };
          const newBtnText = { ...btnText };
          for (let i = 0; i < tabs.tabs.length; i++) { 
            if (tabs.tabs[i].text === btnText.btn[selectedIndex].text) {
              newTabs.tabs[i] = newData.tabs[i];
            }
          }
          setTabs(newTabs);
        }}
      >
        {btnText.btn[selectedIndex].text}
      </button>
    </>
  )
}

export default App;