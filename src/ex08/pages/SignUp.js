import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  max-width: 450px;
  width: 100%;
  padding: 80px 20px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;

  h2 {
    font-size: 50px;
    text-align: center;
    font-weight: 600;
    letter-spacing: -2px;
    margin-bottom: 10px;
  }

  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-top: 10px;
    padding: 5px;
    box-sizing: border-box;
    /* &::placeholder {
        color: aliceblue;
    } */
  }

  p {
    font-size: 14px;
    color: crimson;
    margin-top: 3px;
  }
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 50px;
  background-color: #ecd596;
  text-align: center;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 18px;
  color: white;
  font-weight: 500;
  cursor: ${(props) => props.$isTrue};
  opacity: ${(props) => props.$isActive};
`;
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const nav = useNavigate();
  //   페이지 이동할 때 사용함

  const signupSubmit = (data) => {
    alert(`${data.name}님 회원가입 되었습니다. 로그인 해주세요.`);
    // 밑에 적히는 값들이 모두 data로 반환되는 것임.
    nav("/login");
  };
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(signupSubmit)}>
          <h2>회원가입</h2>

          <input
            {...register("name", {
              required: "이름 필수입니다.",
            })}
            type="text"
            placeholder="이름"
          />
          <p>{errors?.name?.message}</p>

          <input
            {...register("username", {
              required: "아이디는 필수입니다.",
              minLength: {
                value: 4,
                message: "아이디는 4자리 이상이여야 합니다.",
              },
            })}
            type="text"
            placeholder="아이디"
          />
          <p>{errors?.username?.message}</p>

          <input
            {...register("password", {
              required: "비밀번호는 필수입니다.",
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
                message:
                  "비밀번호는 영어 대소문자와 특수기호를 포함해야합니다.",
              },
            })}
            type="text"
            placeholder="비밀번호"
          />
          <p>{errors?.password?.message}</p>

          <input
            {...register("useremail", {})}
            type="text"
            placeholder="이메일"
          />
          <Button
            $isActive={isValid ? "1" : "0.5"}
            $isTrue={isValid ? "pointer" : "default"}
          >
            회원가입
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
