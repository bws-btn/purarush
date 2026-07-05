window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "#08111f";
    }else{
        nav.style.background = "rgba(0,0,0,.5)";
    }

});