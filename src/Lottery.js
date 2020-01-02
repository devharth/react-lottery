import React, { Component } from 'react';
import LottoBall from './LottoBall';
import './Lottery.css';

export default class Lottery extends Component {

    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }

    state = {
        nums: Array.from({ length: this.props.numBalls })
    }

    generate = () => {
        this.setState((st) => ({
            nums: st.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
        }));
    }

    handleClick = () => {
        this.generate();
    }

    render() {
        return (
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                {this.state.nums.map(n => (
                    <LottoBall num={n} />
                ))}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        )
    }
}
