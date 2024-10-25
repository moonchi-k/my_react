const ContentsEx = ({ day, text, main, sub }) => {
  return (
    <div className="wrap">
      <div className="con">
        {day}일차 <br></br>
        {text} 메뉴 <br></br>
        <span>
          메인 : {main} <br></br>
        </span>
        서브 : {sub}
      </div>
      <div className="con" style={{ backgroundColor: "royalblue" }}>
        {day}일차 <br></br>
        {text} 메뉴 <br></br>
        <span>
          메인 : {main} <br></br>
        </span>
        서브 : {sub}
      </div>
      <div className="con" style={{ backgroundColor: "yellow" }}>
        {day}일차 <br></br>
        {text} 메뉴 <br></br>
        <span>
          메인 : {main} <br></br>
        </span>
        서브 : {sub}
      </div>
    </div>
  );
};

export default ContentsEx;
