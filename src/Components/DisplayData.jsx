import { useNavigate } from "react-router-dom";
import { useData } from "../Context/CardContext";
import "./DisplayCard.css";
export const DisplayData = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();
  const handleWishlist = () => {};
  return (
    <div className="display-Container">
      {state?.searchData?.map((items) => {
        const { id, title, summary, imageURL } = items;
        return (
          <div className="card-block" key={id}>
            <div className="" onClick={() => navigate(`/Details/${id}`)}>
              {" "}
              <img className="image" src={imageURL} />
              <h2>{title}</h2>
              <p>{summary}</p>
            </div>

            <div key={id} className="button-blocks">
              <button
                onClick={() => {
                  dispatch({ type: "ADD_STARRED", payload: id });
                }}
              >
                Star
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
