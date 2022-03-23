import { useLikes } from "../contexts/Likes";
import useFetchNext from "../hooks/useFetchNext";
import InfoTile from "./InfoTile";

const AnimalInfo = () => {
  const { likeItem } = useLikes();
  const { isError, response, fetchNext } = useFetchNext(
    "https://zoo-animal-api.herokuapp.com/animals/rand"
  );

  return (
    <>
      <h1>
        <span aria-hidden>🐘</span> Animals <span aria-hidden>🦒</span>
      </h1>
      <div className="response-item-container">
        {isError && <div className="error-message">Something went wrong</div>}
        {response && !isError && (
          <>
            <InfoTile {...response} />
            <div className="button-container">
              <button
                className="like-button"
                onClick={() => likeItem(response)}
              >
                <span role="img" aria-label="like">
                  👍
                </span>
              </button>
              <button className="next-button" onClick={fetchNext}>
                <span role="img" aria-label="next">
                  🔄
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AnimalInfo;
