let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

function removeItems() {
    document.getElementById('nom').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('msg').value = '';
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('mail').value;
    var objet = document.getElementById('tel').value;
    var message = document.getElementById('msg').value;
    var body = '' + nom + '<br>' + email + '<br>' +
        objet + '<br>' + message;


    Email.send({
        Host: "smtp.gmail.com",
        Username: "diarrad536@gmail.com",
        Password: "qonjeandgryynada",
        To: 'diarrad536@gmail.com',
        From: email,
        Subject: objet,
        Body: body,
    }).then(
        message => alert("Message envoyer")
    );
    
    removeItems();
})