var MusicIndex = React.createClass({
  getInitialState: function(){
    return {albums: [], savedAlbums: this.props.albums}
  },

  submitHandler: function(e) {
    e.preventDefault();
    var self = this;
    var query = React.findDOMNode(this.refs.query).value;
    if(query.length > 0){
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
    }
    else{
      this.setState({albums: []})
    }
  },

  viewCollection: function(){
    console.log(this.state.savedAlbums)
  },

  render: function() {
    var albums = <Albums albums={this.state.albums} />;
    var landingPage = <LandingPage />
    return (
      <div>
        <header>
          <h1 className="page-title">My Music Library</h1>
          <form id="search-form" onSubmit={this.submitHandler} >
            <input type="text" ref="query" placeholder="Search Artists"/>
          </form>
          <a onClick={this.viewCollection}> View Collection </a>
        </header>
        { this.state.albums.length < 1 ? landingPage : albums }
      </div>
      
    );
  }
});
