import React from 'react';
import { connect, } from 'react-redux';
import { Link } from 'react-router-dom';

class BlogForm extends React.Component {
  state = { name: "", };

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id, } = this.props;
    const { name, } = this.state;
    const blog = { name, id, };
    dispatch({ type: 'ADD_BLOG', blog, });
    dispatch({ type: "INC_ID" });
    this.setState({ name: "", });

  }


  render() {

    const { name, } = this.state;

    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <h3>Add A Blog</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            name={name}
            value={name}
            placeholder="Blog Name"
            title="Blog"
            onChange={this.handleChange} />
          {/* <Link to='/'> */}
          <button >Submit</button>
          {/* </Link> */}
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId, };
}

export default connect(mapStateToProps)(BlogForm);