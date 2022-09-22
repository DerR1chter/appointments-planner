import React from "react";

const ContactForm = ({
  contact,
  setContact,
  handleSubmit
}) => {
  const onNameChange = ({target : {value}}) => {setContact(prev => {return {...prev, name: value}})};
  const onPhoneChange = ({target : {value}}) => {setContact(prev => {return {...prev, phone: value}})};
  const onEmailChange = ({target : {value}}) => {setContact(prev => {return {...prev, email: value}})};


  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input value={contact.name} onChange={onNameChange}></input>
      <label>Phone:</label>
      <input value={contact.phone} onChange={onPhoneChange} pattern="^\+(?:[0-9]●?){6,14}[0-9]$"></input>
      <label>Email:</label>
      <input value={contact.email} onChange={onEmailChange}></input>
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default ContactForm;