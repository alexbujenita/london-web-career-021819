import React from "react";
import "./App.css";
import api from "./util/api";

import Navbar from "./Navbar";

class App extends React.Component {
  state = {
    logged_in: false,
    username: "",
    password: "",
    posts: []
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      api.getCurrentUser(token).then(user => {
        this.setState({ logged_in: true, username: user.username });
      });
    }
  }

  getPosts = () => {
    const token = localStorage.getItem("token");
    api
      .getPosts(token)
      .then(posts =>
        this.setState({ posts }, () => console.log(this.state.posts))
      );
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onLoginClicked = e => {
    e.preventDefault();
    api.login(this.state.username, this.state.password).then(data => {
      localStorage.setItem("token", data.jwt);
      this.setState({ logged_in: true, username: data.username });
    });
  };

  handleLogOut = () => {
    localStorage.clear("token");
    this.setState({
      logged_in: false,
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Auth</h1>
        <Navbar
          logged_in={this.state.logged_in}
          onLoginClicked={this.onLoginClicked}
          handleLogOut={this.handleLogOut}
          username={this.state.username}
          handleChange={this.handleChange}
          getPosts={this.getPosts}
        />
      </div>
    );
  }
}

export default App;
