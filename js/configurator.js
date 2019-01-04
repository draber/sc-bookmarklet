(function(d) {
  
  const uEl = document.body.classList.contains('delivery-scope') 
            ? '.settings-menu [data-control="home"]~.infoControl .a>span:nth-of-type(2)'
            : '.li-user_settings .username';
  
  const els  = {
    v: d.querySelector('footer .tao-version'),
    u: d.querySelector(uEl)
  };
  
  const dt = (() => {    
    const vf = els.v ? els.v.textContent : null;
    return {      
      vf: vf,
      vm: vf.split('-').shift(),
      u: els.u ? els.u.textContent : ''
    }
  })();
  
  const q = Object.keys(dt).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(dt[key])
  }).join('&');
  
  const url = 'https://draber.github.io/sc-bookmarklet/?' + q;  
  const w = window.open(url, 'ghw');
  window.addEventListener('message', function(e) {
    if (e.origin === (new URL(url)).origin) {
      console.log(e.data);
    }
  }, false);

})(document);
