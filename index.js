<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Matthias</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  <style>
    :root {
      --bg: #000; --text: #fff;
      --box-bg: rgba(255,255,255,0.05);
      --border: rgba(255,255,255,0.15);
      --footer-bg: rgba(255,255,255,0.04);
      --hover: #7289da;
    }
    .light {
      --bg: #f4f4f4; --text: #111;
      --box-bg: rgba(0,0,0,0.05);
      --border: rgba(0,0,0,0.1);
      --footer-bg: rgba(0,0,0,0.05);
      --hover: #555;
    }
    * { box-sizing:border-box; transition: background 0.5s, color 0.5s; }
    body { margin:0; padding:0 20px; background:var(--bg); color:var(--text);
      font-family:-apple-system, BlinkMacSystemFont, "San Francisco","Helvetica Neue", Helvetica, Arial, sans-serif;
      min-height:100vh; display:flex; flex-direction:column; align-items:center;
      text-align:center; overflow-x:hidden;
    }
    header { position:fixed; top:0; width:100%; display:flex; justify-content:flex-end; align-items:center;
      background:var(--bg); padding:10px 20px; z-index:10;
    }
    #themeTog { background:none; border:none; color:var(--text); font-size:1.6rem; cursor:pointer; margin-right:10px; }
    #menuBtn { background:none; border:none; color:var(--text); font-size:1.8rem; cursor:pointer; display:none; }
    nav { margin-top:70px; }
    nav ul { list-style:none; padding:0; margin:0; display:flex; gap:20px; }
    nav a { color:var(--text); text-decoration:none; font-weight:500; }
    .social { display:flex; gap:20px; animation:fadeSlide 1.4s ease forwards; opacity:0; margin:30px 0; }
    .social a { color:var(--text); font-size:2rem; transition:color 0.3s; }
    .social a:hover { color:var(--hover); }
    .glass { background:var(--box-bg); border-radius:16px; padding:30px 20px; width:90%; max-width:500px;
      backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
      border:1px solid var(--border); box-shadow:0 4px 30px rgba(0,0,0,0.5);
      font-size:1.2rem; font-weight:500; animation:fadeSlide 1.8s ease forwards; opacity:0;
    }
    h1 { font-size:3rem; margin-top:90px; animation:fadeSlide 1s ease forwards; opacity:0; }
    footer { position:fixed; bottom:0; width:100%; background:var(--footer-bg);
      border-top:1px solid var(--border); color:var(--text); text-align:center; padding:10px 0;
      font-size:0.9rem;
    }
    @keyframes fadeSlide {
      0% { transform:translateY(30px); opacity:0; }
      100% { transform:translateY(0); opacity:1; }
    }

    @media(max-width:768px){
      #menuBtn { display:block; }
      nav ul { display:none; flex-direction:column; background:var(--box-bg);
        position:fixed; top:50px; right:20px; width:160px; border:1px solid var(--border);
        backdrop-filter:blur(12px); padding:10px; border-radius:8px;
      }
      nav ul.open { display:flex; }
      h1 { font-size:2.5rem; margin-top:80px; }
      .social a { font-size:1.8rem; }
      .glass { font-size:1rem; padding:20px 15px; }
      footer { font-size:0.8rem; }
      #themeTog { font-size:1.4rem; margin-right:5px; }
    }
  </style>
</head>
<body>
  <header>
    <button id="themeTog" title="Tema Değiştir"><i class="fas fa-moon"></i></button>
    <button id="menuBtn" title="Menu"><i class="fas fa-bars"></i></button>
    <nav><ul id="menuList">
      <li><a href="#about">Hakkımda</a></li>
      <li><a href="#social">Sosyal</a></li>
    </ul></nav>
  </header>

  <h1>Matthias</h1>

  <div id="social" class="social">
    <a href="https://instagram.com/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="https://github.com/" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
    <a href="https://discord.com/users/TUA_DISCORD_ID" target="_blank" title="Discord"><i class="fab fa-discord"></i></a>
  </div>

  <div id="about" class="glass">
    Arda “Matthias” Saral
  </div>

  <footer>© 2025 Arda Saral</footer>

  <script>
    // Tema
    const bt = document.getElementById('themeTog'), i = bt.querySelector('i');
    const body = document.body;
    if(localStorage.theme === 'light') { body.classList.add('light'); i.classList.replace('fa-moon','fa-sun'); }
    bt.onclick = ()=>{
      const light = body.classList.toggle('light');
      i.classList.replace(light?'fa-moon':'fa-sun', light?'fa-sun':'fa-moon');
      localStorage.theme = light ? 'light' : 'dark';
    };

    // Menü
    const mb = document.getElementById('menuBtn'), ml = document.getElementById('menuList');
    mb.onclick = ()=> ml.classList.toggle('open');

    // Animasyon gecikmesi kaldırma (yayın sonrası)
    window.onload = ()=> {};
  </script>
</body>
</html>