import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BreedSearch from './components/BreedSearch';
import DogImage from './components/DogImage';

function App() {
    const dogAPI = 'https://dog.ceo/api/breeds/'

    const [breeds, setBreeds] = useState([])

    useEffect(() => fetchBreeds(), [])

    const fetchBreeds = () => {
        axios.get(`${dogAPI}list/all`)
            .then((response) => {
                const allBreeds = Object.keys(response.data.message)
                setBreeds(allBreeds)
            })
            .catch(error => console.error(`Error: ${error}`))
    }

    return (
        <div className='container'>
            <BreedSearch breeds={breeds} />
            <DogImage />
        </div>
    );
}

export default App;
