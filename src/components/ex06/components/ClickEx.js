import { renderHook } from "@testing-library/react";
import { useState } from "react";

// => 리액트 상태관리 renderHook
// => 배열 비구조화 할당을 통해서 사용하며 반드시 import해서 사용
// => const [변수명, set변수명] => useState(초기값);

const ClickEx = () => {
  const [num, setNum] = useState(0);

  const onPlus = () => {
    setNum(num + 1);
    // => useState 에 정의된 변수값을 변경할 때 사용
    // => set변수명(변경할 값);
  };

  const onMinus = () => {
    setNum(num - 1);
    if (num - 1 < 0) {
      setNum(num);
    }
  };

  return (
    <div>
      <h3> 클릭할 때 숫자 증가</h3>
      <p>{num}</p>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
};

export default ClickEx;
