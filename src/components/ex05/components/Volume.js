import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const SVolume = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .progress {
    width: 80%;
    height: 7px;
    background-color: #f1f1f1;
    border-radius: 10px;
    .bar {
      width: 70%;
      height: 100%;
      background-color: lightgray;
    }
  }
`;

export const Volume = () => {
  return (
    <SVolume>
      <FontAwesomeIcon icon={faVolumeOff} />
      <div className="progress">
        <div className="bar"></div>
      </div>
      <FontAwesomeIcon icon={faVolumeHigh} />
    </SVolume>
  );
};

export default Volume;
