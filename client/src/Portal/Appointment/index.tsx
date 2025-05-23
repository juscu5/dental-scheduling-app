import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import Book from "./Book";
import { useAuthStore } from "../../_shared/store/AuthStore";
import { TableConfiguration } from "./config";
import { actionElement } from "../Services/element";
import { Table } from "../components/Table";
import moment from "moment";
import { AppointmentField, BookingField } from "./types";
import DrawerAdd from "../components/Drawer";
import { useCallback, useContext, useEffect, useState, useMemo } from "react";
import { useAccountStore } from "../../_shared/store/AccountStore";
import {
  addBookingQuery,
  getBookingQuery,
  editBookingQuery,
  deleteBookingQuery,
} from "./api";
import Form from "../../_shared/components/Form";
import { getAppointmentFields } from "./fields";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../_shared/context/GlobalContext";

const PortalAppointment = () => {
  const { user } = useAuthStore();
  const { account } = useAccountStore();
  const { data, refetch, isLoading } = getBookingQuery(account, user);
  const { tableHead, tableSettings } = TableConfiguration();
  const { useSnackBar } = useContext(GlobalContext);
  const [isAdd, setAdd] = useState(false);
  const [open, setOpen] = useState(false);
  const [tableData, setTableData] = useState<BookingField[]>([]);
  const xData = useMemo(() => data?.data?.payload || [], [data]);

  useEffect(() => {
    if (!xData || !Array.isArray(xData)) return;

    const transformedData = xData.map((e: any) => ({
      id: e.id,
      title: e.service_name,
      firstname: e.dentist,
      date: moment(e.date).format("ll"),
      timeframe: `${moment(e.time_start, "HH:mm:ss").format(
        "hh:mm A"
      )} - ${moment(e.time_end, "HH:mm:ss").format("hh:mm A")}`,
      timestart: moment(e.time_start, "HH:mm:ss").toDate(),
      timeend: moment(e.time_end, "HH:mm:ss").toDate(),
    }));

    setTableData(transformedData);
  }, [xData]);

  const form = useForm<AppointmentField>({
    defaultValues: { dentist: "", service_name: "", date: "", schedule: "" },
  });
  const { reset } = form;

  const handleEditPageEnable = useCallback(
    (data: any) => {
      console.log(data.id);
      reset({
        id: data.id,
        dentist: data.firstname,
        service_name: data.title,
        date: data.date,
        schedule: `${moment(data.timestart).format("HH:mm:ss")}-${moment(
          data.timeend
        ).format("HH:mm:ss")}`,
      });

      setOpen(true);
      setAdd(false);
    },
    [reset]
  );

  const handleAddAppointment = useCallback(
    async (formData: AppointmentField) => {
      try {
        const timeStart = formData.schedule.slice(0, 8);
        const timeEnd = formData.schedule.slice(9, 17);
        const data = {
          dentist: formData.dentist,
          service_name: formData.service_name,
          date: moment(formData.date, "MM/DD/YYYY"),
          time_start: timeStart,
          time_end: timeEnd,
        };
        const res = await addBookingQuery(account, data);
        if (res.status === "Success") {
          useSnackBar("Success Booking", { variant: "success" });
          setOpen(false);
        } else {
          useSnackBar("Failed to Book", { variant: "error" });
          setOpen(false);
        }
      } catch (e: any) {
        const errorMessage = e.response?.data?.payload.msg || "Error occurred";
        const error = errorMessage ? errorMessage : e;
        console.log(e);
        useSnackBar(`Booking Failed: ${error}`, { variant: "error" });
      }
      refetch();
      reset();
    },
    [account, refetch, reset, useSnackBar]
  );

  const handleEditAppointment = useCallback(
    async (formData: AppointmentField) => {
      try {
        const timeStart = formData.schedule.slice(0, 8);
        const timeEnd = formData.schedule.slice(9, 17);
        const data = {
          dentist: formData.dentist,
          service_name: formData.service_name,
          date: moment(formData.date, "ll").format("YYYY-MM-DD"),
          time_start: timeStart,
          time_end: timeEnd,
        };
        const res = await editBookingQuery(
          account,
          formData.id.toString(),
          data
        );
        if (res.status === "Success") {
          useSnackBar("Success Booking", { variant: "success" });
          setOpen(false);
        } else {
          useSnackBar("Failed to Book", { variant: "error" });
          setOpen(false);
        }
      } catch (e: any) {
        const errorMessage = e.response?.data?.payload.msg || "Error occurred";
        const error = errorMessage ? errorMessage : e;
        console.log(e);
        useSnackBar(`Booking Failed: ${error}`, { variant: "error" });
      }
      refetch();
      reset();
    },
    [account, refetch, reset, useSnackBar]
  );

  const handleDeleteAppointment = useCallback(
    async (formData: AppointmentField) => {
      try {
        const res = await deleteBookingQuery(account, formData.id.toString());
        if (res.status === "Success") {
          useSnackBar("Success Delete Booking", { variant: "success" });
          setOpen(false);
        } else {
          useSnackBar("Failed to Delete Booking", { variant: "error" });
          setOpen(false);
        }
      } catch (e: any) {
        const errorMessage = e.response?.data?.payload.msg || "Error occurred";
        const error = errorMessage ? errorMessage : e;
        console.log(e);
        useSnackBar(`Booking Failed: ${error}`, { variant: "error" });
      }
      refetch();
      reset();
    },
    [account, refetch, reset, useSnackBar]
  );

  const actionsForTable = useMemo(
    () => actionElement(handleDeleteAppointment, handleEditPageEnable),
    [handleDeleteAppointment, handleEditPageEnable]
  );

  const addFields = useMemo(
    () => (
      <Form
        form={form}
        onSubmit={isAdd ? handleAddAppointment : handleEditAppointment}
        isLoading={isLoading}
        formElements={getAppointmentFields(isLoading)}
        submitButtonText={isLoading ? "Booking Appointment" : "Book Now"}
      />
    ),
    [form, isAdd, handleAddAppointment, handleEditAppointment, isLoading]
  );

  const handleBookButtonClick = useCallback(() => {
    setAdd(true);
    setOpen(true);
  }, []);

  return (
    <>
      <Toolbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Typography variant="h4" fontWeight={600}>
          Hi&nbsp;{user}! Here's&nbsp;your&nbsp;schedule Appointment
        </Typography>
      </Box>
      <Toolbar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={{ xs: "200vh", sm: "200vh", md: "200vh", lg: "200vh" }}
      >
        <Stack
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          gap={2}
        >
          <Box>
            <Book events={tableData} />
          </Box>

          <Box
            display="flex"
            width={{ xs: "200vh", sm: "140vh", md: "175vh", lg: "100vh" }}
          >
            <Stack flexDirection={"column"}>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  onClick={handleBookButtonClick}
                  variant="contained"
                  sx={{
                    width: { xs: "125vh", sm: "125vh", md: "50vh", lg: "30vh" },
                    mb: { xs: 3, sm: 3, md: 3, lg: 0 },
                  }}
                >
                  Book An Appointment
                </Button>
              </Box>
              <Table
                tableHead={tableHead}
                tableSettings={tableSettings}
                tableData={tableData as Array<any>}
                actionElement={actionsForTable}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
      <DrawerAdd
        title={isAdd ? "Book An Appointment" : "Edit Appointment"}
        open={open}
        setOpen={setOpen}
        element={addFields}
      />
    </>
  );
};

export default PortalAppointment;
