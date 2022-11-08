const hiphopSongs = async() =>{

    const response = await fetch('hiphop/monaleo.json')    // Awaits stops js from assigning value to response until data is fetched

    const data = await response.json()

    return data

}


hiphopSongs()

    .then(data => console.log('Resolved:', data))

    .catch(err => console.log('Rejected', err.message))