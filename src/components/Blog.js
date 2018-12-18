import React from 'react';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';


const Blog = ({ id, name, body, dispatch}) => (


  <div >
    <Link to={`/blog/${id}`}>
      <Segment 
      size='huge'
      inverted>
        {name}
        <br />
        {body}
      </Segment>
    </Link>


    <Button onClick={() => dispatch({type: 'DELETE', id})}>
    Delete Blog
    </Button>
  </div>
)

export default connect()(Blog);