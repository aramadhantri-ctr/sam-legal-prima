const toggle = document.querySelector('.nav-toggle');
const mobile = document.querySelector('.mobile-nav');

if (toggle && mobile) {
    toggle.addEventListener('click', () => {
        mobile.classList.toggle('open');
    });

    mobile.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            mobile.classList.remove('open');
        });
    });
}


const search = document.querySelector('#serviceSearch');

const filters = [
    ...document.querySelectorAll('.filter')
];

const cards = [
    ...document.querySelectorAll('.service-card')
];

const empty = document.querySelector('#empty');

let active = 'all';


function apply() {
    let q = (search?.value || '').toLowerCase().trim();
    let n = 0;

    cards.forEach(c => {
        let ok =
            (active === 'all' || c.dataset.cat === active) &&
            (!q || c.innerText.toLowerCase().includes(q));

        c.style.display = ok ? 'flex' : 'none';

        if (ok) {
            n++;
        }
    });

    if (empty) {
        empty.style.display = n ? 'none' : 'block';
    }
}


filters.forEach(f => {
    f.addEventListener('click', () => {

        filters.forEach(x => {
            x.classList.remove('active');
        });

        f.classList.add('active');

        active = f.dataset.filter;

        apply();
    });
});


search?.addEventListener('input', apply);