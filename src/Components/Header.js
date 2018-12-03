import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import '../App.css'

class Header extends Component {
  render() {
    return (
        <div>
          <PageHeader>
              {this.props.title}
          </PageHeader>
        </div>
    );
  }
}

export default Header;