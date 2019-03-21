import React from 'react';
import '../styles/gitscore.css';

const GitScore = (props) => {
  const differentMessage = () => {
    if (props.score.score >= 200) {
      return <h3 style={{ "color": "blue" }}> Github Elite!</h3 >
    } else if (props.score.score < 20) {
      return <h3 style={{ "color": "red" }}>Needs Work!</h3>
    } else if (props.score.score > 20 && props.score.score < 50) {
      return <h3 style={{ "color": "orange" }}>A decent start!</h3>
    } else if (props.score.score > 50 && props.score.score < 100) {
      return <h3 style={{ "color": "black" }}>Doing good!</h3>
    } else if (props.score.score > 100 && props.score.score < 200) {
      return <h3 style={{ "color": "green" }}>Great job!</h3>
    }

  };

  return (
    Object.keys(props.score).length !== 0 ? (
      <div id="gitscore">
        {props.score.message === "Success" ?
          (
            <div>
              <h1>
                Your Score: {props.score.score}
              </h1>
              {differentMessage()}
            </div>
          ) : (
            <h1>
              {props.score.score}
            </h1>
          )
        }

      </div>
    ) : ''

  );
}
export default GitScore;