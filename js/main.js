function order() {
    alert("Terima kasih telah memesan! Kami akan segera memproses pesanan Anda.");
}
function callWaiter() {
	document.alert("Pelayan akan segera datang untuk membantu Anda.");
}
const root = document.documentElement;
const eye = document.getElementById('eyeball');
const beam = document.getElementById('beam');
const passwordInput = 
document.getElementById('password')

root.addEventListener('mousemove', (e) => {
    let rect = beam.getBoundingClientRect();
    let mouseX = rect.right + (rect.width / 2);
    let mouseY = rect.top + (rect.height / 2);
    let rad = Math.atan2(mouseX - e.pageX,mouseY - 
e.pageY);
    let degrees = (rad * (20 / Math.PI) * -1) - 350
    
    root.style.setProperty('--beamDegrees',
`${degrees}deg`);
});

eye.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.toggle('show-password');
    passwordInput.type = passwordInput.type ===
'password' ? 'text' : 'password'
    passwordInput.focus();
});
function login() {
    window.location.href = "login_page/index.html"
}
const image = document.querySelector("img"),
    input = document.querySelector("input");

input.addEventListener("change",()=> {
    image.src = URL.createObjectURL(input.files[0]);
});

document.getElementById("img_profile")
    .addEventListener('click',
    function(){
    document.getElementById("input_file").click();  
    },false);


