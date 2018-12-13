let mainContent = document.getElementById('main-content');

anime({
    targets: '.sidenav',
    width: 150,
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 1000
});

setTimeout(() => {
    mainContent.classList.add('add-left-margin');
    setTimeout(() => {
        revealLandingPage()
        revealSidebarContent()
    }, 1000);

}, 10);

const checkOpened = (d) => {
    let mainView = document.getElementById("main-content");
    let mainViewPages = mainView.getElementsByClassName("pages");

    for (let i = 0; i < mainViewPages.length; i++) {
        let currItem = mainViewPages[i];
        if (currItem.getAttribute("data-shown") == "true") {
            currItem.setAttribute("data-shown", "false")
            anime.remove('#' + currItem.getAttribute("id"));
            anime({
                targets: '#' + currItem.getAttribute("id"),
                translateY: ['0rem', '-200rem'],
                /* opacity: [0, 1], */
                easing: 'easeOutSine',
                duration: 2000,
                delay: 250
            });
            currItem.classList.remove("front")
            currItem.classList.add("back");

        };

        mainContent.classList.remove("overflow-auto");

    }

    for (let i = 0; i < mainViewPages.length; i++) {
        if (mainViewPages[i].getAttribute("id") == d.getAttribute("data-value")) {
            let currItem = mainViewPages[i];
            if (d.getAttribute("data-value") == "projects" || d.getAttribute("data-value") == "about") {
                mainContent.classList.add("overflow-auto");
            }
            currItem.classList.remove("back");
            currItem.classList.add("front");
            anime.remove('#' + currItem.getAttribute("id"));
            anime({
                targets: '#' + currItem.getAttribute("id"),
                translateY: ['-200rem', '0rem'],
                opacity: [0, 1],
                easing: 'easeOutSine',
                duration: 2000
            });
            mainViewPages[i].setAttribute("data-shown", "true")
        }

    }
}

const revealPage = (d) => {
    checkOpened(d);
}

const revealLandingPage = () => {
    anime({
        targets: '.landing-page',
        opacity: [0, 1],
        scale: [0.2, 1],
        easing: 'easeOutExpo',
        duration: 1000
    });
}

const revealSidebarContent = () => {
    anime({
        targets: '.logo_h',
        opacity: [0, 1],
        top: '-1rem',
        easing: 'easeInOutSine',
        duration: 1500
    });
    anime({
        targets: '.navigationBar',
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: 1000
    });
}