(function(){
  const KEY = 'nagu_button_color';
  const colorInput = document.getElementById('colorInput');
  const applyBtn = document.getElementById('applyBtn');
  const randomBtn = document.getElementById('randomBtn');
  const resetBtn = document.getElementById('resetBtn');

  function setColor(color){
    document.documentElement.style.setProperty('--btn-bg', color);
    localStorage.setItem(KEY, color);
  }

  function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // init
  const saved = localStorage.getItem(KEY);
  if(saved){
    setColor(saved);
    try{ colorInput.value = rgbToHex(getComputedStyle(document.documentElement).getPropertyValue('--btn-bg').trim()); }catch(e){}
  } else {
    // ensure css var has a default
    setColor(getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#60a5fa');
  }

  applyBtn.addEventListener('click',()=>{
    const val = colorInput.value;
    setColor(val);
  });

  randomBtn.addEventListener('click',()=>{
    const c = randomColor();
    setColor(c);
  });

  resetBtn.addEventListener('click',()=>{
    localStorage.removeItem(KEY);
    const defaultCol = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#60a5fa';
    setColor(defaultCol);
    if(colorInput) colorInput.value = '#60a5fa';
  });

  // helper: convert rgb(...) to hex if needed
  function rgbToHex(rgb){
    // rgb can be e.g. "rgb(96,165,250)" or hex already
    if(!rgb) return '#60a5fa';
    rgb = rgb.replace(/\s+/g,'');
    if(rgb.startsWith('#')) return rgb;
    const m = rgb.match(/rgb\((\d+),(\d+),(\d+)\)/i);
    if(!m) return '#60a5fa';
    return "#" + [1,2,3].map(i=>parseInt(m[i]).toString(16).padStart(2,'0')).join('');
  }
})();