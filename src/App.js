import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      subr: [],
      posts: [],
    }

    this.fetchPosts = this.fetchPosts.bind(this);
    
  }

  componentDidMount() {
     
      fetch('https://www.reddit.com/subreddits/popular.json')
        .then(response => response.json())
        .then(result => {
          this.setState({
            isLoaded: true,
            subr: result.data.children,
        })
      });

  }

  fetchPosts(subr) {

    fetch('https://www.reddit.com/r/' + subr + '/hot.json')
        .then(response => response.json())
        .then(result => {
          this.setState({
            posts: result.data.children,
        })
      });
      
  }

  render() {

  const { isLoaded, subr, posts} = this.state;

    if(!isLoaded) {

      return <div> LOADING ...</div>;

    } else {
      
      return (
        <Router>

          <div className="App container">

            <div className="row col-md-12">

              <div className="col-md-3 sidebar">

                <h2>Subreddits</h2>

                <ul>

                { subr.map( item => (

                    <NavLink activeStyle={{color: '#000'}} exact to={item.data.display_name} onClick={ e => this.fetchPosts(e.target.innerText)} key={item.data.id}>
 
                      <li key={item.data.id}> { item.data.display_name } </li>

                    </NavLink>

                ))}

                </ul>

                </div>

                <div className="col-md-9 main">

                  <h2>Posts</h2>

                  <Route path="/:itemName" render={ (props) => <Subreddit posts={posts} {...props}/>} />

                </div>

            </div>

          </div> 

        </Router>

      );

    }
  }
}
const Subreddit =  ( {posts}) => {
  
    return( 
      <Router> 

          <ul>

          { posts.map(item=> (

            <div className="post" key={item.data.id}>

              <h4> { item.data.title }  </h4>

              <div className="detail"> 

              By {item.data.author}
              
              { item.data.selftext ? <div className="description">{ item.data.selftext }</div> : ''} 

              { item.data.thumbnail ? <div className="thumbnail"><img src={ item.data.thumbnail } alt={item.data.title} /> </div> : ''}

              </div>

            </div>

           ))}

          </ul>

      </Router>
    )
 }


export default App;
