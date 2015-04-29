var Album = React.createClass({
  render: function(){
    return (
      <div>
        <img src={this.props.imageUrl} />
      </div>
    )
  }
})