//  DOG.CEO API INTERFACE
//  OAMK assignment
//
//  Copyright Jori Hiltunen 2023

import './App.css';
import { useEffect, useState } from 'react';
import BreedSearch from './components/BreedSearch';
import DogBreeds from './components/DogBreeds';
import DogImage from './components/DogImage';
import LOCALIZATION from './constants/en_default';

function App() {

    const [searchOutput, setSearchOutput] = useState([])
    const [dogBreed, setDogBreed] = useState(['random', []])
    // Set toggles to apply refreshing of components from children components
    const [resetToggle, setResetToggle] = useState(true)
    const [reloadToggle, setReloadToggle] = useState(true)

    useEffect(() => { resetSearch() }, [resetToggle])

    const resetSearch = () => {
        setDogBreed(['random', []])
        setSearchOutput([])
    }

    return (
        <div className='container'>
            <div className='row local-search px-3'>
                <div className='col-3'>
                    <BreedSearch
                        resetToggle={resetToggle}
                        setResetToggle={(resetToggle) => setResetToggle(resetToggle)}
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
                    <h1>
                        {LOCALIZATION.APP.IMAGE_HEADING(`${dogBreed[1]} ${dogBreed[0]}`)}
                    </h1>
                </div>
                <div className='col-12'>
                    <DogImage
                        dogBreed={dogBreed}
                        reloadToggle={reloadToggle} />
                </div>
            </div>
        </div >
    );
}

export default App;