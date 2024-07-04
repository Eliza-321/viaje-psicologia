ScrollReveal().reveal('#intro', { 
    delay: 200, 
    distance: '50px', 
    origin: 'bottom',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 200
});

ScrollReveal().reveal('#ensayo', { 
    delay: 300, 
    distance: '50px', 
    origin: 'left',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

ScrollReveal().reveal('#video', { 
    delay: 400, 
    distance: '50px', 
    origin: 'right',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

ScrollReveal().reveal('#trabajo-grupal', { 
    delay: 500, 
    distance: '50px', 
    origin: 'bottom',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)'
});

// Animaciones adicionales para elementos dentro de las secciones
ScrollReveal().reveal('#intro h2, #intro p, #intro .inline-block', { 
    delay: 300, 
    interval: 200, 
    scale: 0.85,
    duration: 800
});

ScrollReveal().reveal('#ensayo h2, #ensayo p, #ensayo ul, #ensayo a', { 
    delay: 400, 
    interval: 200, 
    distance: '20px', 
    origin: 'left'
});

ScrollReveal().reveal('#video h2, #video p, #video .relative', { 
    delay: 500, 
    interval: 300, 
    scale: 0.9,
    duration: 800
});

ScrollReveal().reveal('#trabajo-grupal h2, #trabajo-grupal p, #trabajo-grupal .bg-white', { 
    delay: 600, 
    interval: 300, 
    distance: '30px', 
    origin: 'bottom'
});

ScrollReveal().reveal('#equipo h2, #equipo .flex', { 
    delay: 700, 
    interval: 200, 
    scale: 0.9,
    duration: 800
});