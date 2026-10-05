const btn=document.getElementById('menuBtn');const nav=document.getElementById('nav');btn.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const themeToggle=document.getElementById('themeToggle');
const savedTheme=localStorage.getItem('theme');
if(savedTheme==='light'){document.body.classList.add('light');themeToggle.textContent='🌙';}
themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  const light=document.body.classList.contains('light');
  themeToggle.textContent=light?'🌙':'☀️';
  localStorage.setItem('theme',light?'light':'dark');
});
