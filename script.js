const hiphopSongs = async() =>{

    const response = await fetch('hiphop/monaleo.json')    // Awaits stops js from assigning value to response until data is fetched

    const data = await response.json()

    return data

}



console.log(1)

console.log(2)

hiphopSongs()

    .then(data => console.log('Resolved:', data))

console.log(3)

console.log(4)