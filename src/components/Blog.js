import React from 'react';
import { connect } from 'react-redux';

const Blog = ({ id, name }) => (
  <>
  <li>

  {name}
  </li>
  </>
)

export default connect()(Blog);