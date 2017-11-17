import React from 'react';
import ReactDOM from 'react-dom';

//libraries
import $ from 'jquery';

//components
import NewPost from './feeds/newPost';
import Post from './feeds/post';


export default class Feed extends React.Component
{

    constructor(props) {
        super(props);

        this.state = {
            posts: [],

            orderby:'date',
            limit: 10,
            from_friends_only: false,
            current_datetime: null

        }
    }
    
    // ComponentDidMount is automatically called after components has been rendered
    componentDidMount() {

       this.refreshPosts();
    }

    /*
    * runs AJAX and loads posts from API
    */


    refreshPosts() {

        $.ajax ({
            method: 'get',
            url: 'api/all-posts.php',
            dataType: 'json',
            success: (data) => { // => doesnt need binding
                
                
                console.log(data);
                this.setState({
                    posts: data.posts
                });
            }
        })  

    }

    newPostWasAdded(){
        
        this.refreshPosts();


        this.props.postWasAdded(); // lifting the state up
    }

    render() {

        // prepare an array of  <Post /> components
        let posts = [];
        for(let i in this.state.posts) {
            let post_data = this.state.posts[i];
            
            posts[i] = <Post 
            key={ post_data.id }
            title = { post_data.title }
            text = { post_data.text }
            published_at = { post_data.published_at }
            likes = { post_data.likes }
            />;
        }
        

        return (
           

            <div className="Feed">

                < NewPost functionToRun={ this.newPostWasAdded.bind(this) } />

                <button onClick={ () => this.refreshPosts() }>refresh </button>

                <ul>

                    { posts } 

                </ul>               

            </div>

            


        )
    }
}