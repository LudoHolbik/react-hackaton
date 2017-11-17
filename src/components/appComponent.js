import React from 'react';
import ReactDOM from 'react-dom';

import Header from './headerComponent';
import LeftMenu from './leftMenuComponent';
import Contacts from './contactsMenuComponent';
import Feed from './feedComponent';
import LogTable from './LogTable';
import TaskTable from './TaskTable';

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
                <div id="content">
                    <div id="form">
                        <LeftMenu />
                        <Feed postWasAdded = {this.postWasAdded.bind(this)}/>                            
                    </div>

                    <div id="tables">
                        <LogTable />
                        <TaskTable />
                    </div>
                </div>
            </div>
        )
    }
}