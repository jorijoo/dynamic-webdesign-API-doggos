import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function DogImage() {
    const dogAPI = 'https://dog.ceo/api/breeds/'

    const [dogImage, setDogImage] = useState('')

    useEffect(() => fetchImage(), [])

    const fetchImage = () => {
        axios.get(`${dogAPI}image/random`)
            .then((response) => {
                const dogImage = response.data.message
                setDogImage(dogImage)
            })
            .catch(error => console.error(`Error: ${error}`))
    }
    return (
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <img
                    className="local-dog-image"
                    src={dogImage}
                    alt="A random dog image loaded from the dog.ceo API"
                />
            </div>
            <div className="col"></div>
        </div>
    )
}
