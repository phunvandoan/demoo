import { DataGrid } from "@mui/x-data-grid";
import "./productList.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

function ProductList() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("would you like to delete movie"))
      deleteMovie(id, dispatch);
  };

  let columns;
  if (movies[0] !== undefined) {
    columns = [
      { field: "_id", headerName: "ID", width: 250 },
      {
        field: "movie",
        headerName: "Movie",
        width: 200,
        editable: false,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              <img className="productListImg" src={params.row.img} alt="" />
              {params.row.title}
            </div>
          );
        },
      },
      { field: "genre", headerName: "Genre", width: 120 },
      { field: "year", headerName: "years", width: 120 },
      { field: "limit", headerName: "limit", width: 120 },
      { field: "isSeries", headerName: "isSeries", width: 120 },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link
                to={"/product/" + params.row._id}
                state={{ movie: params.row }}
              >
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="productListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </>
          );
        },
      },
    ];
  }

  return (
    <div className="productList">
      {movies[0] !== undefined && (
        <DataGrid
          rows={movies}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[8]}
          checkboxSelection
          disableRowSelectionOnClick
          getRowId={(r) => r._id}
        />
      )}
    </div>
  );
}

export default ProductList;
