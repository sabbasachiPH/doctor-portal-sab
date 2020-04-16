import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const BookAppointment = (props) => {
  // console.log(props);
  // console.log(typeof props.date, props.date);
  const { serviceName, startTime } = props.basicInfo;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddAppointment = () => {
    const treatmentCategory = document
      .getElementById("treatmentCategory")
      .value.toLowerCase();
    const time = document.getElementById("time").value;
    const patientName = document
      .getElementById("patientName")
      .value.toLowerCase();
    const phoneNumber = document.getElementById("phoneNumber").value;
    const emailAddress = document
      .getElementById("emailAddress")
      .value.toLowerCase();
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentDetail = {
      treatmentCategory,
      time,
      patientName,
      phoneNumber,
      emailAddress,
      appointmentDate,
    };
    console.log(time, patientName, phoneNumber, emailAddress, appointmentDate);
    console.log(appointmentDetail);
    // fetch("http://localhost:4200/addAppointment", {
    fetch("http://red-mongo.herokuapp.com/addAppointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentDetail), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("post Successful ", data);
      });

    setOpen(false);
  };
  return (
    <div>
      <Button
        classes={{ label: "btnAppointment" }}
        variant="text"
        color="inherit"
        onClick={handleClickOpen}
      >
        BOOK APPOINTMENT
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          id="form-dialog-title"
          style={{ textAlign: "center", color: "#19D3AE" }}
        >
          {serviceName}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            margin="dense"
            id="treatmentCategory"
            label="Treatment Category"
            type="text"
            value={serviceName}
            fullWidth
          />
          <TextField
            margin="dense"
            id="time"
            label="Time"
            type="text"
            value={startTime}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="patientName"
            label="Your Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="phoneNumber"
            label="Phone Number"
            type="string"
            fullWidth
          />
          <TextField
            margin="dense"
            id="emailAddress"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="appointmentDate"
            label="Appointment Date"
            type="text"
            value={
              props.date.getDate() +
              "-" +
              (props.date.getMonth() + 1) +
              "-" +
              props.date.getFullYear()
            }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleAddAppointment}
            classes={{ label: "btnAppointment" }}
          >
            SEND
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BookAppointment;
