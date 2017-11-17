import React from 'react';
import ReactDOM from 'react-dom';

import Header from './headerComponent';
import LeftMenu from './leftMenuComponent';
import Contacts from './contactsMenuComponent';
import Feed from './feedComponent';
import LogTable from './LogTable';

export default class App extends React.Component
{

    postWasAdded() {

        console.log('The App now knows that a post was added');
        
        this.header.raiseNrOfPosts();
    }


    render() {
        return (

            <div id="page">

            <Header ref={ (el) => { this.header = el; } } />

            <div>

                <LeftMenu />

                <Feed postWasAdded = {this.postWasAdded.bind(this)}/>


                <Contacts />                
                                    
            </div>

            <LogTable />
        

    </div>


    )

}

}