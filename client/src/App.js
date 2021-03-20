import './App.css';

//const fetchTestDatas = function () {
//  fetch('/api/v1/tests')
//    .then(res => res.json())
//    .then((response) => { console.log("Test datas response", response); })
//    .catch((error) => { console.log("Error while fetching test datas", error); })
//}

const fetchArtistInfo = function () {
  fetch('/api/v1/tokens?artist_name=brogli')
    .then(res => res.json())
    .then((response) => { console.log("Test datas response", response); })
    .catch((error) => { console.log("Error while fetching test datas", error); })
}

function App() {
  return (
    <div className="App">
      <button onClick={fetchArtistInfo}>
        Fetch Test Datas
      </button>
    </div>
  );
}

export default App;
