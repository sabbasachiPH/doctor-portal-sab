import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Nav from "../Nav/Nav";
import Box from "@material-ui/core/Box";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ShortList = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => setDate(date);

  const [appointmentInfo, setAppointmentInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4200/showAllAppointments")
      .then((res) => res.json())
      .then((data) => {
        setAppointmentInfo(data);
      });
  }, []);
  console.log(appointmentInfo);

  const tableData = appointmentInfo.filter(
    (apdt) =>
      apdt.appointmentDate ===
      date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
  );
  const tableColumns = [
    { Header: "Name", accessor: "patientName", width: 300 },
    { Header: "Schedule", accessor: "time", width: 200 },
    {
      Header: "Action",
      Cell: (props) => {
        return (
          <>
            <select>
              <option value="pending">Pending</option>
              <option value="sone">Done</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </>
        );
      },
      width: 150,
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <>
      <div className="appointment-nav">
        <Nav></Nav>
      </div>
      <h1 style={{ textAlign: "center", color: "#19D3AE" }}>
        Please Select the Date to Find your List
      </h1>
      <Box p={1}>
        <div style={{ width: "100%" }}>
          <Box
            display="flex"
            flexWrap="wrap"
            p={1}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              bgcolor="primary.main"
            >
              <h1>
                {date.getDate() +
                  "-" +
                  (date.getMonth() + 1) +
                  "-" +
                  date.getFullYear()}
              </h1>
              <Calendar onChange={onChange} value={date} />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <h4>Appointments</h4>
              <ReactTable
                data={tableData}
                columns={tableColumns}
                defaultPageSize={12}
                pageSizeOptions={[5, 10, 20]}
              ></ReactTable>
            </Box>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default ShortList;
