import React, { Component } from 'react'
export default class Params extends Component {

    render() {
        return (
            <>
                <input type="text" name="amount" value={this.props.amount} onChange={this.props.handleChange} />
                < input type="text" name="rate" value={this.props.rate} onChange={this.props.handleChange} />
            </>)

    }




}