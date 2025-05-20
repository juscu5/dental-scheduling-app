import { Box } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";

const Book = () => {
  const sampleEvents = [
    {
      title: "Dr. Smith",
      start: moment("2025-05-20T10:00:00").toDate(),
      end: moment("2025-05-20T11:00:00").toDate(),
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: 900,
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
        events={sampleEvents}
        height={500}
      />
    </Box>
  );
};

export default Book;
