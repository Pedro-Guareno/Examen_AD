let pot = 0;

function reiniciar() {
    pot = 100;
    document.getElementById("pot").innerHTML= pot;
}

function apostar() {
    let dinero = Number(document.getElementById("dinero").value);
    let postura = document.querySelector('input[name="postura"]:checked');

        if (dinero < pot && dinero > 0 && postura != null) {
        
            let numero = Math.floor(Math.random() * 2);
            let moneda = "";

            if (numero == 0) {
                moneda = "CARA";
            } else {
                moneda = "CRUZ";
            }

            document.getElementById("moneda").value = moneda;

            if (moneda == postura.value) {
                pot = pot + dinero;
            } else {
                pot = por - dinero;
            }

            document.getElementById("pot").innerHTML = pot;
    }
}