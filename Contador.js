window.addEventListener('load', function () {
    document.querySelector("#btn").addEventListener('click', function () {
        var ini = document.getElementById('start');
        var fim = document.getElementById('end');
        var interv = document.getElementById('gap');
        var resp = document.getElementById('retJs');

        var i = parseInt(ini.value);
        var f = parseInt(fim.value);
        var intr = parseInt(interv.value);
        var cont = i;
        var emoji = String.fromCodePoint(128073);
        var emojiFim = String.fromCodePoint(128282);

        if (ini.value.length == 0 || fim.value.length == 0 || interv.value.length == 0) {
            window.alert("Erro: Favor prencher campos corretamente");
        } else if (interv.value == 0) {
            window.alert("Erro: Favor prencher campos corretamente");
        } else if (ini.value == 0 && fim.value == 0) {
            window.alert("Erro: Favor prencher campos corretamente");
        } else if (i < f) {
            resp.innerHTML = 'Contando...';
            for (cont; cont <= f; cont += intr) {
                resp.innerHTML += `${emoji}${cont}`;
                resp.style.fontSize = "20px";
            }
            resp.innerHTML += `${emojiFim}`;
        } else if (i > f) {
            resp.innerHTML = 'Contando...';
            for (cont; cont >= f; cont -= intr) {
                resp.innerHTML += `${emoji}${cont}`;
                resp.style.fontSize = "20px";
            }
            resp.innerHTML += `${emojiFim}`;
        }
    })
});

