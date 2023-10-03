import React, { useEffect, useState } from 'react'
import DogBreeds from './DogBreeds'

export default function BreedSearch({ breeds }) {
    const initSearchResults = [
        'brabancon',
        'airedale',
        'corgi',
        'boxer',
        'poodle'
    ]
    const searchSuccessOutput = [
        [
            `Search found no matches with your keywords.`,
            'Showing 5 examples:'
        ],
        [
            'Search found matches with your keywords.',
            'Showing 5 top results:'
        ]
    ]

    const [displayBreeds, setDisplayBreeds] = useState(initSearchResults)
    const [searchKeyword, setSearchKeyword] = useState('')
    const [searchSuccess, setSearchSuccess] = useState(searchSuccessOutput[0])
    console.log(searchSuccess[1])

    const handleSearch = (e) => {
        let results = []
        const textInput = e.target.value.toLowerCase().replace(/[^a-z]/, '')
        setSearchKeyword(textInput)

        for (const i of [...breeds]) {
            if (textInput) {
                const row = i.toLowerCase()
                if (row.includes(textInput)) {
                    results.push(row)
                    setSearchSuccess(searchSuccessOutput[1])
                }
            }
        }

        if (!results[0]) {
            results = (searchSuccess === searchSuccessOutput[0])
                ? displayBreeds
                : [...breeds].sort(() => 0.5 - Math.random())
            setSearchSuccess(searchSuccessOutput[0])
        }

        results = results.slice(0, 5)
        setDisplayBreeds(results)
    }

    return (
        <div>
            <div className='row local-search p-2' style={{ backgroundColor: "lightgreen" }}>
                <div>
                    <form className='ps-2' onSubmit={(e) => e.preventDefault}>
                        <label className='row' htmlFor='breed-search'>
                            Search for dog breeds
                        </label>
                        <input
                            name="breed-search"
                            className='row'
                            type='text'
                            value={searchKeyword}
                            onChange={handleSearch}
                        />
                    </form>
                </div>
            </div>
            <div className='row local-search-results p-2' style={{ backgroundColor: "lightblue" }}>
                <div>
                    <h1>{searchSuccess[0]}</h1>
                    <div>{searchSuccess[1]}</div>
                </div>
                <div>
                    <DogBreeds breeds={displayBreeds} isLink={true} />
                </div>
            </div>
        </div >
    )
}
