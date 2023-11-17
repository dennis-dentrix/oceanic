import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "enrolled",
    headerName: "Enrolled",
    type: "number",
    width: 90,
  },
  {
    field: "completed",
    headerName: "Completed courses",
    type: "number",
    width: 130,
  },

  {
    field: "events",
    headerName: "Events",
    description: "This column lists number of events user has booked.",
    sortable: true,
    width: 90,
    type: "number",
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    enrolled: 2,
    completed: 1,
    events: 10,
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    enrolled: 1,
    completed: 1,
    events: 10,
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    enrolled: 2,
    completed: 1,
    events: 10,
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    enrolled: null,
    completed: 1,
    events: 10,
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    enrolled: 2,
    completed: 1,
    events: 10,
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    enrolled: 1,
    completed: 1,
    events: 10,
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    enrolled: 1,
    completed: 1,
    events: 10,
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    enrolled: 2,
    completed: 1,
    events: 10,
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    enrolled: null,
    completed: 1,
    events: 10,
  },
];

export default function Users() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
