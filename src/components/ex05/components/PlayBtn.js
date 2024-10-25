import {
  faBackward,
  faForward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const SPlayBtn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0 30px 0;
  font-size: 50px;
  .icons:nth-child(1),
  .icons:nth-child(3) {
    font-size: 35px;
  }
`;

export const PlayBtn = () => {
  return (
    <SPlayBtn>
      <div className="icons">
        <FontAwesomeIcon icon={faBackward} />
      </div>

      <div className="icons">
        <FontAwesomeIcon icon={faPause} />
      </div>

      <div className="icons">
        <FontAwesomeIcon icon={faForward} />
      </div>
    </SPlayBtn>
  );
};

export default PlayBtn;
