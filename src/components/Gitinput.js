import React from 'react';
import '../styles/gitinput.css';

class Gitinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',

    };

  };

  handleChange = (e) => {

    this.setState({ [e.target.name]: e.target.value });
  }

  submitData = (e) => {
    e.preventDefault();
    this.props.fetchUsername(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <div id="inputbox" >
        <form id="username" onSubmit={this.submitData}>
          <label id="userlabel">Github Username:</label>
          <input id="userinputbox" name="input" type="text" onChange={this.handleChange} value={this.state.input} />
          <button className="btn" type="submit" disabled={this.state.input ? false : true}>Calculate my Github Score</button>
        </form>
      </div>

    );
  }

}

export default Gitinput;