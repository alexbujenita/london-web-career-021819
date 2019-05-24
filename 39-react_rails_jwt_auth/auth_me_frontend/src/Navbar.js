import React from "react";

class Navbar extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div className="nav">
        {this.props.logged_in ? (
          <div>
            <p> {`you're logged in as ${this.props.username}`}</p>
            <button onClick={this.props.getPosts}>console.log my posts</button>
            <button onClick={this.props.handleLogOut}>Log out</button>
          </div>
        ) : (
          <form>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                onChange={this.props.handleChange}
                id="username"
                type="text"
                name="username"
              />
              <label htmlFor="password">Password:</label>
              <input
                onChange={this.props.handleChange}
                id="password"
                type="text"
                name="password"
              />
              <button onClick={this.props.onLoginClicked}>Log in</button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default Navbar;
