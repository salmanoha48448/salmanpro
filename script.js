/* PARTICLES */

const particles = document.querySelector('.particles');

for(let i=0;i<220;i++){

let p=document.createElement('span');

p.classList.add('particle');

p.style.left=Math.random()*100+'vw';

p.style.animationDuration=
(Math.random()*6+4)+'s';

p.style.animationDelay=
Math.random()*5+'s';

particles.appendChild(p);
}

/* CURSOR GLOW */

const glow=document.querySelector('.cursor-glow');

document.addEventListener('mousemove',(e)=>{

glow.animate({

left:e.clientX+'px',
top:e.clientY+'px'

},{
duration:300,
fill:'forwards'
});

});

/* OVERLAY */

const overlay=document.getElementById('overlayText');

/* CLEAR MODES */

function clearModes(){

document.body.className='';

overlay.classList.remove('show');

}

/* DEFAULT MODE */

function defaultMode(){

clearModes();

overlay.innerHTML='SALMAN';

overlay.style.color='#00f7ff';

setTimeout(()=>{
overlay.classList.add('show');
},100);

flashEffect('#00f7ff');

}

/* ANIME MODE */

function animeMode(){

clearModes();

document.body.classList.add('anime');

overlay.innerHTML='🏴‍☠️ SALMAN';

overlay.style.color='gold';

setTimeout(()=>{
overlay.classList.add('show');
},100);

explodeParticles('gold');

}

/* SKULL MODE */

function skullMode(){

clearModes();

document.body.classList.add('skull');

overlay.innerHTML='☠️ SALMAN ☠️';

overlay.style.color='white';

setTimeout(()=>{
overlay.classList.add('show');
},100);

screenShake();

}

/* IRAN MODE */

function iranMode(){

clearModes();

document.body.classList.add('iran');

overlay.innerHTML='وطنم';

overlay.style.color='white';

setTimeout(()=>{
overlay.classList.add('show');
},100);

flashEffect('red');

}

/* FLASH EFFECT */

function flashEffect(color){

const flash=document.createElement('div');

flash.style.position='fixed';
flash.style.inset='0';
flash.style.background=color;
flash.style.opacity='.3';
flash.style.zIndex='999';
flash.style.pointerEvents='none';
flash.style.transition='.5s';

document.body.appendChild(flash);

setTimeout(()=>{
flash.style.opacity='0';
},100);

setTimeout(()=>{
flash.remove();
},700);

}

/* SCREEN SHAKE */

function screenShake(){

document.body.animate([

{transform:'translateX(0px)'},

{transform:'translateX(-8px)'},

{transform:'translateX(8px)'},

{transform:'translateX(-8px)'},

{transform:'translateX(0px)'}

],{

duration:500

});

}

/* PARTICLE EXPLOSION */

function explodeParticles(color){

for(let i=0;i<40;i++){

const dot=document.createElement('div');

dot.style.position='fixed';

dot.style.width='8px';

dot.style.height='8px';

dot.style.borderRadius='50%';

dot.style.background=color;

dot.style.left='50%';

dot.style.top='50%';

dot.style.zIndex='999';

document.body.appendChild(dot);

const x=(Math.random()-0.5)*600;

const y=(Math.random()-0.5)*600;

dot.animate([

{
transform:'translate(0,0)',
opacity:1
},

{
transform:`translate(${x}px,${y}px)`,
opacity:0
}

],{

duration:1200,
easing:'cubic-bezier(.2,.8,.2,1)'

});

setTimeout(()=>{
dot.remove();
},1200);

}

}

/* INTRO */

window.onload=()=>{

defaultMode();

};
