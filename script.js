const button = document.querySelector('button');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const colors = ['#ff69b4', '#33cc33', '#6666ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}
