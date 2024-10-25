import styled, { keyframes } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$bgColor};
  /* 스타일 프롭스 문법 */
  border-radius: 50%;
`;

const InBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: tan;
`;

const BoxAni = keyframes`
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const Con = styled.div`
  width: 300px;
  height: 300px;
  background-color: lightpink;
  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: deeppink;
  }
  &:hover div {
    background-color: aliceblue;
  }
  animation: ${BoxAni} 2s infinite;
`;

const Ex04 = () => {
  return (
    <div>
      <Box $bgColor="salmon">
        {/* 스타일 프롭스는 앞에 달러써야함 */}
        <InBox></InBox>
      </Box>
      {/* 컴포넌트의 첫번째문자는 무조건 대문자 */}
      <Box $bgColor="hotpink"></Box>

      <Con>
        <div></div>
      </Con>
    </div>
  );
};

export default Ex04;
