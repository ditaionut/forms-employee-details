import React from "react";
import "./UserItem.css";

function UserItem(props) {
  const {image, name, email, salary, isGoldClient } = props;


  return (
    <div className="product-items col-4 d-flex flex-column align-items-center mb-3">
      <img src={image} alt=""/>
      <h4>Name: {name}</h4>
      {/* {console.log({ name })} */}
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Salary:</strong> {salary} <strong>LEI</strong></p>
      {isGoldClient ? <h5>Client GOLD</h5> : null}
    </div>
  );
}

export default UserItem;
