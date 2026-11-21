(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  try { var saved = localStorage.getItem('theme'); if (saved) root.setAttribute('data-theme', saved); } catch (e) {}
  btn.addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') === 'dark' ||
      (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // 50-day CodeChef streak: one square per day, filled in one sweep on load
  var grid = document.getElementById('grid');
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  for (var i = 0; i < 50; i++) {
    var cell = document.createElement('i');
    grid.appendChild(cell);
    if (calm) { cell.className = 'on'; }
    else { setTimeout((function (c) { return function () { c.className = 'on'; }; })(cell), 250 + i * 35); }
  }
  document.getElementById('year').textContent = new Date().getFullYear();
})();
