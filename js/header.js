const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('nav-bar');
const cross = document.getElementById('cross');

hamburger.onclick = ()=>{
    navbar.style.display = 'flex';
    cross.style.display = 'block';
}
cross.onclick = ()=>{
    navbar.style.display = "none";
    cross.style.display = "none";
}