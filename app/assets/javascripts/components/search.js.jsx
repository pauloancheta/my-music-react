var Search = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Search for an Artist</h1>
          <p>Type an artist name and click on "Search". Then, click on any album from the results to play 30 seconds of its first track.</p>
          <form id="search-form">
              <input type="text" id="query" className="form-control" placeholder="Type an Artist Name"/>
              <input type="submit" id="search" className="btn btn-primary" value="Search" />
          </form>
          <div id="results"></div>
      </div>
    )
  }
})