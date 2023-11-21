import { DataGrid } from "@mui/x-data-grid";
import EventsDrawer from "../features/Events/EventsDrawer";
import { FormDialog } from "./FormDialog";

const columns = [
  // { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Event", width: 220, sortable: true },
  { field: "organiser", headerName: "Organiser", width: 150, sortable: true },
  {
    field: "venue",
    headerName: "Venue",
    width: 130,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    type: "text",
    sortable: true,
    width: 100,
  },

  {
    field: "endDate",
    headerName: "End Date",
    description: "This column lists number of events user has booked.",
    sortable: true,
    width: 100,
    type: "text",
  },
];

const rows = [
  {
    id: 1,
    title: "Blue economy conference",
    organiser: "Jon",
    venue: 2,
    startDate: "1 / 2 / 2020",
    endDate: "2 / 3 / 2020",
  },
  {
    id: 2,
    title: "Blue economy conference",
    organiser: "Cersei",
    venue: 1,
    startDate: "1 / 2 / 2020",
    endDate: "2 / 3 / 2020",
  },
  {
    id: 3,
    title: "Blue economy conference",
    organiser: "Jaime",
    venue: 2,
    startDate: "1 / 2 / 2020",
    endDate: "2 / 3 / 2020",
  },
  {
    id: 4,
    title: "Blue economy conference",
    organiser: "Arya",
    venue: null,
    startDate: "1 / 2 / 2020",
    endDate: "2 / 3 / 2020",
  },
  {
    id: 5,
    title: "Blue economy conference",
    organiser: "Daenerys",
    venue: 2,
    startDate: "1 / 2 / 2020",
    endDate: "2 / 3 / 2020",
  },
  {
    id: 6,
    title: "Blue economy conference",
    organiser: null,
    venue: 1,
    startDate: "1 / 2 / 2020",
    endDate: "2 / 3 / 2020",
  },
  {
    id: 7,
    title: "Blue economy conferenced",
    organiser: "Ferrara",
    venue: 1,
    startDate: "1 / 2 / 2020",
    endDate: "2 / 3 / 2020",
  },
  {
    id: 8,
    title: "Blue economy conference",
    organiser: "Rossini",
    venue: 2,
    startDate: "1 / 2 / 2020",
    endDate: "2 / 3 / 2020",
  },
  {
    id: 9,
    title: "Blue economy conference",
    organiser: "Harvey",
    venue: null,
    startDate: 1 / 2 / 2020,
    endDate: 2 / 3 / 2020,
  },
];

export default function EventsMngmt() {
  return (
    <div>
      <h1>Events managements</h1>
      <FormDialog />
      <div>
        <EventsDrawer />
      </div>
      <EventsTable />
    </div>
  );
}

function EventsTable() {
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
