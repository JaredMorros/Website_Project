const show =(...el) => [...el].forEach(e => (e.style.display = ''));
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));


function Surprise(){
    var surpriseContent = document.querySelectorAll('.Surprise');
    for (var x = 0; x < surpriseContent.length; x++) {
        var target = surpriseContent[x]
        show(target)
    }
}