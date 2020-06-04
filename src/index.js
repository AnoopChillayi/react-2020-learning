import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import ANOOP, { ABCD as JACK, XYZ } from './ExportSample'
import ListDemo from './ListDemo';
import FormsDemo from './FormsDemo';
import Calculator from './assignment1/calculator';

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

  nameClick = (e) => {
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


function LoanDetails(props) {


  return (

    <table>
      <tr>
        <td>
          rate
          </td>
        <td>
          {props.rate}
        </td>
      </tr>
    </table>
  )
}

class App extends React.Component {

  state = {
    name: 'vishnu',
    jack: 'jack',
    address: '',
    fullName: null
  }



  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      jack: event.target.value
    })

  }

  handleChangeAddress = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }


  calculate = () => {
    // console.log(this.state.jack);
    // console.log(this.state.address)

    this.setState({
      fullName: this.state.jack + " " + this.state.address
    })

  }
  componentDidMount() {

    setTimeout(() => {

      this.setState({
        name: 'React'
      })

    }, 5000)
  }
  render() {
    console.log(this.state.fullName)

    // var a:{
    //     const:10
    // }

    // a.b
    // a["b"]
    // a["const"]

    // return null;
    // return [1,2,3];
    // return 1;
    // return "abcded"
    return (
      <>
        {/* <Welcome1 name="anoop" address="chalakudy" /> */}
        <Welcome name={this.state.name} address="chalakudy" />
        name
        <input value={this.state.jack} name="jack" onChange={this.handleChangeAddress} />
        address
        <input value={this.state.address} name="address" onChange={this.handleChangeAddress} />
        <button onClick={this.calculate}>Calculate</button>
        {
          !this.state.fullName ?
            null :
            <>
              <h1>Full Name</h1>
              <h2>{this.state.fullName}</h2>
            </>

        }


        <LoanDetails rate="10%" />



      </>
    )
  }
}


ReactDOM.render(
  // <App />,
  // <ListDemo/>,
  // <FormsDemo />,
  <Calculator />,
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
