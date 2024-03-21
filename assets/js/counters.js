function startCounters(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let valueDisplays = document.querySelectorAll(".number-statistics");
            let interval = 2000;

            valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let spanContent = valueDisplay.querySelector('span').textContent;
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplay.textContent = startValue + spanContent;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });
            observer.unobserve(entry.target);
        }
    });
}
let observer = new IntersectionObserver(startCounters, { threshold: 0.1 });
let targetElement = document.querySelector('#counters-section');
observer.observe(targetElement);
