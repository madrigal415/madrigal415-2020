'use strict;'

const fonts = ['helvetica', 'impact', 'futura', 'hero'];

const fontSelect = document.querySelector("#font-select");

fonts.forEach(function (x) {
    fontSelect.insertAdjacentHTML('beforeend', `<option value="${x}">${x}</option>`);
})


fontSelect.addEventListener('input', function (e) {
    const selectedValue = e.target.value;
    document.querySelector("body").style.fontFamily = selectedValue;
});
