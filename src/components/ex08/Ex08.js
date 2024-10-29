import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

const Ex08 = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          {/* 여기서 만든 경로를 link to 에서 적어줘야함. 라우트 패스를 페이지로 연결해놨기 
          때문에 link에서는 컴포넌트 이름을 적는게 아님. */}
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </HashRouter>
      {/* <SignUp></SignUp> */}
    </>
  );
};

export default Ex08;
