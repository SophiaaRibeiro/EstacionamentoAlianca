function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
}



const entrada = document.getElementById("entrada");
const saida = document.getElementById("saida");
const veiculo = document.getElementById("veiculo");
const total = document.getElementById("total");

function calcularTotal() {

    if (!entrada.value || !saida.value || !veiculo.value) {
        total.textContent = "R$ 0,00";
        return;
    }

    const dataEntrada = new Date(entrada.value);
    const dataSaida = new Date(saida.value);

    const diffTime = dataSaida - dataEntrada;
    const dias = diffTime / (1000 * 60 * 60 * 24);

    if (dias <= 0) {
        total.textContent = "Data inválida";
        return;
    }

    const diaria = Number(veiculo.value);
    const resultado = diaria * dias;

    total.textContent = `R$ ${resultado.toFixed(2)}`;
}

const hoje = new Date().toISOString().split("T")[0];
entrada.setAttribute("min", hoje);
saida.setAttribute("min", hoje);

// eventos
entrada.addEventListener("change", calcularTotal);
saida.addEventListener("change", calcularTotal);
veiculo.addEventListener("change", calcularTotal);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });

});

const menu = document.querySelector("nav ul");
const toggle = document.querySelector(".menu-toggle");

function toggleMenu() {
    menu.classList.toggle("active");
}

document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("active");
    }
});

window.addEventListener("scroll", () => {
    menu.classList.remove("active");
});

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});