import { useNavigate } from "react-router-dom";
import { useData } from "../Context/CardContext";
import { toast } from "react-toastify";
import "./DisplayCard.css";
export const DisplayData = () => {
  const { state, dispatch } = useData();
  const navigate = useNavigate();

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
                  toast.success("Add to Starred");
                  dispatch({ type: "ADD_STARRED", payload: id });
                }}
              >
                Star
              </button>
              <button
                onClick={() => {
                  toast.success("Add to Wishlist");
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
