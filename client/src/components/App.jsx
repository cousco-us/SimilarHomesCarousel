import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello',
    };
  }

  render() {
    const { hello } = this.state;
    return (
      <div>{hello}</div>
    );
  }
}

export default App;
