//탭프롭스의 타입을 지정해준다.
// interface TabProps{
//   selectedIndex: number;
//   //{text: string}형태의 객체를 요소로 갖는 배열
//   data: { text: string }[];
//   //? 해당 프로퍼티가 선택적임을 나타냄
//   //void 반환값없음을 의미
//   onClickItem?: (item: string, index: number) => void
// }


// const Tab = ({ data, onClickItem, selectedIndex }: TabProps) => {
//   return (
//     <ul style={{display: "flex", listStyle: "none", padding: 12 }}>
//       {data.map(({ text }, index) => (
//         <li
//           key={index}
//           onClick={() => {
// // ?. 옵셔널 체이닝 연산자.: 해당 속성이나 메서드가 존재하는 경우에만 접근하고 호출. 존재하지않는다면 undefined
//             // onClickItem이 존재하는 경우에만 호출되고, 그렇지 않은 경우 동작x.
//             //오류 발생시키지 않기 위해 넣는건가.
//             onClickItem?.(text, index);
//           }}
//           style={{
//             padding: 12,
//             borderBottom:
//                 selectedIndex === index ? "1px solid" : undefined,
//           }}
//         >
//           {text}
//         </li>
//       ))}
//     </ul>
//   );
//  };


// export default Tab;
interface TapProps {
  data: { text: string }[];
  selectedIndex: number;
  onClickItem?: (item: string, index: number) => void;
}


const Tab = ({ data, selectedIndex, onClickItem }: TapProps) => {
  return(
    <ul style={{ display: "flex", listStyle: "none", padding: 12 }}>
      {data.map(({text}, index)=> (
        <li
          key={index}
          onClick={() => {
            onClickItem?.(text, index);
          }}
          style={{
            padding: 12,
            borderBottom:
                selectedIndex === index ? "1px solid" : undefined,
        }}
        >
          
          {text}
        </li>
      ))}
    </ul>
  )
};

export default Tab;