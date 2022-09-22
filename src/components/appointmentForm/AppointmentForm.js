import React from "react";
import ContactPicker from '../../components/contactPicker/ContactPicker';

export const AppointmentForm = ({
  appointment, setAppointment, handleSubmit, contacts
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const onTitleChange = ({target : {value}}) => {setAppointment(prev => {return {...prev, title: value}})};
  const onDateChange = ({target : {value}}) => {setAppointment(prev => {return {...prev, date: value}})};
  const onTimeChange = ({target : {value}}) => {setAppointment(prev => {return {...prev, time: value}})};
  const handleChange = ({target : {value}}) =>  setAppointment(prev => {return {...prev, contact: value}})

  return (
    <form onSubmit={handleSubmit}>
    <label>Title:</label>
    <input value={appointment.title} onChange={onTitleChange}></input>
    <label>Date:</label>
    <input type="date" value={appointment.contact.date} onChange={onDateChange} min={getTodayString()}></input>
    <label>Time:</label>
    <input type="time" value={appointment.time} onChange={onTimeChange}></input>
    <label>Contact:</label>
    <ContactPicker contacts={contacts} handleChange={handleChange} />
    <input type="submit" value="Submit"></input>
  </form>
  );
};

export default AppointmentForm;
