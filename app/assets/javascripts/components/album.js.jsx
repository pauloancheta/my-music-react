var Album = React.createClass({
  getInitialState: function(){
    var image = '';
    image = this.props.albumData.images[0].url;
    return{ image: image, albumName: this.props.albumData.name }
  },

  componentWillReceiveProps: function(nextProps){
    var self = this;
    this.setState({image: nextProps.albumData.images[0].url, albumName: nextProps.albumData.name })
    $.get( this.props.albumData.href, function(data){
      self.setState({preview: new Audio(data.tracks.items[0].preview_url) })
    })
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



      var self = this;
      setTimeout(function(){
        self.setState({isPreviewPlaying: false})
      }, 30000)
    }
    else{
      this.state.preview.pause();
      this.setState({isPreviewPlaying: false})
    }
  },

  addToLibrary: function(e){
    e.stopPropagation();
    e.preventDefault();
    var name    = this.state.albumName + '',
        image   = this.state.image + '',
        preview = this.state.preview + '';

    $.post('/albums', {
      name: name, 
      image_url: image, 
      preview_url: preview
    });
  },

  render: function(){
    return (
      <div className="album-image">
        <img src={this.state.image} onClick={this.playMusic}/>
        <div className="album-footer">
          <p className="album-name">{this.state.albumName}</p>
          <a className="album-add-link" onClick={this.addToLibrary}>Add to Library</a>
        </div>
      </div>
    )
  }
})