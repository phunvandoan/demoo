import "./newList.css";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getMovies } from "../../context/movieContext/apiCalls";
import { createList } from "../../context/listContext/apiCalls";
import { Link, useNavigate } from "react-router-dom";
import { ListContext } from "../../context/listContext/ListContext";

function NewList() {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  console.log(list);

  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatchMovie);
  }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    navigate("/lists");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form action="" className="addProductForm">
        <div className="addProductItem">
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Popular Movies"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="">genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="">Type</label>
          <select name="type" onChange={handleChange}>
            <option>Type</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label htmlFor="">Content</label>
          <select
            name="content"
            onChange={handleSelect}
            multiple
            style={{ height: "280px" }}
          >
            {movies.map((movie) => (
              <option key={movie._id} value={movie._id}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>
          <Link to="/movies" className="link">
            Create
          </Link>
        </button>
      </form>
    </div>
  );
}

export default NewList;
