import React from 'react'

export default function DogBreeds({ breeds }) {

    const breedsOut = (breeds) => {
        if (breeds.length > 0) {
            return (
                <>
                    <ul>
                        {breeds.map((breed, index) => {
                            // console.log(breed)
                            return (
                                <li key={index}>{breed}</li>
                            )
                        })}
                    </ul>
                </>
            )
        } else {
            return (
                <li>Breed list is empty</li>
            )
        }
    }

    return (
        <>
            {breedsOut(breeds)}
        </>
    )
}