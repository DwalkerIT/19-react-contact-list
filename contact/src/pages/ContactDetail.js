import { Link } from "react-router-dom";
import { useState } from "react";
import contactJSON from "../contacts.json";
export default function ContactDetail(props) {
  const id = props.match.params.id;
  const currentContact = contactJSON.find((contact) => contact.id == id);
  const [contact] = useState(currentContact);
  console.log(contact);
  console.log(props);
  return (
    <div>
      <Link to="/">
        <h3>back</h3>
      </Link>
      <p>
        {contact.name.title} {contact.name.first} {contact.name.last}
      </p>
      <p>{contact.email}</p>
      <a href={"tel:" + contact.phone}>{contact.phone}</a>
      <p>
        {contact.location.city} {contact.location.state} {contact.location.zip}{" "}
        {contact.location.country}
      </p>
    </div>
  );
}
