import { toast } from "react-toastify";
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
                  toast.success("Add to Starred");
                }}
              >
                Star
              </button>
              <button
                onClick={() => {
                  dispatch({ type: "REMOVE_WISHLIST", payload: id });
                  toast.warning("Remove from Wishlist");
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
