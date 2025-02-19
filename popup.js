window.onload = function() {
    setTimeout(() => {
        document.getElementById('popup').classList.add('show');
    }, 500);
};

function closePopup() {
    document.getElementById('popup').classList.remove('show');
    document.getElementById('popup').classList.add('hide');
}
