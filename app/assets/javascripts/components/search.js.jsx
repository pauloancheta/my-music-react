var Search = React.createClass({
  getInitialState: function(){
    return {albums: []}
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
      titles.push(<Album albumData={album} />);
    })

    return(
      <div>
        <h1>Search for an Artist</h1>
        <form id="search-form" onSubmit={this.submitHandler} >
            <input type="text" ref="query" className="form-control" placeholder="Type an Artist Name"/>
            <input type="submit" className="btn btn-primary" value="Search" />
        </form>

        {titles}
      </div>
    )
  }
})