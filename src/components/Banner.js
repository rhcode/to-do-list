import React from 'react'

class Banner extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="http://www.google.com">
            <span className="fa fa-grav">&nbsp;</span>
            <span className="fa fa-grav">&nbsp;</span>
            2018 Hackathon
          </a>
        </div>
      </nav>
    );
  }
}

export default Banner
