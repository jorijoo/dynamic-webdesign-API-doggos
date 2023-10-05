import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BreedSearch({ resetToggle, setResetToggle, dogAPI, breeds, setBreeds, setSearchOutput }) {

    const [searchInput, setSearchInput] = useState('')

    useEffect(() => fetchBreeds(), [])
    useEffect(() => { setSearchInput('') }, [resetToggle])

    // Fetch breedlist with axios
    const fetchBreeds = () => {
        axios.get(`${dogAPI}breeds/list/all`)
            .then((res) => {
                const resBreeds = Object.keys(res.data.message)
                setBreeds(resBreeds)
            })
            .catch(error => console.error(`Breed list fetch error: ${error}`))
    }


    // Check input for real changes
    const handleInput = (e) => {
        const textInput = e.target.value.toLowerCase().replace(/[^a-z]/, '')

        setSearchInput(textInput)
        textInput !== searchInput && handleSearch(textInput)
    }

    // Match search to breed list
    const handleSearch = (textInput) => {
        let results = []

        for (const i of breeds) {
            if (textInput) {
                const row = i.toLowerCase()
                row.includes(textInput) && results.push(row)
            }
        }

        setSearchOutput(results)
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