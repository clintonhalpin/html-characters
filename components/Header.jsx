
var React = require('react')
var Router = require('react-router')
var Link = Router.Link

var Header = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    return (
      <header className='py4 center bg-blue white'>
        <h1 className='mt0 regular' style={{ fontSize: '5vw' }}>{this.props.title}</h1>
      </header>
    )
  }
})

module.exports = Header

