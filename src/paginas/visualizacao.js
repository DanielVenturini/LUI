import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');


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
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    }

    
    render() {
        return (
            <ReactEcharts
                option={this.option}
                style={{ height: '400px', width: '100%' }}
                className='react_for_echarts' />
        )
    }

}