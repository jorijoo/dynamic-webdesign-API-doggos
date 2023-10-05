import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DogImage({ resetToggle, dogAPI, dogBreed, reloadToggle }) {
    const dogQuery = (dogBreed != 'random') 
    ? `${dogAPI}breed/${dogBreed}/images/random`
    : `${dogAPI}breeds/image/random`

    const [dogImage, setDogImage] = useState('')

    useEffect(() => fetchImage(), [resetToggle])
    useEffect(() => fetchImage(), [reloadToggle])

    const fetchImage = () => {
        axios.get(dogQuery)
            .then((res) => {
                const resDogImage = res.data.message
                setDogImage(resDogImage)
            })
            .catch(error => console.error(`Dog image fetch error: ${error}`))
    }

    return (
        <div className="col text-center">
            <a onClick={fetchImage}>
                <img
                    className="local-dog-image"
                    src={dogImage}
                    alt="A random dog image loaded from the dog.ceo API"
                />
            </a>
        </div>
    )
}

export default DogImage;