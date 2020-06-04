import React, { Component } from 'react'
export default class ListDemo extends Component {

    state = {
        posts: [
            { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
            { id: 2, title: 'Installation', content: 'You can install React from npm.' }
        ]
    }


    renderList = () => {
        const postList = this.state.posts.map((item, index) => {
            return <li key={item.id} >{item.title}</li>

        })
        return <ul>{postList}</ul>
    }

    render() {
        return (
            // <ul>{postList}</ul>
            this.renderList()
        )
    }




}