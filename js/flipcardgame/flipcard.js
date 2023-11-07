const images = [
    './img/1.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',

]
const shuffledImages = images.concat(images).sort(() => 0.5 - Math.random());
for (let i = 0; i < images.length * 2; i++) {
    var item = document.createElement('div');
    item.className = 'item';
    var img = document.createElement('img');
    img.src = shuffledImages[i];
    item.appendChild(img);
    document.querySelector('.playboard').appendChild(item);
    item.onclick = function() {
        this.classList.add('open');
        var openBoxes = document.querySelectorAll('.open');
        if (openBoxes.length === 2) {
            if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                openBoxes.forEach(box => box.classList.add('match'));
                openBoxes.forEach(box => box.classList.remove('open'));
            } else {
                setTimeout(function() {
                    openBoxes.forEach(box => box.classList.remove('open'));
                }, 500);
            }
        }
        
        var matchedBoxes = document.querySelectorAll('.match');
        if (matchedBoxes.length === shuffledImages.length) {
            alert("Chúc mừng bạn đã thắng!");
        }
    }
}







