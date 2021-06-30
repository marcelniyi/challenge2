import './App.css';
import { useState } from 'react';
import Photos from './components/Photos';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-spinkit';

function App() {
  const [input, inputValue] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  function handleSubmit(){
    setLoading(true);
    if(!input){
      toast("Provide album id as number!");
      setLoading(false);
      return false;
    }

    fetch(`https://jsonplaceholder.typicode.com/albums/${input}/photos`)
      .then((response) => response.json())
      .then((json) => {
        if(json.length === 0) toast("Album not found!");
        setPhotos(json);
        setLoading(false);
      });
  }
  return (
    <div className="App">
    <ToastContainer
      position="top-right"
      autoClose={5000}
      pauseOnHover
    />
    <ToastContainer />
      <input type="number" inputMode="numeric" onChange={(e) => inputValue(e.target.value)} value={input} required/>
      <Button variant="success" onClick={() => handleSubmit()}>Get Album Photos By Id</Button>

      {  loading? <Spinner name="ball-pulse-rise" /> : photos.length !== 0 ? <Photos photos={photos} /> : <h4 style={{ marginTop: '30px' }} >Please select the album id</h4>
      }

    </div>
  );
}
export default App;
