import React from "react";
import { FormErrors } from "./FormErrors";
import "./UserAddForm.css";

const initialState = {
  name: "",
  email: "",
  isGoldClient: false,
  salary: "",
  image: "",
  formErrors: { password: "", email: "" },
  emailValid: false,
  formValid: false,
};

class UserAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleUserInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  updateIsGoldClient(event) {
    this.setState({ isGoldClient: event.target.checked });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid,
    });
  }
  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    const { salary, name, email, isGoldClient, } = this.state;

    return (
      <>
        <form
          className="user-add-form"
          onSubmit={(event) => {
            this.props.submitAddForm(
              event,
              salary,
              name,
              email,
              isGoldClient,
            );
          }}
        >
          <h2>Adauga utilizatori:</h2>
          <label htmlFor="name">Add image</label>
          <input type="file"/>
          <button>upload</button>
          <label htmlFor="name">Nume:</label>
          <input
            className="form-control"
            required
            type="text"
            name="name"
            onChange={(event) => this.handleUserInput(event)}
          />
          <label htmlFor="email">Email:</label>
          <input
            className={`form-group form-control ${this.errorClass(
              this.state.formErrors.email
            )}`}
            required
            type="text"
            name="email"
            onChange={(event) => this.handleUserInput(event)}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <label>Salary</label>
          <input
            className="form-control"
            required
            type="number"
            name="salary"
            onChange={(event) => this.handleUserInput(event)}
          />
          <label htmlFor="is-gold-client">Client GOLD</label>
          <input
            type="checkbox"
            name="is-gold-client"
            value="true"
            onChange={(event) => this.updateIsGoldClient(event)}
          />

          <input
            className="btn btn-primary"
            type="submit"
            value="Introdu utilizatorul"
            disabled={!this.state.formValid}
          />
        </form>
      </>
    );
  }
}

export default UserAddForm;
