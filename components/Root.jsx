
var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var Header = require('./Header.jsx')

var basscss = require('basscss/css/basscss.css')
var css = require('../css/base.css')

var Root = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {

    var initialProps = {
      __html: safeStringify(this.props)
    }

    var script = { __html : "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-89276109-1', 'auto');ga('send', 'pageview');" };

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: basscss }} />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <Header {...this.props} />
          <RouteHandler {...this.props} />
          <script
            id='initial-props'
            type='application/json'
            dangerouslySetInnerHTML={initialProps} />
          <script src='/bundle.js' />
          <script dangerouslySetInnerHTML={script} />
        </body>
      </html>
    )
  }
})

function safeStringify (obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}

module.exports = Root
