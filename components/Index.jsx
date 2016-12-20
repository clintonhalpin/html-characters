
var React = require('react');
var codes = require('./../codes.js');

var Index = React.createClass({
  render: function () {
    return (
      <main>
      	{
      		codes.map(function(item,idx){
      			return(
      				<div>
	      				<div className="col col-4 sm-col sm-col-2 p1 mb1">
	      					<div className="card center p2" style={{ minHeight: 375 }}>
	      						<p className="h6 gray break-word">{ item.description }</p>
	      						<span dangerouslySetInnerHTML={{ __html: item.character }} style={{ fontSize: 72 }}></span>
	      						<p><code className="break-word" dangerouslySetInnerHTML={{ __html: item.name.split(' ')[0] }}></code></p>
	      						<p><code className="break-word" dangerouslySetInnerHTML={{ __html: item.hex }}></code></p>
	      						<p><code className="break-word" dangerouslySetInnerHTML={{ __html: item.dec }}></code></p>
	      					</div>
	      				</div>
	      			</div>
      			)
      		})
      	}
      </main>
    )
  }
})

module.exports = Index

