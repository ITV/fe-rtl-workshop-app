import { useState } from "react";
import { useLikes } from "../contexts/Likes";

const SavedList = () => {
  const { likes, removeItems } = useLikes();
  const [checkedItems, setCheckedItems] = useState([]);

  const handleClick = (id, value) => {
    const tmpCheckItems = [...checkedItems];

    if (value) {
      tmpCheckItems.push(id);

      setCheckedItems(tmpCheckItems);
    } else {
      const filteredArray = checkedItems.filter((item) => item !== id);

      setCheckedItems(filteredArray);
    }
  };

  if (Object.keys(likes).length === 0) return null;

  const renderSavedAnimals = () =>
    Object.keys(likes).map((keyName) => {
      const item = likes[keyName];
      const { name, image_link } = item;

      return (
        <li className="saved-list-item" key={`saved-item-${keyName}`}>
          <img className="saved-item-image" alt={name} src={image_link} />
          <input
            type="checkbox"
            name={keyName}
            aria-label={`Select ${name} to be removed`}
            onChange={(e) => handleClick(e.target.name, e.target.checked)}
          ></input>
        </li>
      );
    });

  return (
    <div className="saved-item-container">
      <h1 id="liked-animals">
        Animals I Like <span aria-hidden>👍</span>
      </h1>
      <ul className="saved-item-list" aria-labelledby="liked-animals">
        {renderSavedAnimals()}
      </ul>
      <button
        disabled={checkedItems.length === 0}
        onClick={() => {
          removeItems(checkedItems);
          setCheckedItems([]);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default SavedList;
