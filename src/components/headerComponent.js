import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component
{
constructor(props){
    super(props);

    this.state = {
        unread_posts: 0
    }
}

    raiseNrOfPosts() {
        this.setState({  // changes the state
            unread_posts: this.state.unread_posts + 1 //by assigning a value bigger by 1
        });
    }

    render() {
        return (

 <div className="timer">       

            <header>
            Unread posts: <span className="unread">{ this.state.unread_posts }</span>
            </header>




<form className="container">
    <input type="radio" id="init" name="control" defaultChecked="checked"/>
    <input type="radio" id="stop" name="control"/>
    <input type="radio" id="start" name="control"/>
    <input type="reset" id="reset" name="control"/>
    <input type="checkbox" id="lap_1" name="lap"/>
    <input type="checkbox" id="lap_2" name="lap"/>
    <input type="checkbox" id="lap_3" name="lap"/>
    <input type="checkbox" id="lap_4" name="lap"/>

                    <time><i></i><b></b><i></i><b></b><i></i></time>

<div className="controls">
        <label htmlFor="stop">Stop</label>
        <label htmlFor="start">Start</label>
        <label htmlFor="reset">Reset</label>
</div>

  </form>
            </div>

        )
    }
}