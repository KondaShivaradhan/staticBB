document.addEventListener('DOMContentLoaded', function () {
    // Fetch and insert nav.html
    fetch('components/nav.html')
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML('afterbegin', data));

    // Fetch and insert banner.html
    fetch('components/banner.html')
        .then(response => response.text())
        .then(data => document.body.insertAdjacentHTML('afterbegin', data));
});
