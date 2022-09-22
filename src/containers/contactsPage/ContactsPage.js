import React, { useState, useEffect } from "react";
import ContactForm from '../../components/contactForm/ContactForm'
import TileList from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const { contacts, setContacts } = props;
  

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const [duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      setContacts(contact);
      setContact({name: "", phone: "", email: ""});
    }
    else {
      alert('Name is a dublicate!');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const duplicate = contacts.find(con => con.name === contact.name);
    setDuplicate(duplicate);
  }, [contact])


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm contact={contact} setContact={setContact} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList obj={contacts} />
      </section>
    </div>
  );
};
