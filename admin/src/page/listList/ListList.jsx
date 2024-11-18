import { DataGrid } from "@mui/x-data-grid";
import "./listList.css";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { ListContext } from "../../context/listContext/ListContext";
import { getlists, deleteList } from "../../context/listContext/apiCalls";

function ListList() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getlists(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("would you like to delete movie"))
      deleteList(id, dispatch);
  };

  let columns;
  if (lists[0] !== undefined) {
    columns = [
      { field: "_id", headerName: "ID", width: 250 },
      { field: "title", headerName: "Genre", width: 250 },
      { field: "genre", headerName: "years", width: 150 },
      { field: "type", headerName: "limit", width: 150 },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/list/" + params.row._id} state={{ list: params.row }}>
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
      {lists[0] !== undefined && (
        <DataGrid
          rows={lists}
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

export default ListList;
