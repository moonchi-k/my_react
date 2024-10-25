import Contents from "./components/Contents";
import ContentsEx from "./components/ContentsEx";
// import "./style.css";

const PropsEx = () => {
  return (
    <>
      <Contents text="컨텐츠1" bgColor="salmon" />
      <Contents text="컨텐츠2" bgColor="lightblue" />
      <ContentsEx
        day="1"
        text="아침"
        main="당근라페샌드위치"
        sub="요거트"
      ></ContentsEx>
      <ContentsEx day="2" text="점심" main="시락국" sub="낙지젓"></ContentsEx>
      <ContentsEx day="3" text="저녁" main="햄버거" sub="감자튀김"></ContentsEx>
    </>
  );
};

export default PropsEx;
