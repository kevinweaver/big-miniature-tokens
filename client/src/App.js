import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios'

import './App.css';

class ArtPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: []
    }
  }

  //https://ipfs.io/ipfs/QmNi8aGhTgSAxVCK7sLB9qHdVAyASkhJPn5FsouVKWYVjP/metadata.json

  getToken() {
    axios.get('/api/v1/tokens?artist_name=brogli')
      .then(response => {
        this.setState({token: response.data})
        console.log("axios", response.data.token)
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
  }

  //<ReactPlayer className="nft" url='https://www.youtube.com/watch?v=-O4fK477a8I' playing={true} loop={true} muted={true}/>
  render() {
    return (
      <div>
        <div className="background">
          <div className="nft-wrapper">
            <ReactPlayer className="nft" url='./cthulhu.mp4' playing={true} loop={true} muted={true}/>}
            
          </div>
        </div>
        <div className="content">
          <div className="content-container">
            <div className="info-container">
              <h1 className="art-header">
                Cthulhu
                </h1>
              <h2 className="collectors-edition">
                Collector's Edition 1/1 NFT
              </h2>
              <img className="wip" src={"./showcase.gif"} alt="showcase"/>
              <h2 className="artist-message-title">Artist Message</h2>
              <div className="artist-message">
                Thank you for supporting my work. As a digital sculptor and artist, I’ve always been fascinated by the line where the digital and physical world meet, and by creating this piece as both a physical model as well as a Non-Fungible Artwork Token through the Foundation App, this has become an artwork which lives on that line. As an extra thank-you to the owner of the NFT, you may redeem ownership of the Collector’s Edition 1/1 8” 3D-Printed resin model from my partners at Big Miniature World for free. This version includes a unique QR code with exclusive access to extra secret goods. Click the sign-in link at the bottom of the page to confirm NFT ownership and redeem your free Collectors Edition 1/1 Cthulhu Model.
                If you bought the standard edition Cthulhu Rises model from Big Miniature world, this page is for you too. I encourage you to send your best photo of your painted Cthulhu Rises model to Big Miniature World so they can display your work here!
              </div>
              <h2 className="nft-message-title">NFT Owner Message</h2>
              <p className="nft-owner-message">
                I am the captain now.
              </p>
              <h2 className="qr-message-title"> Community</h2>
              <div className="qr-message">
                If you bought the standard edition Cthulhu Rises model from Big Miniature world, this page is for you too. I encourage you to send your best photo of your painted Cthulhu Rises model to Big Miniature World so they can display your work here!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const fetchArtistInfo = function () {
  fetch('/api/v1/tokens?artist_name=brogli')
    .then(res => res.json())
    .then((response) => { console.log("Test datas response", response); })
    .catch((error) => { console.log("Error while fetching test datas", error); })
}

function App() {
  return (
    <div>
      <ArtPage
        artistInfo={fetchArtistInfo}
      >
      </ArtPage>
    </div>
  );
}

export default App;
