import React from "react";
import Nav from "../Nav/Nav";
import "./Appointment.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Services from "./Services";

const Appointment = () => {
  const [appointmentFor, setAppointmentFor] = useState([
    {
      serviceName: "Teeth Orthodontics",
      startTime: "8:00 AM - 9:00 AM",
      endTime: "8:30 AM",
      seatAvailable: 10,
    },
    {
      serviceName: "Cometic Dentistry",
      startTime: "10.05AM - 11.30AM",
      endTime: "8:30 AM",
      seatAvailable: 10,
    },
    {
      serviceName: "Teeth Cleaning",
      startTime: "5:00 PM - 6:30 PM",
      endTime: "8:30 AM",
      seatAvailable: 10,
    },
    {
      serviceName: "Cavity Protection",
      startTime: "7:00 am - 8:30 AM",
      endTime: "8:30 AM",
      seatAvailable: 10,
    },
    {
      serviceName: "Teeth Feeling ",
      startTime: "8:00 AM - 9:00 AM",
      endTime: "8:30 AM",
      seatAvailable: 10,
    },
    {
      serviceName: "Route Canal",
      startTime: "8:00 AM - 9:00 AM",
      endTime: "8:30 AM",
      seatAvailable: 10,
    },
  ]);
  //console.log(appointmentFor);

  const [date, setDate] = useState(new Date());

  const onChange = (date) => setDate(date);

  const showAllServices = appointmentFor.map((service) => (
    <Services date={date} service={service}></Services>
  ));

  return (
    <>
      <div className="appointmentUpperDiv">
        <div className="appointment-nav">
          <Nav></Nav>
        </div>
        <div className="appointment-calender">
          <Calendar minDate={new Date()} onChange={onChange} value={date} />
          <img
            className="home-img-right"
            src={require("../../resources/images/Mask Group 1.png")}
            alt="patient-Chair"
          />
        </div>

        <h1 style={{ textAlign: "center", color: "#19D3AE" }}>
          Available Appointments on{" "}
          {new Date(date).toLocaleString("en-us", { weekday: "long" })},{" "}
          {new Date(date).toLocaleString("en-us", { month: "long" })}{" "}
          {date.getDate()}, {date.getUTCFullYear()}
        </h1>
      </div>
      <div className="service-card-holder">{showAllServices}</div>
    </>
  );
};

export default Appointment;
