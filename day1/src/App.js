import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

const root = document.getElementById('drum-machine');

class App extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", e => this.handleInput(e.key.toUpperCase()));
  }

  constructor(props) {
    super(props);
    this.state = {
      currSound: 'None'
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(key) {
    let audio = document.getElementById(key);
    audio.play();
    switch (key) {
      case 'Q':
        this.setState({ currSound: 'Sound 1' });

        break;
      case 'W':
        this.setState({ currSound: 'Sound 2' });
        break;
      case 'E':
        this.setState({ currSound: 'Sound 3' });
        break;
      case 'A':
        this.setState({ currSound: 'Sound 4' });
        break;
      case 'S':
        this.setState({ currSound: 'Sound 5' });
        break;
      case 'D':
        this.setState({ currSound: 'Sound 6' });
        break;
      case 'Z':
        this.setState({ currSound: 'Sound 7' });
        break;
      case 'X':
        this.setState({ currSound: 'Sound 8' });
        break;
      case 'C':
        this.setState({ currSound: 'Sound 9' });
        break;
    }
  }

  render() {
    return (

      <div>
        <div class="row">
          <div id="display">{this.state.currSound}</div>
        </div>
        <div class="row">
          <div id='1' class="drum-pad" onClick={() => this.handleInput('Q')}><audio className="clip" id="Q" src='https://s1.vocaroo.com/media/download_temp/Vocaroo_s1hDcXn5aM5J.mp3' />Q</div>
          <div id='2' class="drum-pad" onClick={() => this.handleInput('W')}><audio className="clip" id="W" src='https://s1.vocaroo.com/media/download_temp/Vocaroo_s1nPHw6YCZsc.mp3' />W</div>
          <div id='3' class="drum-pad" onClick={() => this.handleInput('E')}><audio className="clip" id="E" src='https://s1.vocaroo.com/media/download_temp/Vocaroo_s13XNsiLEhpm.mp3' />E</div>
        </div>
        <div class="row">
          <div id='4' class="drum-pad" onClick={() => this.handleInput('A')}><audio className="clip" id="A" src='https://s1.vocaroo.com/media/download_temp/Vocaroo_s1pG5s2rs7vk.mp3' />A</div>
          <div id='5' class="drum-pad" onClick={() => this.handleInput('S')}><audio className="clip" id="S" src='https://s0.vocaroo.com/media/download_temp/Vocaroo_s0gdOxlohw8x.mp3' />S</div>
          <div id='6' class="drum-pad" onClick={() => this.handleInput('D')}><audio className="clip" id="D" src='https://s0.vocaroo.com/media/download_temp/Vocaroo_s0U5gyfQ2k75.mp3' />D</div>
        </div>
        <div class="row">
          <div id='7' class="drum-pad" onClick={() => this.handleInput('Z')}><audio className="clip" id="Z" src='https://s1.vocaroo.com/media/download_temp/Vocaroo_s17auWehXfUm.mp3' />Z</div>
          <div id='8' class="drum-pad" onClick={() => this.handleInput('X')}><audio className="clip" id="X" src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' />X</div>
          <div id='9' class="drum-pad" onClick={() => this.handleInput('C')}><audio className="clip" id="C" src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' />C</div></div>
      </div>
    )
  }
}

export default App;