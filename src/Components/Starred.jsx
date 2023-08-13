import { useData } from "../Context/CardContext";

export const StarredCard = () => {
  const { state, dispatch } = useData();
  return (
    <div>
      {state?.Starred?.map((items) => {
        const { id, title, summary, imageURL } = items;
        return (
          <div className="card-block" key={id}>
            <img className="image" src={imageURL} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <div className="button-blocks">
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_STARRED", payload: id });
                }}
              >
                UnStar
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "ADD_WISHLIST", payload: id });
                }}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
