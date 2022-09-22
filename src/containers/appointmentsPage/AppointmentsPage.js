import React, {useState} from "react";
import AppointmentForm from '../../components/appointmentForm/AppointmentForm';
import TileList from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const { addAppointment, appointments, contacts } = props;

 const [appointment, setAppointment] = useState({
  title: '',
  contact: '',
  date: '',
  time: ''
 });

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(appointment);
   setAppointment(prev => ({
    title: '',
    contact: '',
    date: '',
    time: ''
   }))
   
  }; 

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm appointment={appointment} setAppointment={setAppointment} handleSubmit={handleSubmit} contacts={contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList obj={appointments} />
      </section>
    </div>
  );
};
