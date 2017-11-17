import React from 'react';
import ReactDOM from 'react-dom';


export default class LeftMenu extends React.Component{
    render() {
        return (

            

            <nav className="Leftmenu">

                <h2>Insert Form</h2>

                    <form action="">
                
            
                            First name:
                            <input type="text" name="firstname"/>
                            <br>
                            </br>
                            Last name:
                            <input type="text" name="lastname"/>
                            <br>
                            </br>


                            <textarea name="" id="" cols="30" rows="10">Insert Job Description Here</textarea>
                            <br>
                            </br>

                            <button>Start</button>
                            <button>Stop</button>
                        
                    </form>

            </nav>          

        )
    }
}