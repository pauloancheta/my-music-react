var Albums = React.createClass({
  getInitialState: function(){
    return{ albums: this.props.albums}
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({albums: nextProps.albums})
  },
  
  render: function() {
    var titles = [];
    this.state.albums.forEach(function(album, key){
      titles.push(<Album albumData={album} key={key}/>);
    })

    return(
      <div>
        {titles}
      </div>
    )
  }
})