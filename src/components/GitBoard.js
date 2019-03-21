import React from 'react';
import axios from 'axios';
import Gitinput from './Gitinput';
import Gitscore from './Gitscore';
import '../styles/gitBoard.css';

class GitBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gitScore: {},
    };

  };
  fetchUsername = (data) => {
    var url = `https://api.github.com/users/${data}`;
    axios.get(url)
      .then((response) => {
        var score = response.data.followers + response.data.public_repos;
        var message = "Success";
        var gitScore = {
          score: score,
          message: message,
        }
        this.setState({ gitScore });
      })
      .catch((error) => {
        var score = "User does not exist, pick a different Github username";
        var message = "failure";
        var gitScore = {
          score: score,
          message: message,
        }
        this.setState({ gitScore });
      })

  }

  render() {
    return (
      <div id="gitboard">
        <h1 id="header">GitHub Score</h1>
        <Gitinput fetchUsername={this.fetchUsername} />
        <Gitscore score={this.state.gitScore} />
      </div>

    );

  }

}
export default GitBoard;