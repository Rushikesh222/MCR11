import { useData } from "../Context/CardContext";
import "./DisplayCard.css";
export const DisplayForm = () => {
  const { state, dispatch } = useData();
  const handelFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const titleData = form.title.value;
    const yearData = form.year.value;
    const genreData = form.genre.value;
    const ratingData = form.rating.value;
    const directorData = form.director.value;
    const writerData = form.writer.value;
    const castData = form.cast.value;
    const imageData = form.image.value;
    const summaryData = form.summary.value;

    dispatch({
      type: "ADD_MOVIE",
      payload: {
        id: state.moviesData.length + 1,
        title: titleData,
        year: yearData,
        genre: [genreData],
        rating: ratingData,
        director: directorData,
        writer: writerData,
        cast: [castData],
        summary: summaryData,
        imageURL: imageData,
      },
    });
  };
  return (
    <div className="form-container">
      <form onSubmit={handelFormData} className="form-details">
        <div className="input-lable">
          <label>
            Title
            <input type="text" name="title" />
          </label>
          <label>
            Year:
            <input type="text" name="year" />
          </label>
          <label>
            Genre:
            <input type="text" name="genre" />
          </label>
          <label>
            rating:
            <input type="text" name="rating" />
          </label>
          <label>
            Director:
            <input type="text" name="director" />
          </label>
          <label>
            Writer:
            <input type="text" name="writer" />
          </label>
          <label>
            Cast:
            <input type="text" name="cast" />
          </label>
          <label>
            Summary:
            <input type="textarea" name="summary" />
          </label>
          <label>
            Image Url:
            <input type="text" name="image" />
          </label>
        </div>{" "}
        <button>Add Movie</button>
      </form>
    </div>
  );
};
