const queen = document.querySelector('#queen');
const king = document.querySelector('#king');
const mayor = document.querySelector('#mayor');
const minor = document.querySelector('#minor');
const nano = document.querySelector('#nano');
const eggs = document.querySelector('#eggs');

const queenClass = document.querySelector('.queen');
const kingClass = document.querySelector('.king');
const mayorClass = document.querySelector('.mayor');
const minorClass = document.querySelector('.minor');
const nanoClass = document.querySelector('.nano');
const eggsClass = document.querySelector('.eggs');


king.addEventListener('mouseenter', function () {
  kingClass.classList.add('rood1');
  });
king.addEventListener('mouseleave', function () {
    kingClass.classList.remove('rood1');
})


mayor.addEventListener('mouseenter', function () {
    mayorClass.classList.add('rood2');
});
mayor.addEventListener('mouseleave', function () {
    mayorClass.classList.remove('rood2');
})


minor.addEventListener('mouseenter', function () {
    minorClass.classList.add('rood3');
});
minor.addEventListener('mouseleave', function () {
    minorClass.classList.remove('rood3');
})


nano.addEventListener('mouseenter', function () {
    nanoClass.classList.add('rood4');
});
nano.addEventListener('mouseleave', function () {
    nanoClass.classList.remove('rood4');
})


eggs.addEventListener('mouseenter', function () {
    eggsClass.classList.add('rood5');
});
eggs.addEventListener('mouseleave', function () {
    eggsClass.classList.remove('rood5');
})

queen.addEventListener('mouseenter', function () {
    kingClass.classList.add('rood1');
    mayorClass.classList.add('rood2');
    minorClass.classList.add('rood3');
    nanoClass.classList.add('rood4');
    eggsClass.classList.add('rood5');
});
queen.addEventListener('mouseleave', function () {
    kingClass.classList.remove('rood1');
    mayorClass.classList.remove('rood2');
    minorClass.classList.remove('rood3');
    nanoClass.classList.remove('rood4');
    eggsClass.classList.remove('rood5');
})
