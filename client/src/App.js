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

  render() {
    return (
      <div>
        <div className="background">
          <div className="nft-wrapper">
            <ReactPlayer className="nft" url='./cthulhu.mp4' playing={true} loop={true} />
            {//<ReactPlayer className="nft" url='https://www.youtube.com/watch?v=-O4fK477a8I' playing={true} loop={true} />
            }
          </div>
        </div>
        <div className="content">
          <div className="info-container">
            <div className="art-header">Cthulhu</div>
            <div className="collectors-edition">Collector's Edition 1/1 NFT</div>
            <div className="wip">

            </div>
            <div className="artist-message-title">Artist Message</div>
            <div className="artist-message">
              Thank you for supporting my work. As a digital sculptor and artist, I’ve always been fascinated by the line where the digital and physical world meet, and by creating this piece as both a physical model as well as a Non-Fungible Artwork Token through the Foundation App, this has become an artwork which lives on that line. As an extra thank-you to the owner of the NFT, you may redeem ownership of the Collector’s Edition 1/1 8” 3D-Printed resin model from my partners at Big Miniature World for free. This version includes a unique QR code with exclusive access to extra secret goods. Click the sign-in link at the bottom of the page to confirm NFT ownership and redeem your free Collectors Edition 1/1 Cthulhu Model.
              If you bought the standard edition Cthulhu Rises model from Big Miniature world, this page is for you too. I encourage you to send your best photo of your painted Cthulhu Rises model to Big Miniature World so they can display your work here!
            </div>
            <div className="nft-message-title">NFT Owner Message</div>
            <div className="nft-owner-message">
              Thank you for supporting my work. As a digital sculptor and artist, I’ve always been fascinated by the line where the digital and physical world meet, and by creating this piece as both a physical model as well as a Non-Fungible Artwork Token through the Foundation App, this has become an artwork which lives on that line. As an extra thank-you to the owner of the NFT, you may redeem ownership of the Collector’s Edition 1/1 8” 3D-Printed resin model from my partners at Big Miniature World for free. This version includes a unique QR code with exclusive access to extra secret goods. Click the sign-in link at the bottom of the page to confirm NFT ownership and redeem your free Collectors Edition 1/1 Cthulhu Model.
            </div>
            <div className="qr-message-title"> Community</div>
            <div className="qr-message">
              If you bought the standard edition Cthulhu Rises model from Big Miniature world, this page is for you too. I encourage you to send your best photo of your painted Cthulhu Rises model to Big Miniature World so they can display your work here!
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
