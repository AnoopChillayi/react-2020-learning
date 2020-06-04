import React, { Component } from 'react'
import Params from './Params'
export default class Calculator extends Component {

    state = {
        amount: '',
        rate: '',
    }

    handleChange = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Params rate={this.state.rate} amount={this.state.amount} handleChange={this.handleChange} />


        )
    }




}