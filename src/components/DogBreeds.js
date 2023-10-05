function DogBreeds({ breeds, setDogBreed, reloadToggle, setReloadToggle }) {

    const handleClick = (selectedBreed) => {
        setDogBreed(selectedBreed)
        setReloadToggle(!reloadToggle)
    }

    const breedsOut = () => {
        if (breeds.length > 0) {
            return (
                <>
                    {breeds.map((breed, index) => {
                        return (
                            <li key={index}>
                                <a role="button" onClick={() => handleClick(breed)}>
                                    [{breed}]
                                </a>
                                &nbsp;
                            </li>
                        )
                    })}
                </>
            )
        } else {
            return (
                <li>[no results]</li>
            )
        }
    }

    return (
        <ul id='local-search-results'>
            {breedsOut()}
        </ul>
    )
}

export default DogBreeds;