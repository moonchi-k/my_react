import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const STitleWrap = styled.div`
  margin: 30px 0 20px 0;
  height: 25px;
  /* width: 450px; */
  /* overflow: hidden; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 800;
  font-size: 24px;

  h3 {
    /* width: 800px; */
    /* height: 20px; */
    /* overflow: hidden; */
  }
`;

const More = styled.div`
  width: 30px;
  height: 30px;
  background-color: #f1f1f1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: crimson;
`;

export const TitleWrap = () => {
  return (
    <STitleWrap>
      <h3>챠우챠우-아무리 애를쓰고 막아보려해도</h3>
      <More>
        <FontAwesomeIcon icon={faEllipsis} />
      </More>
    </STitleWrap>
  );
};

export default TitleWrap;
