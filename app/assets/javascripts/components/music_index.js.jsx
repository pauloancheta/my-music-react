var MusicIndex = React.createClass({
  getInitialState: function(){
    return {albums: []}
  },

  submitHandler: function(e) {
    e.preventDefault();
    var self = this;
    var query = React.findDOMNode(this.refs.query).value;
    $.ajax({
      url: 'https://api.spotify.com/v1/search',
      data: {
        q: query,
        type: 'album'
      },
      success: function (response) {
        console.log(response.albums.items)
        self.setState({albums: response.albums.items});
      }
    });
  },

  render: function() {
    return (
      <div>
        <h1 className="page-title">My Music Library</h1>
        <form id="search-form" onSubmit={this.submitHandler} >
            <input type="text" ref="query" placeholder="Type an Artist Name"/>
            <input type="submit" value="Search" />
        </form>
        <Albums albums={this.state.albums} />
      </div>
      
    );
  }
});
