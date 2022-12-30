
const message = {
    whatiam:['an undergradute', 'studying Mathematics and Economics', 'a Full-Stack Developer', 'Spanish'],
    achieve: ['write a book', 'research in Mathematics', 'travel to Bali'],
    motivation: ['things will always be right at long last', 'your future is bright with hard work','you have the power to make everything right', 'there\'s always light at the end of a tunnel']
}

const random = num =>{
    return Math.floor(Math.random() * num)
}

const buildPhrases = () => {

    let phrases = []

    for (let arr in message){
        let mixedMessage = random(message[arr].length)
        
        switch (arr) {
            case 'whatiam':
                phrases.push(`I am ${message[arr][mixedMessage]}`)
                break;
            case 'achieve':
                phrases.push(`I would like to ${message[arr][mixedMessage]}`)
                break;
            case 'motivation':
                phrases.push(`Always remember that ${message[arr][mixedMessage]}`)
                break;
            default:
                'error'
                break;
        }
    }
    return phrases.join(' ');
}


console.log(buildPhrases());