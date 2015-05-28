var Album = React.createClass({
  getInitialState: function(){
    var image = '';
    image = this.props.albumData.images[1].url;
    return{ image: image, albumName: this.props.albumData.name }
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({image: nextProps.albumData.images[1].url, albumName: nextProps.albumData.name })
  },

  componentDidMount: function(){
    var self = this;
    $.get( this.props.albumData.href, function(data){
      self.setState({preview: new Audio(data.tracks.items[0].preview_url) })
    })
  },

  playMusic: function(){
    if(!this.state.isPreviewPlaying){
      this.state.preview.play();
      this.setState({isPreviewPlaying: true})
    }
    else{
      this.state.preview.pause();
      this.setState({isPreviewPlaying: false})
    }
  },

  render: function(){
    return (
      <div className="album-image">
        <img src={this.state.image} onClick={this.playMusic}/>
        <p>{this.state.albumName}</p>
      </div>
    )
  }
})