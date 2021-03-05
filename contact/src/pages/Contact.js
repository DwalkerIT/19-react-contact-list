import { link } from "react-router-dom";
import { useState } from "react";

import contactJSON from "../contacts.json";
// console.log(contactJSON);
export default function Contact() {
  const [contacts, setContacts] = useState(contactJSON);
  console.log(contacts);
  return (
    <div>
      <h2>My Peeps</h2>;
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <link to={"/detail/" + contact.id}>
              {contact.name.title} {contact.name.first} {contact.name.last}
              </link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
