
function OpenMenu() {
    let OpenBurger = document.querySelector(".header__burger"),
        menuBurger = document.querySelector(".burger"),
        backgroundMenu = document.querySelector(".menu-mobile"),
        hidden = document.querySelector(".body");
    OpenBurger.addEventListener
    menuBurger.classList.toggle("active"), backgroundMenu.classList.toggle("active"), hidden.classList.toggle("hidden");

}




$(document).ready((function () {
    $(".f-screen__slider").slick({
        slidesToShow: 1,
        dots: false,
        arrows: !1,
        variableWidth: !0,
        autoplaySpeed: 2e3,
        autoplay: true
    })
    AOS.init();
}))

$(document).ready((function () {
    $(".reviews_slider").slick({
        slidesToShow: 1,
        infinite: !0,
        dots: true,
        arrows: !1,
        autoplaySpeed: 3e3,
        variableWidth: !0
    })
    AOS.init();
}))



const links = document.querySelectorAll(".link");

Array.prototype.slice.call(links).forEach(function (link) {
    link.addEventListener("click", (e) => {
        const sectionName = e.currentTarget.getAttribute('to-section');
        scrollByElementName(sectionName);
    });

});

function scrollByElementName(elementName) {
    let element = "";
    element = document.querySelector(`.${elementName}`);
    if (!element) {
        return;
    }
    OpenMenu();
    let pageNavHeight = getPageNavHeight();
    let scrollToValue = element.offsetTop - pageNavHeight;
    scrollToOffset(scrollToValue);
}


function getPageNavHeight() {
    let pageNavHeight = document.querySelector('.sticky-active');
    if (pageNavHeight) {
        pageNavHeight = pageNavHeight.offsetHeight;
    } else {
        pageNavHeight = 50;
    }
    return pageNavHeight;
}


function scrollToOffset(offset) {
    window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: offset
    });
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



let fav = document.querySelector("[js-fav]");
let numberImage = 0;
function setFav() {
    if (numberImage == 3) {
        numberImage = 0;
    }
    fav.href = `favicon/favicon-${numberImage}.png`;
    numberImage++;
}
setInterval(setFav, 500);




var path1 = document.getElementById('myPath1');
var visiblePath1 = document.getElementById('visiblePath1');
var length1 = path1.getTotalLength();

// Устанавливаем начальные значения dasharray и dashoffset
path1.style.strokeDasharray = length1;
path1.style.strokeDashoffset = length1;

// Анимация
path1.animate([
    { strokeDashoffset: length1 },
    { strokeDashoffset: 0 }
], {
    duration: 1500, // Длительность анимации в миллисекундах
    fill: 'forwards' // Оставить последний кадр видимым после анимации
});

// Анимация для видимого пути
visiblePath1.style.opacity = 0;
visiblePath1.animate([
    { opacity: 0 },
    { opacity: 1 }
], {
    duration: 800,
    fill: 'forwards',
    delay: 1400 // Задержка, чтобы анимация видимого пути началась после завершения первой
});


AOS.init();



var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Вызываем вашу функцию при видимости блока
            animation2();

            // Отключаем наблюдение после первого срабатывания
            observer.disconnect();
        }
    });
};


var observer = new IntersectionObserver(callback, options);

// Наблюдение за элементом
var targetElement = document.getElementById('line-1');
observer.observe(targetElement);

function animation2() {
    var path2 = document.getElementById('myPath2');
    var visiblePath2 = document.getElementById('visiblePath2');
    var length2 = path2.getTotalLength();
    // Устанавливаем начальные значения dasharray и dashoffset
    path2.style.strokeDasharray = length2;
    path2.style.strokeDashoffset = length2;

    // Анимация для основного пути
    path2.animate([
        { strokeDashoffset: length2 },
        { strokeDashoffset: 0 }
    ], {
        duration: 1500,
        fill: 'forwards'
    });

    // Анимация для видимого пути
    visiblePath2.style.opacity = 0;
    visiblePath2.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 400,
        fill: 'forwards',
        delay: 1400
    });

}






//_______________________________


var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Вызываем вашу функцию при видимости блока
            animation();

            // Отключаем наблюдение после первого срабатывания
            observer.disconnect();
        }
    });
};

var observer = new IntersectionObserver(callback, options);

// Наблюдение за элементом
var targetElement = document.getElementById('myBlock');
observer.observe(targetElement);

function animation() {
    var path = document.getElementById('myPath');
    var visiblePath = document.getElementById('visiblePath');
    var length = path.getTotalLength();
    // Устанавливаем начальные значения dasharray и dashoffset
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Анимация для основного пути
    path.animate([
        { strokeDashoffset: length },
        { strokeDashoffset: 0 }
    ], {
        duration: 1500,
        fill: 'forwards'
    });

    // Анимация для видимого пути
    visiblePath.style.opacity = 0;
    visiblePath.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 800,
        fill: 'forwards',
        delay: 1400
    });

}


//______________________________







//new

var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Вызываем вашу функцию при видимости блока
            animation3();

            // Отключаем наблюдение после первого срабатывания
            observer.disconnect();
        }
    });
};


var observer = new IntersectionObserver(callback, options);

// Наблюдение за элементом
var targetElement = document.getElementById('line-4');
observer.observe(targetElement);

function animation3() {
    var path4 = document.getElementById('myPath4');
    var visiblePath4 = document.getElementById('visiblePath4');
    var length4 = path4.getTotalLength();
    // Устанавливаем начальные значения dasharray и dashoffset
    path4.style.strokeDasharray = length4;
    path4.style.strokeDashoffset = length4;

    // Анимация для основного пути
    path4.animate([
        { strokeDashoffset: length4 },
        { strokeDashoffset: 0 }
    ], {
        duration: 1500,
        fill: 'forwards'
    });

    // Анимация для видимого пути
    visiblePath4.style.opacity = 0;
    visiblePath4.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 800,
        fill: 'forwards',
        delay: 1400
    });

}


var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Вызываем вашу функцию при видимости блока
            animation5();

            // Отключаем наблюдение после первого срабатывания
            observer.disconnect();
        }
    });
};


var observer = new IntersectionObserver(callback, options);

// Наблюдение за элементом
var targetElement = document.getElementById('line-5');
observer.observe(targetElement);

function animation5() {
    var path5 = document.getElementById('myPath5');
    var visiblePath5 = document.getElementById('visiblePath5');
    var length5 = path5.getTotalLength();
    // Устанавливаем начальные значения dasharray и dashoffset
    path5.style.strokeDasharray = length5;
    path5.style.strokeDashoffset = length5;

    // Анимация для основного пути
    path5.animate([
        { strokeDashoffset: length5 },
        { strokeDashoffset: 0 }
    ], {
        duration: 1500,
        fill: 'forwards'
    });

    // Анимация для видимого пути
    visiblePath5.style.opacity = 0;
    visiblePath5.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 800,
        fill: 'forwards',
        delay: 1400
    });

}



var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Вызываем вашу функцию при видимости блока
            animation6();

            // Отключаем наблюдение после первого срабатывания
            observer.disconnect();
        }
    });
};


var observer = new IntersectionObserver(callback, options);

// Наблюдение за элементом
var targetElement = document.getElementById('line-6');
observer.observe(targetElement);

function animation6() {
    var path6 = document.getElementById('myPath6');
    var visiblePath6 = document.getElementById('visiblePath6');
    var length6 = path6.getTotalLength();
    // Устанавливаем начальные значения dasharray и dashoffset
    path6.style.strokeDasharray = length6;
    path6.style.strokeDashoffset = length6;

    // Анимация для основного пути
    path6.animate([
        { strokeDashoffset: length6 },
        { strokeDashoffset: 0 }
    ], {
        duration: 1500,
        fill: 'forwards'
    });

    // Анимация для видимого пути
    visiblePath6.style.opacity = 0;
    visiblePath6.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 800,
        fill: 'forwards',
        delay: 1400
    });

}


var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Вызываем вашу функцию при видимости блока
            animation7();

            // Отключаем наблюдение после первого срабатывания
            observer.disconnect();
        }
    });
};


var observer = new IntersectionObserver(callback, options);

// Наблюдение за элементом
var targetElement = document.getElementById('line-7');
observer.observe(targetElement);

function animation7() {
    var path7 = document.getElementById('myPath7');
    var visiblePath7 = document.getElementById('visiblePath7');
    var length7 = path7.getTotalLength();
    // Устанавливаем начальные значения dasharray и dashoffset
    path7.style.strokeDasharray = length7;
    path7.style.strokeDashoffset = length7;

    // Анимация для основного пути
    path7.animate([
        { strokeDashoffset: length7 },
        { strokeDashoffset: 0 }
    ], {
        duration: 1500,
        fill: 'forwards'
    });

    // Анимация для видимого пути
    visiblePath7.style.opacity = 0;
    visiblePath7.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 800,
        fill: 'forwards',
        delay: 1400
    });

}



var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Вызываем вашу функцию при видимости блока
            animation8();

            // Отключаем наблюдение после первого срабатывания
            observer.disconnect();
        }
    });
};


var observer = new IntersectionObserver(callback, options);

// Наблюдение за элементом
var targetElement = document.getElementById('line-8');
observer.observe(targetElement);

function animation8() {
    var path8 = document.getElementById('myPath8');
    var visiblePath8 = document.getElementById('visiblePath8');
    var length8 = path8.getTotalLength();
    // Устанавливаем начальные значения dasharray и dashoffset
    path8.style.strokeDasharray = length8;
    path8.style.strokeDashoffset = length8;

    // Анимация для основного пути
    path8.animate([
        { strokeDashoffset: length8 },
        { strokeDashoffset: 0 }
    ], {
        duration: 1500,
        fill: 'forwards'
    });

    // Анимация для видимого пути
    visiblePath8.style.opacity = 0;
    visiblePath8.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 800,
        fill: 'forwards',
        delay: 1400
    });

}





var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Вызываем вашу функцию при видимости блока
            animation10();

            // Отключаем наблюдение после первого срабатывания
            observer.disconnect();
        }
    });
};

var observer = new IntersectionObserver(callback, options);

// Наблюдение за элементом
var targetElement = document.getElementById('line-10');
observer.observe(targetElement);

function animation10() {
    var path10 = document.getElementById('myPath10');
    var visiblePath10 = document.getElementById('visiblePath10');
    var length10 = path10.getTotalLength();
    // Устанавливаем начальные значения dasharray и dashoffset
    path10.style.strokeDasharray = length10;
    path10.style.strokeDashoffset = length10;

    // Анимация для основного пути
    path10.animate([
        { strokeDashoffset: length10 },
        { strokeDashoffset: 0 }
    ], {
        duration: 1500,
        fill: 'forwards'
    });

    // Анимация для видимого пути
    visiblePath10.style.opacity = 0;
    visiblePath10.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 800,
        fill: 'forwards',
        delay: 1400
    });

}

var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Вызываем вашу функцию при видимости блока
            animation9();

            // Отключаем наблюдение после первого срабатывания
            observer.disconnect();
        }
    });
};

var observer = new IntersectionObserver(callback, options);

// Наблюдение за элементом
var targetElement = document.getElementById('line-9');
observer.observe(targetElement);

function animation9() {
    var path9 = document.getElementById('myPath9');
    var visiblePath9 = document.getElementById('visiblePath9');
    var length9 = path9.getTotalLength();
    // Устанавливаем начальные значения dasharray и dashoffset
    path9.style.strokeDasharray = length9;
    path9.style.strokeDashoffset = length9;

    // Анимация для основного пути
    path9.animate([
        { strokeDashoffset: length9 },
        { strokeDashoffset: 0 }
    ], {
        duration: 1500,
        fill: 'forwards'
    });

    // Анимация для видимого пути
    visiblePath9.style.opacity = 0;
    visiblePath9.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 800,
        fill: 'forwards',
        delay: 1400
    });

}



var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Вызываем вашу функцию при видимости блока
            animation13();

            // Отключаем наблюдение после первого срабатывания
            observer.disconnect();
        }
    });
};


var observer = new IntersectionObserver(callback, options);

// Наблюдение за элементом
var targetElement = document.getElementById('line-2');
observer.observe(targetElement);

function animation13() {
    var path3 = document.getElementById('myPath3');
    var visiblePath3 = document.getElementById('visiblePath3');
    var length3 = path3.getTotalLength();
    // Устанавливаем начальные значения dasharray и dashoffset
    path3.style.strokeDasharray = length3;
    path3.style.strokeDashoffset = length3;

    // Анимация для основного пути
    path3.animate([
        { strokeDashoffset: length3 },
        { strokeDashoffset: 0 }
    ], {
        duration: 1500,
        fill: 'forwards'
    });

    // Анимация для видимого пути
    visiblePath3.style.opacity = 0;
    visiblePath3.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 800,
        fill: 'forwards',
        delay: 1400
    });

}


var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

var callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Вызываем вашу функцию при видимости блока
            animation9();

            // Отключаем наблюдение после первого срабатывания
            observer.disconnect();
        }
    });
};


var observer = new IntersectionObserver(callback, options);

// Наблюдение за элементом
var targetElement = document.getElementById('line-9');
observer.observe(targetElement);

function animation9() {
    var path9 = document.getElementById('myPath9');
    var visiblePath9 = document.getElementById('visiblePath9');
    var length9 = path9.getTotalLength();
    // Устанавливаем начальные значения dasharray и dashoffset
    path9.style.strokeDasharray = length9;
    path9.style.strokeDashoffset = length9;

    // Анимация для основного пути
    path9.animate([
        { strokeDashoffset: length9 },
        { strokeDashoffset: 0 }
    ], {
        duration: 1500,
        fill: 'forwards'
    });

    // Анимация для видимого пути
    visiblePath9.style.opacity = 0;
    visiblePath9.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 800,
        fill: 'forwards',
        delay: 1400
    });

}