import {
  faBackward,
  faBatteryFull,
  faEllipsis,
  faForward,
  faPause,
  faVolumeHigh,
  faVolumeOff,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import TitleWrap from "./components/TitleWrap";
import PlayWrap from "./components/PlayWrap";
import PlayBtn from "./components/PlayBtn";
import Volume from "./components/Volume";

const Wrap = styled.div`
  max-width: 450px;
  /* overflow: hidden; */
  width: 100%;
  height: 100vh;
  /* margin: 0 auto; */
  padding: 20px;
  border: 5px solid #111;
  border-radius: 45px;
`;

const Header = styled.div`
  width: 100%;
  /* padding: 10px 0; */
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 900;
  .status {
    width: 70px;
    height: 20px;
    background-color: #111;
    border-radius: 20px;
    margin-left: 20px;
  }
  .fa-wifi {
    margin-right: 20px;
  }
`;

const CoverImg = styled.div`
  height: 450px;
  background: url(https://image.bugsm.co.kr/album/images/500/335/33567.jpg)
    no-repeat center / cover;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <Header>
        <div> 9:45 </div>
        <div className="status"></div>
        <div className="icon">
          <FontAwesomeIcon icon={faWifi} />
          <FontAwesomeIcon icon={faBatteryFull} />
        </div>
      </Header>

      <CoverImg></CoverImg>

      <TitleWrap></TitleWrap>

      {/* <PlayWrap></PlayWrap> */}
      <PlayWrap></PlayWrap>

      <PlayBtn></PlayBtn>

      <Volume></Volume>
    </Wrap>
  );
};

export default MusicApp;
