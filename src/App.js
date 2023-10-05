import './App.css';
import { useEffect, useState } from 'react';
import BreedSearch from './components/BreedSearch';
import DogBreeds from './components/DogBreeds';
import DogImage from './components/DogImage';

function App() {
    const dogAPI = 'https://dog.ceo/api/'

    const [breeds, setBreeds] = useState([])
    const [searchOutput, setSearchOutput] = useState([])
    const [dogBreed, setDogBreed] = useState('random')
    const [resetToggle, setResetToggle] = useState(true)
    const [reloadToggle, setReloadToggle] = useState(true)
    
    useEffect(() => {resetSearch()}, [resetToggle])
   
    const resetSearch = () => {
        setDogBreed('random')
        setSearchOutput([])
    }

    return (
        <div className='container'>
            <div className='row local-search px-3'>
                <div className='col-3'>
                    <BreedSearch
                        resetToggle={resetToggle}
                        setResetToggle={(resetToggle) => setResetToggle(resetToggle)}
                        dogAPI={dogAPI}
                        breeds={breeds}
                        setBreeds={(breeds) => setBreeds(breeds)}
                        setSearchOutput={(searchOutput) => setSearchOutput(searchOutput)} />
                </div>
                <div className='col'>
                    <DogBreeds
                        breeds={searchOutput}
                        setDogBreed={(dogBreed) => setDogBreed(dogBreed)}
                        reloadToggle={reloadToggle}
                        setReloadToggle={(reloadToggle) => setReloadToggle(reloadToggle)} />
                </div>
            </div>
            <div className='row local-search-results'>
                <div className='col-12'>
                    <h1 /* className='text-center' */>
                        Click the image for a new picture of a {dogBreed} dog...
                    </h1>
                </div>
                <div className='col-12'>
                    <DogImage
                        resetToggle={resetToggle}
                        dogAPI={dogAPI}
                        dogBreed={dogBreed}
                        reloadToggle={reloadToggle} />
                </div>
            </div>
        </div >
    );
}

export default App;
