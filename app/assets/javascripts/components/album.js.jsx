var Album = React.createClass({
  getInitialState: function(){
    return{ image: this.props.albumData.images[1].url, albumName: this.props.albumData.name }
  },

  componentDidMount: function(){
    var self = this;
    $.get( this.props.albumData.href, function(data){
      self.setState({preview: new Audio(data.tracks.items[0].preview_url) })
    })
  },

  playMusic: function(){
    console.log(this.state.preview)

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
      <div className="album-image" onClick={this.playMusic}>
        <img src={this.state.image} />
        <p>{this.state.albumName}</p>
        <p>{this.props.albumData.tracks}</p>
      </div>
    )
  }
})