import { Fragment } from "react";

const arr = [1, 2, 3, 4, 5];

// arr.map((num) => {
//   console.log(num);
// });

export const MapEx = () => {
  return (
    <div>
      {/* {arr.map((num) => (
        // 리턴안에서 태그안에서 함수쓰려면 중괄호해줘야함
        <Fragment key={num}>{num}</Fragment>
      ))} */}
    </div>
  );
};
