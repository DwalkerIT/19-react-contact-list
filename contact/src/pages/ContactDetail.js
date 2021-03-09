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
      <div>
        <img className="singleImage" src={contact.picture.thumbnail}></img>
      </div>
      <p>
        <i class="fas fa-user"></i>
        {contact.name.title} {contact.name.first} {contact.name.last}
      </p>
      <p>
        <i class="fas fa-envelope"></i>
        {contact.email}
      </p>
      <i class="fas fa-mobile"></i>
      <a href={"tel:" + contact.phone}>{contact.phone}</a>
      <p>
        <i class="fas fa-globe-americas"></i>
        {contact.location.city} {contact.location.state} {contact.location.zip}{" "}
        {contact.location.country}
      </p>
    </div>
  );
}
