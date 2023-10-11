//  DOG BREED LOOP AND LINK LIST
//
//  Copyright Jori Hiltunen 2023
//

/**
 * Loop through dog breeds from search and create a list of links
 * @param {array} breeds                Array of breeds from search
 * @param {function} setDogBreed        Set breed for displaying the breed callback
 * @param {boolean} reloadToggle        Reload value for callback toggling
 * @param {function} setReloadToggle    Reload dog image callback
 * @returns {React.Component}           Breeds as a list of links
 */

function DogBreeds({ breeds, setDogBreed, reloadToggle, setReloadToggle }) {

    const handleClick = (selectedBreed) => {
        setDogBreed(selectedBreed)
        setReloadToggle(!reloadToggle)
    }

    const breedsOut = () => {
        if (breeds.length > 0) {
            return (
                <>
                    {breeds.map(([breed, subBreed], index) => {
                        const name = (subBreed.length)
                            ? `${breed}: ${subBreed}`
                            : breed

                        return (
                            <li key={index} className="fs-3">[
                                <a
                                    className="text-decoration-underline"
                                    role="button"
                                    onClick={() => handleClick([breed, subBreed])}>
                                    {name}
                                </a>]
                                &nbsp;
                            </li>
                        )
                    })}
                </>
            )
        } else {
            return (
                <li className="fs-3">[<span className="text-danger">no search results</span>]</li>
            )
        }
    }

    return (
        <div id="local-search-results">
            <ul>
                {breedsOut()}
            </ul>
        </div >
    )
}

export default DogBreeds;