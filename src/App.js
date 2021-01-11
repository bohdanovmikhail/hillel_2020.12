import React from 'react';

import { Timer } from './components/Timer';
import './App.scss';

export class App extends React.Component {
    state = {
        timers: [],
    };

    render() {
        return (
            <div>
                <button onClick={() => this.addTimer()}>Add Timer</button>
                <button onClick={() => this.removeAll()}>Remove All</button>

                <div className="timers">
                    {this.state.timers.map(timer => (
                        <div className="timer" key={timer}>
                            <Timer />
                            <button onClick={() => this.removeTimer(timer)}>X</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    addTimer() {
        this.setState({
            timers: [
                ...this.state.timers,
                Math.random(),
            ],
        });
    }

    removeTimer(removeTimer) {
        const restTimers = this.state.timers
            .filter((timer) => timer !== removeTimer);

        this.setState({
            timers: restTimers,
        });
    }

    removeAll() {
        this.setState({
            timers: [],
        });
    }
}

export class App2 extends React.Component {
    state = {
        field1: '',
        field2: '',
    };

    constructor(props) {
        super(props);

        // this.changeInput = this.changeInput.bind(this);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.field1}
                    onChange={this.changeInput('field1')}
                />
                <input
                    type="text"
                    value={this.state.field2}
                    onChange={this.changeInput('field2')}
                />
                <input
                    type="text"
                    value={this.state.field3}
                    onChange={this.changeInput('field3')}
                />
                <input
                    type="text"
                    value={this.state.field4}
                    onChange={this.changeInput('field4')}
                />
                <button onClick={() => this.showValue()}>Show value</button>
            </div>

        );
    }

    changeInput(name) {
        return event => {
            this.setState({
                [name]: event.target.value,
            });
        };
    }

    showValue() {
        alert(this.state.field4);
    }
}
