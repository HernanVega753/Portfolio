document.addEventListener('DOMContentLoaded', () => {
    const skills = {
        python: 90,
        java: 75,
        javascript: 80,
        php: 60,
        html: 95,
        css: 85,
        scss: 70
    };

    for (let skill in skills) {
        const progressBar = document.querySelector(`.${skill}`);
        progressBar.style.width = skills[skill] + '%';
    }
});

