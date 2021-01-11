import React from 'react';
import { ParsedTime } from '../ParsedTime';


export class Timer extends React.Component {
    state = {
        value: 0,
    };

    constructor(props) {
        super(props);

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentWillUnmount() {
        this.stop();
    }

    render() {
        return (
            <div>
                <ParsedTime time={this.state.value} />
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }

    start() {
        this.stop();

        this.intervalId = setInterval(() => {
            this.setState({
                value: this.state.value + 1,
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    reset() {
        this.stop();

        this.setState({
            value: 0,
        });
    }
}
