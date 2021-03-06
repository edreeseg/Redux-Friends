import React from "react";
import styled from "styled-components";

const FriendInput = styled.form`
  position: relative;
  width: 80%;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  input {
    border: 1px solid #222;
    background: transparent;
    padding-left: 5px;
    font-size: 1.2rem;
  }

  button {
    background: #eee;
    border: 2px solid #222;
    color: #222;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      background: #222;
      color: #eee;
    }

    &:active {
      color: gray;
      transform: translateY(1px);
    }
  }
  .error {
    position: absolute;
    color: red;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default class FriendsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      error: null
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: null });
  };
  handleAddFriend = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.age || !this.state.email)
      return this.setState({ error: "Please fill out all fields." });
    const [name, age, email] = [
      this.state.name,
      Number(this.state.age),
      this.state.email
    ];
    this.props.addFriend({ name, age, email });
    this.setState({ name: "", age: "", email: "", error: null });
  };
  render() {
    return (
      <FriendInput onSubmit={this.handleAddFriend}>
        <input
          type="text"
          placeholder="Name"
          onChange={this.handleChange}
          name="name"
          value={this.state.name}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={this.handleChange}
          name="age"
          value={this.state.age}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
        />
        <button type="submit">Add Friend</button>
        {this.state.error ? (
          <span className="error">{this.state.error}</span>
        ) : null}
      </FriendInput>
    );
  }
}
