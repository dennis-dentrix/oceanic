import { DataGrid } from "@mui/x-data-grid";
import EventsDrawer from "./EventsDrawer";
import { FormDialog } from "./FormDialog";
import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../services/apiEvents";
import Spinner from "../ui/Spin";

const columns = [
  // { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Event", width: 220, sortable: true },
  { field: "organizer", headerName: "Organizer", width: 150, sortable: true },
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
  const {
    data: events,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });
  let row = [];

  if (isLoading) return <Spinner />;
  events.map((event) => {
    const evn = {
      id: event.id,
      title: event.title,
      organizer: event.organizer,
      venue: event.location,
      startDate: event.startDate,
      endDate: event.endDate,
    };
    return row.push(evn);
  });
  console.log(row);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={row}
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
