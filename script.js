const insert = document.getElementById('wrapper')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="key">
           ${e.key === ' ' ? 'Space' : e.key}
           <small>event.key</small>
       </div>
       <div class="key">
           ${e.keyCode}
           <small>event.keycode</small>
       </div>
       <div class="key">
           ${e.code}
           <small>event.code</small>
       </div>
    `
})