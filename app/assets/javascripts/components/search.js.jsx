var Search = React.createClass({
  getInitialState: function(){
    var albumTitle = [],
        images = [],
        albums=[];
    return {albums: albums}
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
        self.setState({albums: response.albums.items});
      }
    });
  },

  render: function() {
    var titles= []
    this.state.albums.forEach(function(album){
      console.log(album)
      titles.push(<Album title={album.name} imageUrl={album.images[1].url}/>);
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