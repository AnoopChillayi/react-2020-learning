import React, { Component } from 'react'
export default class FormsDemo extends Component {
//controlled uncontrolled
input=React.createRef();
file=React.createRef();

handleSubmit=(e)=>{
    e.preventDefault();
console.log(this.input.current.value)
console.log(this.file.current.files)
}
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" ref={this.input} />
                    <input type="file" name="file" ref={this.file} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }




}