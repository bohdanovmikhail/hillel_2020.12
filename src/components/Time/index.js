import React from 'react';


export class Time extends React.Component {
    state = {
        time: new Date(),
    };

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                time: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}
