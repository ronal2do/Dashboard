import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class Tasks extends React.Component {
  render() {
    return (
      <div className="card">
       <Header />
       <Content />
       <Footer />
      </div>
    );
  }
}

export default (Tasks);