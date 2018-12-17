import React from 'react';
import Blog from './Blog';
import { connect, } from 'react-redux'


const Blogs = (blogs) => ((
  <>
    <h1
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}>
      Blogs Home
  </h1>
    <ul>
    {
      blogs.map( blog => (
        <Blog key={blog.id} {...blog} />
      ))
    }
    </ul>
  </>

))

const mapStateToProps = (state) => {
  return { blogs: state.blogs, };
}

export default connect(mapStateToProps)(Blogs);