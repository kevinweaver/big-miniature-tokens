import React, { useState } from 'react'
import ReactModal from 'react-modal'
import ReactPlayer from 'react-player'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function OwnerModal({handleClose, show}) {
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background            : '#2B2B2B',
    }
  };
  //ReactModal.setAppElement('#owner-modal')

  return(
    <ReactModal
      isOpen={show}
      onRequestClose={handleClose}
      style={customStyles}
      className="modal"
    >
      <div className="form">
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            Update NFT Owner Message:
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
          <br/>
          <Button type="submit" value="Submit" onClick={handleClose}>Submit</Button>
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
      <div id="owner-modal"></div>
      <Button
        className="owner-butt"
        onClick={() => {setShowModal(true)} }
      >
        I am the owner
      </Button>
      <div>
        <div className="background">
          <div className="nft-wrapper">
            <ReactPlayer className="nft" url='./cthulhu.mp4' playing={true} loop={true} muted={true}/>
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
              <OwnerModal handleClose={() => setShowModal(false)} show={showModal} />
              <h2 className="artist-message-title">Artist Message</h2>
              <div className="artist-container">

                <p className="artist-message">
                  Thank you for supporting my work. As a digital sculptor and artist, I’ve always been fascinated by the line where the digital and physical world meet, and by creating this piece as both a physical model as well as a Non-Fungible Artwork Token through the Foundation App, this has become an artwork which lives on that line. As an extra thank-you to the owner of the NFT, you may redeem ownership of the Collector’s Edition 1/1 8” 3D-Printed resin model from my partners at Big Miniature World for free. This version includes a unique QR code with exclusive access to extra secret goods. Click the sign-in link at the bottom of the page to confirm NFT ownership and redeem your free Collectors Edition 1/1 Cthulhu Model.
                  If you bought the standard edition Cthulhu Rises model from Big Miniature world, this page is for you too. I encourage you to send your best photo of your painted Cthulhu Rises model to Big Miniature World so they can display your work here!
                </p>
                <img className="artist-progress" src={"./showcase.gif"} alt="showcase"/>
              </div>
              <h2 className="nft-message-title">NFT Owner Message</h2>
              <p className="nft-owner-message">
                I am the captain now.
              </p>
              <h2 className="qr-message-title">Community</h2>
              <p className="qr-message">
				      	If you bought the standard edition Cthulhu Rises model from Big Miniature world, this page is for you too. I encourage you to send your best photo of your painted Cthulhu Rises model to 
               <a href="mailto:bigminiatureworld@gmail.com" target="_blank">
                 Big Miniature World so they can display your work here!
               </a>
              </p>
              <div className="gallery">

              <div className="gallery-item">
		  			  	<img src="FPO1.jpeg" alt="Cthulhu-Fanart" width="600" height="400"/>
		  		  	  <div class="desc">Add a description of the image here</div>
			    		</div>

    					<div className="gallery-item">
    						<img src="FPO2.jpeg" alt="Cthulhu-Fanart" width="600" height="400"/>
    					  <div className="desc">Add a description of the image here</div>
    					</div>

    					<div className="gallery-item">
    						<img src="FPO3.jpeg" alt="Cthulhu-Fanart" width="600" height="400"/>
    					  <div className="desc">Add a description of the image here</div>
    					</div>

    					<div className="gallery-item">
    					  <a href="#">
    						<img src="FPO4.jpeg" alt="Cthulhu-Fanart" width="600" height="400"/>
    					  </a>
    					  <div className="desc">Add a description of the image here</div>
    					</div>
              </div>
            </div>
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
