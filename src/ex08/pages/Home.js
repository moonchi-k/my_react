import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 20px;
  margin: 0 auto;
  h2 {
    font-size: 50px;
  }

  .button {
    display: flex;
  }

  button {
    all: unset;
    width: 43px;
    font-size: 12px;
    text-align: center;
    /* height: 18px; */
    background-color: bisque;
    border-radius: 5px;
    margin-right: 5px;
    padding: 5px 10px;
  }
`;

const Home = () => {
  return (
    <Wrap>
      <h2>HOME</h2>
      <div className="button">
        <Link to="/login">
          <button>로그인</button>
        </Link>
        <Link to="/signup">
          <button>회원가입</button>
        </Link>
      </div>
    </Wrap>
  );
};

export default Home;
