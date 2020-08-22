import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';


class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
                result: [],
            chartData:{
                labels: ['nanograms/milliliters'],
                datasets:[{
                    label:'Progesterone',
                    data: [],
                backgroundColor: [
                    'rgba(198, 170, 169)',
                ]
                }]
            }
        }
    }

    componentDidMount = () => {
        axios.get('/api/results')
        .then(res => {
            res.data.map((result, index) => {
            this.setState({
                result: [...this.state.result, result],
                chartData: {
                    labels: [...this.state.chartData.labels, result.data],
                    datasets: [ {
                        label: 'test',
                        data: [...this.state.chartData.datasets[0].data, parseInt(result.sum)],
                        backgroundColor: [...this.state.chartData.datasets[0].backgroundColor]
                    } ]

                }
            })
            })
        })
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render() {
        return (
            <div className='chart'>
                    <Line
                        data={this.state.chartData}
                        width={100}
                        height={50}
                        options={{
                            title: {
                                display: true,
                                text: 'Progesterone Results',
                                fontSize: 25
                            },
                            legend: {
                                display: true,
                                position: 'right',
                            },
                            elements: {line:{tension:0}},
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }}
                    />            
            </div>
        )
    }
}

export default Chart;


