import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const A = styled.div`
  color: red;
  font-size: 24px;
`;
const B = styled.div`
  color: blue;
  font-size: 24px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isA: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(({ isA }) => ({
      isA: !isA,
    }));
  }

  componentDidMount() {
    // const script = document.createElement('script');
    // script.setAttribute('src', 'extension.js');
    // document.body.appendChild(script);
  }

  render() {
    const {
      isA,
    } = this.state;

    return (
      <div>
        <button onClick={this.toggle}>Toggle Component</button>
        {isA ? <A children="A" /> : <B children="B"/>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
