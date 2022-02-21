function myintro() {
    anime.timeline({ loop: false })
        .add({
            targets: '.ml8 .circle-white',
            scale: [0, 3.5],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100
        }).add({
            targets: '.ml8 .circle-container',
            scale: [0, 1.3],
            duration: 1100,
            easing: "easeInOutExpo",
            offset: '-=1000'
        }).add({
            targets: '.ml8 .circle-dark',
            scale: [0, 1.3],
            duration: 1100,
            easing: "easeOutExpo",
            offset: '-=600'
        }).add({
            targets: '.ml8 .letters-left',
            scale: [0, 0.7],
            duration: 1200,
            offset: '-=550'
        }).add({
            targets: '.ml8 .bang',
            scale: [0, 0.7],
            rotateZ: [45, 15],
            duration: 1200,
            offset: '-=1000'
        }).add({
            targets: '.ml8',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1400
        });

    anime({
        targets: '.ml8 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
    });


    //second part of the animation
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.ml1 .letter',
            scale: [0.3, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 70 * (i + 1)
        }).add({
            targets: '.ml1 .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 1200,
            offset: '-=875',
            delay: (el, i, l) => 80 * (l - i)
        }).add({
            targets: '.ml1',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 5000
        });
}
