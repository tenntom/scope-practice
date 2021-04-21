
//EXAMPLE 1
// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

// for (let x = 0; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }


//EXAMPLE 2
// const conjunction = (firstWord, secondWord) => {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     return (conjoinedWord)
// }
// console.log(conjunction("Master", "Card"))

//EXAMPLE 3 - NO IDEA HOW THIS ONE IS SUPPOSED TO WORK. DON'T UNDERSTAND WHAT THEY'RE TRYING TO DO HERE.

const modSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": [
            start="1968",
            end="1973"
        ]
    }

    const HTMLRepresentation = `<h1>The Mod Squad</h1>`

    modSquad.members.forEach(member) {
        const HTMLRepresentation =+ `${member}`;
    }

console.log(HTMLRepresentation)
