var sidebar = document.getElementById('sidebar');
var button = document.getElementById('toggleButton');
document.getElementById('toggleButton').addEventListener('click', function() {
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    } else {
        sidebar.classList.add('open');
    }
});
button.addEventListener('mouseover', function(e) {
    button.style.backgroundColor = '#cc5200';
})
button.addEventListener('mouseout', function(e) {
    button.style.backgroundColor = '#ffb278';
})
