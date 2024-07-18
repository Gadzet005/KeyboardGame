import { RatingItem } from "./RatingItem";
import { useSelector } from "react-redux";

export const BaseRating = ({ getList, IconComp }) => {
  const user = useSelector((state) => state.user);

  const list = getList().map((elem) => {
    return {
      ...elem,
      name: elem.name.slice(0, 15) + (elem.name.length > 15 ? "..." : ""),
    };
  });

  let place = null;
  const items = [];
  for (let i = 0; i < list.length; i++) {
    const { id, name, score } = list[i];
    items.push(
      <RatingItem
        key={id}
        name={name}
        score={score}
        place={i + 1}
        IconComp={IconComp}
        isActive={user.isAuth && user.id === id}
      />
    );

    if (user.isAuth && user.id === id) {
      place = i + 1;
    }
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center fs-1">
        {place ? <p>Ваше место: {place}</p> : null}
      </div>
      <ul className="list-group">{items}</ul>
    </div>
  );
};
