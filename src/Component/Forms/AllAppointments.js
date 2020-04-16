import React, { useState, useEffect } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import Nav from "../Nav/Nav";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const AllAppointments = () => {
  const [appointmentInfo, setAppointmentInfo] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:4200/showAllAppointments")
    fetch("http://red-mongo.herokuapp.com/showAllAppointments")
      .then((res) => res.json())
      .then((data) => {
        setAppointmentInfo(data);
      });
  }, []);
  console.log(appointmentInfo.length);

  const tableData = appointmentInfo;
  const tableColumns = [
    { Header: "Appointment ID", accessor: "_id", sortable: false, width: 220 },
    {
      Header: "Date",
      accessor: "appointmentDate",
      style: { textAlign: "center" },
      width: 100,
    },
    { Header: "Time", accessor: "time", width: 160 },
    { Header: "Patient's Name", accessor: "patientName", width: 300 },
    { Header: "Phone Number", accessor: "phoneNumber", width: 150 },
    {
      Header: "Category ",
      accessor: "treatmentCategory",
      width: 150,
    },
    {
      Header: "Status",
      Cell: (props) => {
        return (
          <>
            <select className="btnSmall">
              <option value="pending">Pending</option>
              <option value="sone">Done</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <button className="btnSmall">Edit</button>
          </>
        );
      },
      sortable: false,
      filterable: false,
    },
  ];

  return (
    <div>
      <div className="appointment-nav">
        <Nav></Nav>
      </div>
      <Grid container spacing={1} m={3}>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="primary.main" color="primary.contrastText" p={1}>
            <div style={{ width: "100%" }}>
              <Box
                display="flex"
                p={1}
                justifyContent="center"
                alignItems="center"
              >
                <Box width="30%" display="flex" fontSize="h1.fontSize">
                  {tableData.length}
                </Box>
                <Box width="70%" display="flex" fontSize="h4.fontSize">
                  Total Appointment
                </Box>
              </Box>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="success.main" color="secondary.contrastText" p={1}>
            <div style={{ width: "100%" }}>
              <Box
                display="flex"
                p={1}
                justifyContent="center"
                alignItems="center"
              >
                <Box width="30%" display="flex" fontSize="h1.fontSize">
                  0
                </Box>
                <Box width="70%" display="flex" fontSize="h4.fontSize">
                  Completed Appointment
                </Box>
              </Box>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box bgcolor="error.main" color="error.contrastText" p={1}>
            <div style={{ width: "100%" }}>
              <Box
                display="flex"
                p={1}
                justifyContent="center"
                alignItems="center"
              >
                <Box width="30%" display="flex" fontSize="h1.fontSize">
                  {tableData.length}
                </Box>
                <Box width="70%" display="flex" fontSize="h4.fontSize">
                  Pending Appointment
                </Box>
              </Box>
            </div>
          </Box>
        </Grid>
      </Grid>

      <ReactTable
        data={tableData}
        noDataText="Please Wait... Data Loading "
        columns={tableColumns}
        defaultPageSize={12}
        pageSizeOptions={[5, 10, 20]}
        filterable
      ></ReactTable>
    </div>
  );
};

export default AllAppointments;
