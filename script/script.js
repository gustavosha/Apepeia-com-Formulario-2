document.getElementById('myForm').addEventListener('submit', function(event) {
    var dataNascimentoInput = document.getElementById('dataNascimento').value;
    var dataNascimentoError = document.getElementById('dataNascimentoError');
    if (!isDataNascimentoValid(dataNascimentoInput)) {
        dataNascimentoError.textContent = 'Formato inválido de data. Use dd/mm/aaaa.';
        event.preventDefault();
    } else {
        dataNascimentoError.textContent = '';
    }

    var rgInput = document.getElementById('rg').value;
    var rgError = document.getElementById('rgError');
    if (!isRgValid(rgInput)) {
        rgError.textContent = 'Formato inválido de RG. Use xx.xxx.xxx-x.';
        event.preventDefault();
    } else {
        rgError.textContent = '';
    }
});

function isDataNascimentoValid(dataNascimento) {
    const dataNascimentoRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    return dataNascimentoRegex.test(dataNascimento);
}

function isRgValid(rg) {
    const rgRegex = /^\d{2}\.\d{3}\.\d{3}-\d{2}$/;
    return rgRegex.test(rg);
}
