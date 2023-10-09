import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LOCALIZATION from '../constants/en_default'
import GLOBALS from '../constants/globals'

function BreedSearch({ resetToggle, setResetToggle, setSearchOutput }) {

    const [searchInput, setSearchInput] = useState('')
    const [breeds, setBreeds] = useState([])

    useEffect(() => fetchBreeds(), [])
    useEffect(() => { setSearchInput('') }, [resetToggle])

    // Fetch breedlist with axios
    const fetchBreeds = () => {
        axios.get(`${GLOBALS.DOG_API}breeds/list/all`)
            .then((res) => {
                setBreeds(res.data.message)
            })
            .catch(error => console.error(`${LOCALIZATION.BREED_SEARCH.FETCH_ERROR} ${error}`))
    }


    // Check input for real changes
    const handleInput = (e) => {
        const textInput = e.target.value.toLowerCase().replace(/[^a-z]/, '')

        setSearchInput(textInput)
        textInput !== searchInput && handleSearch(textInput)
    }

    // Match search to breed list
    const handleSearch = (textInput) => {
        let breedsAndSubBreeds = Object.keys(breeds).map(breed => [breed.toLowerCase(), []])
        let results = []
        
        for (const [breed, subBreeds] of Object.entries(breeds)) {
            if (subBreeds.length) {
                const subBreed = subBreeds.map((subBreed) => [breed, subBreed.toLowerCase()])
                breedsAndSubBreeds = breedsAndSubBreeds.concat(subBreed)
            }
        }

        for (const breed of breedsAndSubBreeds) {
            if (textInput) {
                breed[0].includes(textInput) && results.push(breed)
            }
        }

        setSearchOutput(results.sort())
    }

    return (
        <form className='ps-2' onSubmit={(e) => e.preventDefault()}>
            <div className="row">
                <div className="col">
                    <label className='row' htmlFor='breed-search'>
                        Search:
                    </label>
                </div>
                <div className="col text-end">
                    <a type="button" onClick={() => setResetToggle(!resetToggle)}>[reset]</a>
                </div>
            </div>
            <div className="row">
                <input
                    id="breed-search"
                    className='row'
                    type='text'
                    value={searchInput}
                    onChange={handleInput}
                />
            </div>
        </form>
    )
}

export default BreedSearch;