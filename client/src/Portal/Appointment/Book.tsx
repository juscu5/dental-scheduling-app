import { Box } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { BookingField } from "./types";
import moment from "moment";

const Book = ({ events }: { events: BookingField[] }) => {
  const Events = events.map((e) => ({
    title: e.firstname,
    start: moment(
      `${moment(e.date).format("YYYY-MM-DD")}T${moment(e.timestart).format(
        "HH:mm:ss"
      )}`
    ).toDate(),
    end: moment(
      `${moment(e.date).format("YYYY-MM-DD")}T${moment(e.timeend).format(
        "HH:mm:ss"
      )}`
    ).toDate(),
  }));

  return (
    <Box
      sx={{
        maxWidth: 900,
        width: { xs: 500, sm: 500, md: 800, lg: 800 },
        mx: "auto",
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        background: "#fafafa",
        minHeight: 500,
      }}
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={Events}
        height={600}
      />
    </Box>
  );
};

export default Book;
