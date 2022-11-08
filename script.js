const hiphopSongs = async() =>{

    const response = await fetch('hiphop/monaleo.json')    // Awaits stops js from assigning value to response until data is fetched

    const data = await response.json()

    console.log(data)

}


hiphopSongs()