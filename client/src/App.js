import React, { useState } from 'react'
import ReactModal from 'react-modal'
import ReactPlayer from 'react-player'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function OwnerModal({handleClose, show}) {
  return(
    <ReactModal
      isOpen={show}
      onRequestClose={handleClose}
      className="modal"
    >
      <div className="form">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            NFT Message:
            <input type="text" name="name" />
          </Form.Label>
          <input type="submit" value="Submit" onClick={handleClose}/>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </div>
    </ReactModal>
  )
}
function ArtPage() {

  //https://ipfs.io/ipfs/QmNi8aGhTgSAxVCK7sLB9qHdVAyASkhJPn5FsouVKWYVjP/metadata.json

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button
        className="owner-butt"
        onClick={() => {setShowModal(true)} }
      >
        I am the owner
      </Button>
      <div className="background">
        <div className="nft-wrapper">
          <ReactPlayer className="nft" url='./cthulhu.mp4' playing={true} loop={true} muted={true}/>}

          {//<ReactPlayer className="nft" url='https://www.youtube.com/watch?v=-O4fK477a8I' playing={true} loop={true} muted={true}/>
          }
        </div>
      </div>
      <div className="content">
        <div className="info-container">
          <div className="art-header">Cthulhu</div>
          <div className="collectors-edition">Collector's Edition 1/1 NFT</div>
          <OwnerModal handleClose={() => setShowModal(false)} show={showModal} />
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
