import React from "react";

export const ContactPicker = ({contacts, handleChange}) => {
  return (
    <select name="contacts" onChange={handleChange}>
      {contacts.map((contact, index) => {
        if (index === 0) {
          return <option selected="selected" key={contact.name} value={contact.name}>{contact.name}</option>
        } else {
        return <option key={contact.name} value={contact.name}>{contact.name}</option>
        }
      })}
  </select>
  );
};

export default ContactPicker;