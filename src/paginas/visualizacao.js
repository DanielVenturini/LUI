import React, { Component } from 'react';

export default class Visualizacao extends Component {

    constructor() {
        super()
        this.state = {stars:[], forks:[]}
    }

    componentDidMount() {

        fetch('https://raw.githubusercontent.com/DanielVenturini/LUI/master/json17-10-2018/Star1000.json')
        .then(response => response.json())
        .then(response => {
            this.setState({stars : response})
            console.log(response)
        })

        fetch('https://raw.githubusercontent.com/DanielVenturini/LUI/master/json17-10-2018/Forks1000.json')
        .then(response => response.json())
        .then(response => {
            this.setState({forks : response})
            console.log(response)
        })
    }

    render() {
        return (
            <h1>F12->console to see response</h1>
        )
    }

}