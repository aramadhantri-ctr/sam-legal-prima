const toggle=document.querySelector('.nav-toggle');const mobile=document.querySelector('.mobile-nav');if(toggle&&mobile){toggle.addEventListener('click',()=>mobile.classList.toggle('open'));mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')))}
const search=document.querySelector('#serviceSearch');const filters=[...document.querySelectorAll('.filter')];const cards=[...document.querySelectorAll('.service-card')];const empty=document.querySelector('#empty');let active='all';function apply(){let q=(search?.value||'').toLowerCase().trim(),n=0;cards.forEach(c=>{let ok=(active==='all'||c.dataset.cat===active)&&(!q||c.innerText.toLowerCase().includes(q));c.style.display=ok?'flex':'none';if(ok)n++});if(empty)empty.style.display=n?'none':'block'}filters.forEach(f=>f.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));f.classList.add('active');active=f.dataset.filter;apply()}));search?.addEventListener('input',apply);

/* Animasi muncul saat elemen di-scroll ke layar (progressive enhancement, aman tanpa JS) */
(function(){
    var targets = document.querySelectorAll(
        '.card, .service-card, .team-card, .feature, .contact-card, .step, .stat, .section-head, .quote, .team-photo, .seal-strip-inner'
    );
    if (!targets.length) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        targets.forEach(function(el){ el.classList.add('in-view'); });
        return;
    }
    var io = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function(el){
        el.classList.add('reveal');
        io.observe(el);
    });
})();
