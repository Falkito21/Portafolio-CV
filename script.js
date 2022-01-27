/****** MENU ******/
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");
    let menutoggle = d.querySelector('.toggle');
    const body = d.querySelector('body');
    const toggle = d.getElementById('toggle2');
    const btn = d.querySelector('.btn');
    const h1 = d.querySelector('h1');
    const h2 = d.querySelector('.section-title');
    const h5 = d.querySelector('h5');
    const p = d.querySelector('p');
    const progress = d.querySelector('progress');
    let instagram = d.querySelector('.instagram');
    let twitter = d.querySelector('.twitter');
    let git = d.querySelector('.git');
    const a = d.querySelector('a')
    const color = d.querySelector('.oscuro-negro')
    // const servicios = d.querySelector('.servicios')
    const fondo_opaco_1 = d.querySelector('.hero-image-opacity')
    // const carusel = d.querySelector('.carousel')

    
    // menutoggle.onclick = function () {
    //     menutoggle.classList.toggle('active')
    // }

    toggle.onclick = function () {
        h2.classList.toggle('active')
        // carusel.classList.toggle('active')
        fondo_opaco_1.classList.toggle('active')
        // servicios.classList.toggle('active')
        git.classList.toggle('active')
        twitter.classList.toggle('active')
        instagram.classList.toggle('active')
        toggle.classList.toggle('active')
        body.classList.toggle('active')
        btn.classList.toggle('active')
        h1.classList.toggle('active')
        h5.classList.toggle('active')
        p.classList.toggle('active')
        progress.classList.toggle('active')
        a.classList.toogle('active')
        color.classList.toggle('active')
    }
    
    $btnMenu.addEventListener("click",(e) => {
        
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none")
        $menu.classList.toggle("is-active");
        menutoggle.classList.toggle('active')
        
        
    });

    d.addEventListener("click",e => {
        if(!e.target.matches(".menu a")) return false;
        
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
        menutoggle.classList.toggle('none')
        menutoggle.classList.toggle('active')
        
    });
})(document);

/**************** BOTON HAMBURGESA ****************/ 

        
/****** CONTACTO-FORMULARIO ******/
((d) => {
    const $form = d.querySelector(".contacto-formulario"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contactacto-formulario-responde");

    $form.addEventListener("submit",(e) => {
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/juan.falco21@gmail.com",{
            method:"POST",
            body:new FormData(e.target),
        })
            .then((res) => (res.ok ? res.json():Promise.reject(res)))
            .then(json=>{
                console.log(json);
                location.hash = "#gracias";
                $form.reset();
            })
            .catch((err) => {
                console.log(err);
                let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
                $response.querySelector("h3").innerHTML = `Eror ${err.status}:${message}`;
            })
            .finally(()=>{
                $loader.classList.add("none");
                setTimeout(()=>{
                    location.hash="#close"
                },3000);
            });     
    });
})(document);