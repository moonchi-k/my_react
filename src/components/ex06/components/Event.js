import { useState } from "react";
import styled from "styled-components";

const Event = () => {
  const Box = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.$color};
  `;

  const [bgColor, setBgColor] = useState("cornflowerblue");
  //   bgColor의 초기값은 useState에 저장되는 컬러.
  const [on, setOn] = useState(true);
  const onClickBox = () => {
    // if (bgColor === "pink") {
    //   setBgColor("hotpink");
    // } else if (bgColor === "hotpink") {
    //   setBgColor("cornflowerblue");
    // }

    if (on) {
      setOn(false);
      setBgColor("pink");
    } else if (!on) {
      setOn(true);
      setBgColor("hotpink");
    }
    console.log(on);
  };

  return (
    <>
      <Box $color={bgColor} onClick={onClickBox}></Box>
    </>
  );
};

export default Event;
