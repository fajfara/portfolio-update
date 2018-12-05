let gradientCollection = {
    '0': [
        '#1a2a6c',
        '-webkit-linear-gradient(to left, #1a2a6c, #b21f1f, #fdbb2d);',
        'linear-gradient(to left, #1a2a6c, #b21f1f, #fdbb2d)'
    ],
    '1': [
        '#12c2e9',
        '-webkit-linear-gradient(to right, #12c2e9, #c471ed, #fdbb2d);',
        'linear-gradient(to right, #12c2e9, #c471ed, #fdbb2d)'
    ],
    '2': [
        '#0F2027',
        '-webkit-linear-gradient(to left, #0F2027, #203A43, #fdbb2d);',
        'linear-gradient(to left, #0F2027, #203A43, #fdbb2d)'
    ],
    '3': [
        '#40E0D0',
        '-webkit-linear-gradient(to right, #40E0D0, #FF8C00, #fdbb2d);',
        'linear-gradient(to right, #40E0D0, #FF8C00, #fdbb2d)'
    ],
    '4': [
        '#00C9FF',
        '-webkit-linear-gradient(to left, #00C9FF, #92FE9D);',
        'linear-gradient(to left, #00C9FF, #92FE9D)'
    ],
};
console.log(gradientCollection[0][0]);

const pickRandom = (e) => {
    let rndItem = Math.floor(Math.random() * 5);
    return gradientCollection[rndItem][e];

};


let itemsTest = document.getElementById('items');
setTimeout(() => {
    for (let i = 0; i < 10; i++) {
    
        const title = document.createElement('div');
        const h1 = document.createElement('h1');

        // Add classes to the elements
        title.setAttribute('class', 'title');
        h1.setAttribute('class', 'title-github')
        
        // Add data to elements
        h1.textContent = "Testing";

        title.style.background = pickRandom(0);
        title.style.background = pickRandom(1);
        title.style.background = pickRandom(2);

        // Append to document
        itemsTest.appendChild(title);
        title.appendChild(h1);
        // Append to description and links
        anime({
            targets: '.title',
            opacity: [0, 1],
            scale: [0.2, 1],
            easing: 'easeOutExpo',
            duration: 2000
        });

}
}, 2000);