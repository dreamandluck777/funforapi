const telepusicks = ["Tinky Winky", "Dipsy", "Laa Laa", "Po"];

export function returnTelepusickName(req, res) {
    const {name} = req.body

    if(!name) {
        res.json({
            message: "You didn't want to be a Teletubby."
        })
    }

    const userLetters  = name.toLowerCase().trim().split("")

    const answere = {
        name: 'Vacuum cleaner',
        score: 0,
    }
    
    telepusicks.forEach(element => {
        let currentScore = 0
        const curElement = element.toLowerCase().trim()
        
        userLetters.forEach(letter => {
            if(curElement.includes(letter)) {
                currentScore++
            }
        })

        if(currentScore > answere.score) {
            answere.name = element
            answere.score = currentScore
        } 
    })

    res.json({
        message: answere.name,
        matches: answere.score
    })
}