import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

// Now, the last thing we need to do is make sure that we have some default search for this thing as opposed to showing the loading text at the top. So to handle that, all we do is define a componentDidMount Life-cycle method inside of our component, the componentDidMount Method will go ahead and attempt to make some default search when this app component first is rendered to the screen. So I'm going to define. ComponentDidMount inside of here. So then any time we call this, I'm going to manually call on term Simit, because that is the function currently that is handling all the logic around doing a search and updating the state of our component. So I can call this dot on term simit and I can put some default search term inside of here. Whatever we put inside of here will be always show to the user when the application first floats. So the filling in with the same term or fitting in with the same term that I've been using all throughout this application, I'm going to use a default search term of buildings. So like I said, that means that when the application first loads, we're going to do a search for buildings and show the results on the screen. So now if I look back over, I can refresh the page.

componentDidMount() {
  this.onTermSubmit('');
}


  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,

      // So this essentially says when we do a search, go ahead and take the first video in the ResultSet and just use it as our default video. So that will ensure that as soon as the user does a search boom, they're going to see something up here on the screen. Now, if I look at buildings, we see a video automatically appear. And likewise, if I do a search for, say, children stories. I see the new video appear here as well to indicate, hey, we recognize that you have search for some new video.
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
