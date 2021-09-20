import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";
import { usersList } from "../utils/users";

function UserList(props) {
  const { users } = props;

  return (
    <div>
      <h2>Lista utilizatorilor</h2>
      <div className="user-list col-4">
        {users.map((user, index) => {
          return (
            <div className="product-item" key={index}>
              <UserItem
                id={user.id}
                name={user.name}
                email={user.email}
                salary={user.salary}
                isGoldClient={user.isGoldClient}
              />
              <div>
                <button onClick={() => props.onDelete(user.id)}>remove</button>
              </div>
            </div>
          );
        })}
        <div className="user-list">
          {usersList.map((data, index) => {
            return (
              <div className="product-item" key={index}>
                <UserItem
                  name={data.name}
                  email={data.email}
                  image={data.image}
                  salary={data.salary}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserList;
