var Albums = React.createClass({
  getInitialState: function(){
    return{ albums: this.props.albums}
  },

  componentWillReceiveProps: function(nextProps){
    console.log(nextProps)
    this.setState({albums: nextProps.albums})
  },
  
  render: function() {
    var titles = [];
    this.state.albums.forEach(function(album){
      titles.push(<Album albumData={album} />);
    })

    return(
      <div>
        {titles}
      </div>
    )
  }
})