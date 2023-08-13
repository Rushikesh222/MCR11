import { useData } from "../Context/CardContext";

export const WishlistCard = () => {
  const { state, dispatch } = useData();
  return (
    <div>
      {state?.Wishlist?.map((items) => {
        const { id, title, summary, imageURL } = items;
        return (
          <div className="card-block" key={id}>
            <img className="image" src={imageURL} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <div className="button-blocks">
              <button
                onClick={() => {
                  dispatch({ type: "ADD_STARRED", payload: id });
                }}
              >
                Star
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_WISHLIST", payload: id });
                }}
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
