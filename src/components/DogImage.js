//  FETCH AND DISPLAY DOG IMAGE
//
//  Copyright Jori Hiltunen 2023
//

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LOCALIZATION from '../constants/en_default'
import GLOBALS from '../constants/globals'
import errorImage from '../images/error.png'

/**
 * Fetch dog image and display it
 * @param {array} dogBreed          Dog breed and sub-breed
 * @param {boolean} reloadToggle    Reload from another child component
 * @returns {React.Component}       Dog image
 */
function DogImage({ dogBreed, reloadToggle }) {

    const [dogImage, setDogImage] = useState('')
    const [imageVisibility, setImageVisibility] = useState(true)

    useEffect(() => fetchImage(), [reloadToggle])

    // Change path if sub-breed is defined
    const subBreedCheck = () => {
        const result = (dogBreed[1].length)
            ? `/${dogBreed[1]}`
            : ''
        return result
    }

    // Set path for query
    const dogQuery = (dogBreed[0] != 'random')
        ? `${GLOBALS.DOG_API}breed/${dogBreed[0]}${subBreedCheck()}/images/random`
        : `${GLOBALS.DOG_API}breeds/image/random`

    const fetchImage = () => {
        // Toggle image visibility to cause a new CSS-transition
        setImageVisibility(false)
        axios.get(dogQuery)
            .then((res) => {
                const resDogImage = res.data.message
                setImageVisibility(true)
                setDogImage(resDogImage)
            })
            .catch(() => {
                setImageVisibility(true)
                setDogImage(errorImage)
            })
    }

    return (
        <div className="col text-center">
            <a onClick={fetchImage}>
                <img
                    className={`local-dog-image ${(imageVisibility) ? 'visible' : 'hidden'}`}
                    src={dogImage}
                    onError={() => setDogImage(errorImage)}
                    alt={LOCALIZATION.DOG_IMAGE.ALT_TEXT}
                />
            </a>
        </div>
    )
}

export default DogImage;