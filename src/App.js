import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DogBreeds from './components/DogBreeds';
import BreedSearch from './components/BreedSearch';

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
        <div className="container-fluid row">
            <BreedSearch breeds={breeds} />
            <DogBreeds breeds={breeds} />
        </div>
    );
}

export default App;
