import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';


class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData:{
                labels: ['nanograms/milliliters'],
                datasets:[{
                    label:'Progesterone',
                    data: [1,22,3,14,5,6,17,8,9,10,1,12,3,14,5,16,7,18,19,2,21],
                backgroundColor: [
                    'rgba(198, 170, 169)',
                ]
                }]
            }
        }
    }

    render() {
        return (
            <div className='chart'>
                <Line
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{}}
                />              
            </div>
        )
    }
}

export default Chart;