import React from "react";
import BookAppointment from "../Forms/BookAppointment";

const Services = (props) => {
  //console.log(props);
  const { serviceName, startTime, seatAvailable } = props.service;
  return (
    <div className="serviceCard">
      <h2 style={{ color: "#19D3AC" }}>{serviceName}</h2>
      <h3>{startTime}</h3>
      <small>{seatAvailable} SPACES AVAILABLE</small>
      <BookAppointment
        date={props.date}
        basicInfo={props.service}
      ></BookAppointment>
    </div>
  );
};

export default Services;
