import React from "react";
import Inner from './inner.jsx';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <p>Привет всем!</p>
        <Inner />
      </>
    );
  }
}

export default App;