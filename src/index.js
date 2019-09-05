import React from "react";
import ReactDOM from "react-dom";

import { Header, TileView, Photo, Frame } from "./components";

import "./styles.css";

class App extends React.Component {
  state = {
    images: [],
    currentPhotoId: null
  };
  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then(response => response.json())
      .then(data => {
        this.setState({
          images: data.slice(0, 30)
        });
      });
  }
  render() {
    return (
      <div>
        <Header>
          <h1>PhotoGrid</h1>
        </Header>
        <TileView>
          {this.state.images.map(image => {
            const isActive = this.state.currentPhotoId === image.id;
            return (
              <Photo
                key={image.id}
                src={`https://picsum.photos/1000/1000?image=${image.id}`}
                alt="Pics"
                isActive={isActive}
                onClick={() =>
                  this.setState({ currentPhotoId: isActive ? null : image.id })
                }
              />
            );
          })}
        </TileView>
        {this.state.currentPhotoId !== null && <Frame />}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
