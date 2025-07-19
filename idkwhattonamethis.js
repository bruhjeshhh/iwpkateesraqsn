document.addEventListener('DOMContentLoaded', () => {
    const alphabetGrid = document.querySelector('.alphabet-grid');
    const exampleText = document.getElementById('example-text');

    const alphabetExamples = {
        A: 'A is for AC/DC',
        B: 'B is for Bitter Sweet Symphony',
        C: 'C is for Chop Suey!',
        D: 'D is for Deutschland',
        E: 'E is for Enter Sandman',
        F: 'F is for Free Bird',
    
        I: 'I is for Iris',
        J: 'J is for Jesus Of Suburbia',
        K: 'K is for Karma police',
        L: 'L is for Led Zeppelin',
        M: 'M is for Metallica',
        N: 'N is for November Rain',
        O: 'O is for Oasis',
        P: 'P is for Paranoid',
        Q: 'Q is for Queen',
        R: 'R is for Roxanne',
        S: 'S is for Severance',
        T: 'T is for Thunderstruck',
        U: 'U is for Uptown funk',
        V: 'V is for Van Halen',
        W: 'W is for War Pigs',
        X: 'X is for X(the pretentious elon musk social media site)',
        Y: 'Y is for Yesterday',
        Z: 'Z is for ZZ top'
    };

    //dynamic wala generation adi bhaiya bataye they
    for (let i = 65; i <= 90; i++) {
        const letter = String.fromCharCode(i);
        const letterDiv = document.createElement('div');
        letterDiv.classList.add('alphabet-letter');
        letterDiv.textContent = letter;
        letterDiv.dataset.letter = letter; // store 
        alphabetGrid.appendChild(letterDiv);
    }

    // gpt baataya styling
    alphabetGrid.addEventListener('click', (event) => {
        const clickedLetter = event.target.closest('.alphabet-letter');
        if (clickedLetter) {
            const letter = clickedLetter.dataset.letter;
            exampleText.style.opacity = 0; // Fade out 
            setTimeout(() => {
                exampleText.textContent = alphabetExamples[letter];
                exampleText.style.opacity = 1; // Fade 
            }, 300); 
        }
    });
});
