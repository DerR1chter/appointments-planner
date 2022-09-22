import React, { useState, useEffect }  from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = ({name, phone, email}) => {
    
    setContacts((prevContacts) => {
      const newContact = {
        id: prevContacts[prevContacts.length - 1].id + 1,
        name,
        phone,
        email
      };
      return [...prevContacts, newContact];
    })
  }

  const addAppointment = ({title, contact, date, time}) => {
    setAppointments((prevAppointments) => {
      const newAppointment = {
        id: prevAppointments[prevAppointments.length - 1].id + 1,
        title,
        contact,
        date,
        time
      };
      return [...prevAppointments, newAppointment];
    })
  }

  useEffect(() => {
    setContacts([{
      id: 0,
      name: "",
      phone: "",
      email: ""
    }]);

    setAppointments([{
      id: 0,
      title: "",
      contact: "",
      date: "",
      time: ""
    }]);
  }, [])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} setContacts={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
