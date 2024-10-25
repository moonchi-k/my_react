const Contents = ({ text, bgColor }) => {
    // const text = props.text;
    // const color = props.bgColor;
    // const { text, bgColor } = props;
    return (
    <div className = "box" style = {{backgroundColor: bgColor}}>{text}</div>
    );
};

export default Contents;

// 객체 비구조화 할당 