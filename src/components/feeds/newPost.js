import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';



export default class NewPost extends React.Component{

    constructor(props) {
        super(props);


        //set initial state of this component
        this.state = {
            new_post_text: ''   //deafault value - empty string 
        }
    }

    formSubmitted(event) {

        event.preventDefault();   // stop the form from actually being submitted
        $.ajax ({
            method: 'post',
            url: 'api/create-posts.php',
            data: {                 // where we get data from
                text: this.state.new_post_text
            },  
            success: (data) => { // => doesnt need binding
                this.props.functionToRun();
                this.setState({
                    new_post_text: ''
                });
                
            }
        })


    }


    textChanged(event) {
        this.setState ({
            new_post_text: event.target.value
        })
    }

    

    render() {
        return (


                <div className="new_post">

                    <form action="" onSubmit={ (event) => this.formSubmitted(event) }>

                        <textarea name="text" id="" cols="30" rows="10" placeholder="What are you thinking about?" value=
                        { this.state.new_post_text }
                        onChange={ (event) => this.textChanged(event) }
                        >
                        </textarea>

                        <input type="submit" value="add"/>

                    </form>

                </div>

        )
    }
}