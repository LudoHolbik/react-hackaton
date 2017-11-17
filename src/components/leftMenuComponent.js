import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

export default class LeftMenu extends React.Component{
   
    
    constructor(props) {
        super(props);


        //set initial state of this component
        this.state = {
            new_post_text: '',   //deafault value - empty string 
            new_name: '',
            duration: '',
        }
    }

    formSubmitted(event) {

        event.preventDefault();   // stop the form from actually being submitted
        $.ajax ({
            method: 'post',
            url: 'api/create-posts.php',
            data: {                 // where we get data from
                name: this.state.new_name,
                text: this.state.new_post_text,               
                duration: this.state.duration,
                

            },  
            success: (data) => { // => doesnt need binding
                

                this.setState({
                    new_post_text: '',
                    new_name: '',
                    duration: '',
                });
                
            }
        })


    };


    textChanged(event) {
        this.setState ({
            new_post_text: event.target.value,
           
        })
    }

    nameChanged(event) {
        this.setState ({
            new_name:  event.target.value,
        })
    }
    
    durationChanged(event) {
        this.setState ({
            duration: event.target.value,
        })
    }
   
    
    
    
    
    render() {
        return (

            

            <nav className="Leftmenu">

                <h2>Insert Form</h2>

                    <form action="" onSubmit={ (event) => this.formSubmitted(event) }>
                            
                            Name:
                            <input type="text" name="firstname"  value=
                            { this.state.new_name }
                            onChange={ (event) => this.nameChanged(event) }/>
                            <br>
                            </br>

                            Job Description:                            
                            <input 
                            name="desc" id="" cols="30" rows="10"  value=
                            { this.state.new_post_text}
                            onChange={ (event) => this.textChanged(event) }/>
                            <br>
                            </br>

                            Time:
                            <input type="text" name="Time" id=""  value=
                            { this.state.duration }
                            onChange={ (event) => this.durationChanged(event) }/>
                                            
                            <input type="submit" value="Submit"/>
                                                                            
                    </form>

            </nav>          

        )
    }
}