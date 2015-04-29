var Search = React.createClass({
  getInitialState: function(){
    var albumTitle = [],
        images = [];
    return {albumTitle: albumTitle, images: images}
  },

  submitHandler: function(e) {
    e.preventDefault();
    var self = this
    var query = React.findDOMNode(this.refs.query).value;
    $.ajax({
      url: 'https://api.spotify.com/v1/search',
      data: {
        q: query,
        type: 'album'
      },
      success: function (response) {
        var nameResult = [],
            imageResult = [];
        response.albums.items.forEach(function(album){
          nameResult.push(album.name);
          imageResult.push(album.images[0]);
          console.log(album)

        })
        self.setState({albumTitle: nameResult, images: imageResult});
      }
    });
  },

  render: function() {
    var titles= []
    this.state.albumTitle.forEach(function(title){
      titles.push(<Album title={title} />);
    })
    return(
      <div>
        <h1>Search for an Artist</h1>

        <p>Type an artist name and click on "Search". Then, click on any album from the results to play 30 seconds of its first track.</p>
        <form id="search-form" onSubmit={this.submitHandler} >
            <input type="text" ref="query" className="form-control" placeholder="Type an Artist Name"/>
            <input type="submit" className="btn btn-primary" value="Search" />
        </form>

        {titles}
      </div>
    )
  }
})