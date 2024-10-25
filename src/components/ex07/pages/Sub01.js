import { useParams } from "react-router-dom";

const subPageData = [
  {
    id: 0,
    title: "SUB 01",
    desc: "첫번째 서브페이지",
  },

  {
    id: 1,
    title: "SUB 02",
    desc: "두번째 서브페이지",
  },
];

const Sub01 = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>{subPageData[id].title}</h2>
      <p>{subPageData[id].desc}</p>
    </div>
  );
};
export default Sub01;
