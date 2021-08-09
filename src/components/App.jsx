import React from "react";
import Card from "./Cards";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      <Avatar image="https://media-exp1.licdn.com/dms/image/C5103AQE6iRyOay4CKw/profile-displayphoto-shrink_100_100/0/1516735166653?e=1632355200&v=beta&t=h7mJMp_W7r8IHSBdo5iuC1rqk0LJYxvwWFLETSJUHxk" />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
