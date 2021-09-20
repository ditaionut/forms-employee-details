import React from "react";
import PostList from "./components/PostList";
import UserList from "./components/UserList";
import UserAddForm from "./components/UserAddForm";
import { Tabs, Tab } from "react-bootstrap";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: "white",
      color: "black",
      users: [],
    };
  }
  deleteTodo = (id) => {
    console.log(id);

    this.setState((prevState) => ({
      users: prevState.users.filter((item) => item.id !== id),
    }));
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        data = data.filter((user) => user.id < 4);
        data.forEach((user) => {
          user.isGoldClient = false;
        });
        this.setState({ users: data });
      });
  }

  changeColor(event) {
    this.setState({ background: event.target.value });
  }

  changeTextColor(e) {
    this.setState({ color: e.target.value });
  }
  getMaxId(users) {
    let maxId = 0;

    users.forEach((user) => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, salary, email, isGoldClient) {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salary,
          },
        ],
      };
    });
  }

  render() {
    return (
      <div
        className="app"
        style={{ background: this.state.background, color: this.state.color }}
      >
        <h1>Admin panel - Proiectul 1</h1>
        <UserAddForm
          submitAddForm={(
            event,
            name,
            salary,
            email,
            isGoldClient,
            emailError
          ) =>
            this.submitAddForm(
              event,
              salary,
              name,
              email,
              isGoldClient,
              emailError
            )
          }
        />
        <Tabs defaultActiveKey="utilizatori" className="tab-container" >
          <Tab eventKey="utilizatori" title="Utilizatori">
          <UserList onDelete={this.deleteTodo} users={this.state.users} />
          </Tab>
          <Tab eventKey="postari" title="Postari">
            <PostList/>
          </Tab>
        </Tabs>
        {/* <UserList onDelete={this.deleteTodo} users={this.state.users} /> */}
        {/* <PostList /> */}
        <div className="color-container">
          <p>Change Background Color: </p>
          <input type="color" onChange={(event) => this.changeColor(event)} />
          <p>Change Text Color: </p>
          <input type="color" onChange={(e) => this.changeTextColor(e)} />
        </div>
      </div>
    );
  }
}

export default App;
