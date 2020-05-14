import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import ANOOP, {ABCD as JACK,XYZ} from './ExportSample'

//pure function 
function add(a, b) {
  a = 50;


  return a + b;

}

function Welcome1(props) {
  var c = add(10, 20);
  return (
    <div>Welcome to react {props.name}</div>
  )
}

class Welcome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pincode: '680724'
    }


  }
  componentDidMount() {
    // ANOOP()
    // JACK();
    XYZ();

    console.log("in did mount")


    setTimeout(() => {

      this.setState({
        pincode: '000000'
      })

    }, 10000)
  }

  componentDidUpdate() {
    // console.log("in did update")
  }

   nameClick=(e)=>{
    // alert("cliked")
    console.log(e)
  }

  render() {
    return (
      <>
        <div onClick={this.nameClick}>Name : {this.props.name}</div>
        <div >address : {this.props.address}</div>
        <div >Pincode {this.state.pincode}</div>
      </>

    )
  }

}

class App extends React.Component {

  state = {
    name: 'vishnu'
  }

  componentDidMount(){
   
    setTimeout(() => {

      this.setState({
        name: 'React'
      })

    }, 5000)
  }
  render() {
    return (
      <>
        {/* <Welcome1 name="anoop" address="chalakudy" /> */}
        <Welcome name={this.state.name} address="chalakudy" />
      </>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ReactDOM.render(
//         <h1>Another Render div </h1>,
//   document.getElementById('root1')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
