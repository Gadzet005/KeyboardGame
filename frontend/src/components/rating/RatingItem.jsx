import first from "./imgs/first.png";
import second from "./imgs/second.png";
import third from "./imgs/third.png";
import other from "./imgs/other.png";
import { Coins } from "../common/Coins";

export const RatingItem = ({ name, score, place }) => {
  let placeComp;
  if (place === 1) {
    placeComp = <img width="64px" height="64px" src={first} alt="1" />;
  } else if (place === 2) {
    placeComp = <img width="64px" height="64px" src={second} alt="2" />;
  } else if (place === 3) {
    placeComp = <img width="64px" height="64px" src={third} alt="3" />;
  } else {
    placeComp = <img width="64px" height="64px" src={other} alt="other" />;
  }

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        {placeComp}
        <p className="my-0 fs-1 text-secondary me-2 ms-5">{place}.</p>
        <p className="my-0 me-auto fs-1 text-secondary">{name}</p>
        <Coins quantity={score} />
      </div>
    </li>
  );
};
