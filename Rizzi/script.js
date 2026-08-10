const reveals=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.15});
reveals.forEach(el=>io.observe(el));

const lines=[
'> INITIALIZING SYSTEM DIAGNOSIS...',
'Banks ................. DETECTED',
'Inflation ............. DETECTED',
'Endless debt .......... DETECTED',
'Financial dependency . DETECTED',
'',
'> SYSTEM STATUS: CORRUPT',
'> LAUNCHING FFF PROTOCOL...',
'ACCESS GRANTED.',
'WELCOME TO THE RESISTANCE.'
];
const out=document.getElementById('terminalText');
let running=false;
function runTerminal(){if(running)return;running=true;out.textContent='';let li=0,ci=0;const tick=()=>{if(li>=lines.length){running=false;return}if(ci<lines[li].length){out.textContent+=lines[li][ci++];setTimeout(tick,22)}else{out.textContent+='\n';li++;ci=0;setTimeout(tick,180)}};tick()}
document.getElementById('runTerminal').addEventListener('click',runTerminal);runTerminal();

const calc=()=>{const age=+document.getElementById('age').value||0;const saving=+document.getElementById('saving').value||0;const target=+document.getElementById('target').value||0;const yrs=saving>0?Math.ceil(target/(saving*12)):0;document.getElementById('years').textContent=saving>0?`${yrs} years`:'No path yet'};
document.getElementById('freedomCalc').addEventListener('input',calc);calc();
