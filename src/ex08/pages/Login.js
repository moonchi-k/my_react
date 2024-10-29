import styled from "styled-components";
import { useForm } from "react-hook-form";

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
const Login = () => {
  const {
    register,
    //     원래 인풋은 텍스트, 플레이스홀더, 리콰이어, 네임도 들어감 (속성)
    // 그래서 원래라면 모든 속성 다 핸들링 처리를 해줘야함ㅣ
    // 그걸 쉽게 관리해주는 게 레지스터

    handleSubmit,
    //  최종 결과 보내는 애
    formState: { errors, isValid },
    // 에러를 관리하는 애
    // isValid는 불리언
  } = useForm();

  const loginSubmit = (data) => {
    console.log(data);
    // 핸들섭밋의 메서드 함수
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(loginSubmit)}>
        {/* 메서드 형식이라 함수를 하나 만들어줘야함 */}
        <h2>로그인</h2>
        <input
          {...register("username", {
            required: "아이디는필수입니다.",
            // Required=message
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
              message: "비밀번호는 영어 대소문자와 특수기호를 포함해야합니다.",
            },
          })}
          type="password"
          placeholder="패스워드"
        ></input>

        {/* *옵셔널 체이닝 (?.) 객체 속성의 유무에 따라 undefinded로 반환이 아닌
        값이 있으면 값을 반환하고 없으면 빈값으로 반환함 */}
        <p>{errors?.password?.message}</p>
        {/* 물음표 : 에러가 있을 때만 실행.  */}
        <Button
          $isActive={isValid ? "1" : "0.5"}
          $isTrue={isValid ? "pointer" : "default"}
        >
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

// *useForm=();

// const {register, handleSubmit, formState:{errors, isValid}} = useForm();
// => register: input 태그 관리 해줌
// => handleSubmit: form 이벤트 관리
// => formState: 폼 상태 관리,
// errors: 에러 관리
// isValid: 유효성 판단 후 boolean값으로 반환함
// => handleSubmit 내부 커스텀 함수 첫번재 매개변수는 input의 value 값을
// 객채로 지정하여 반환함
