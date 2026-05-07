/* CURSOR */

const cursor=document.querySelector('.cursor');

document.addEventListener('mousemove',(e)=>{

cursor.animate({

left:e.clientX+'px',
top:e.clientY+'px'

},{
duration:250,
fill:'forwards'
});

});

/* PARTICLES */

const particles=document.querySelector('.particles');

for(let i=0;i<250;i++){

let p=document.createElement('span');

p.classList.add('particle');

p.style.left=Math.random()*100+'vw';

p.style.animationDuration=
(Math.random()*6+4)+'s';

p.style.animationDelay=
Math.random()*5+'s';

particles.appendChild(p);
}

/* OVERLAY */

const overlay=document.getElementById('overlay');

/* CLEAR */

function clearModes(){

document.body.className='';

overlay.classList.remove('show');

}

/* DEFAULT */

function defaultMode(){

clearModes();

overlay.innerHTML='SALMAN';

overlay.style.color='#00f7ff';

setTimeout(()=>{
overlay.classList.add('show');
},100);

flash('#00f7ff');

}

/* ANIME */

function animeMode(){

clearModes();

document.body.classList.add('anime');

overlay.innerHTML='🏴‍☠️ SALMAN';

overlay.style.color='gold';

setTimeout(()=>{
overlay.classList.add('show');
},100);

explode('gold');

}

/* SKULL */

function skullMode(){

clearModes();

document.body.classList.add('skull');

overlay.innerHTML='☠️ SALMAN ☠️';

overlay.style.color='white';

setTimeout(()=>{
overlay.classList.add('show');
},100);

}

/* IRAN */

function iranMode(){

clearModes();

document.body.classList.add('iran');

overlay.innerHTML='وطنم';

overlay.style.color='white';

setTimeout(()=>{
overlay.classList.add('show');
},100);

flash('red');

}

/* FLASH */

function flash(color){

const div=document.createElement('div');

div.style.position='fixed';
div.style.inset='0';
div.style.background=color;
div.style.opacity='.25';
div.style.zIndex='999';
div.style.pointerEvents='none';

document.body.appendChild(div);

setTimeout(()=>{
div.style.transition='.5s';
div.style.opacity='0';
},50);

setTimeout(()=>{
div.remove();
},700);

}

/* EXPLOSION */

function explode(color){

for(let i=0;i<50;i++){

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

const x=(Math.random()-0.5)*700;

const y=(Math.random()-0.5)*700;

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

/* MATRIX */

const canvas=document.getElementById('matrix');

const ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

const letters='SALMAN0123456789';

const array=letters.split('');

const size=14;

const columns=canvas.width/size;

const drops=[];

for(let x=0;x<columns;x++){

drops[x]=1;

}

function draw(){

ctx.fillStyle='rgba(0,0,0,0.05)';

ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle='#00f7ff';

ctx.font=size+'px monospace';

for(let i=0;i<drops.length;i++){

const text=array[Math.floor(Math.random()*array.length)];

ctx.fillText(text,i*size,drops[i]*size);

if(drops[i]*size>canvas.height&&Math.random()>0.975){

drops[i]=0;

}

drops[i]++;

}

}

setInterval(draw,35);

/* MUSIC */

document.body.addEventListener('click',()=>{

document.getElementById('bgmusic').play();

},{once:true});

defaultMode();
