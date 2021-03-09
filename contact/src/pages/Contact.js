import { Link } from "react-router-dom";
import { useState } from "react";

import contactJSON from "../contacts.json";
// console.log(contactJSON);
export default function Contact() {
  const [contacts, setContacts] = useState(contactJSON);
  // console.log(contacts);
  return (
    <div>
      <div className="myPeeps">
        <h2 className="peepsBanner">My Peeps</h2>
        <ul>
          {contacts.map((contact) => {
            return (
              <Link className="test" to={"/detail/" + contact.id}>
                <div className="contact" key={contact.id}>
                  <img className="image" src={contact.picture.thumbnail}></img>
                  <li className="name">
                    {contact.name.title} {contact.name.first}{" "}
                    {contact.name.last}{" "}
                  </li>
                </div>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
