import {Component} from 'inferno'

import {Sparklines, 
    SparklinesBars,
    SparklinesLine,
    SparklinesCurve,
    SparklinesNormalBand,
    SparklinesReferenceLine,
    SparklinesSpots
} from '../src/Sparklines'

import { sampleData, sampleData100 } from '../__tests__/helpers/sampleData';

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [Math.random(), Math.random()]
        }
    }

    componentDidMount(){
        setInterval(()=>{
            const tmp = this.state.data.concat(Math.random())
            if (tmp.length>20)
                tmp.shift()
            this.setState({data: tmp})
        }, 200)
    }

    render(){
        return (
            <div>
            
                <div style={{width: '30%'}}>
                    <Sparklines data={this.state.data}>
                        <SparklinesLine style={{ fill: "none" }}/>
                        <SparklinesNormalBand />
                        <SparklinesSpots />
                        
                        <SparklinesReferenceLine type="mean"/>
                    </Sparklines>
                </div>

                <div style={{width: '30%'}}>
                    <Sparklines data={this.state.data}>
                        {/* <SparklinesText text="AA" x="50" y="20"/> */}
                        <SparklinesBars />
                    </Sparklines>
                </div>

                <div style={{width: '30%'}}>
                    <Sparklines data={this.state.data}>
                        <SparklinesCurve />
                    </Sparklines>
                </div>
            </div>
        )    
    }
    
}

export default App