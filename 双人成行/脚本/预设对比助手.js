var V = "v2.7.7";
fetch(`https://cdn.jsdelivr.net/gh/hejianzi/83rd_Fire_UAF@${V}/indexxx.js`)
  .then((r) => r.text())
  .then((c) => {
    document.querySelectorAll("script[data-uaf]").forEach((s) => {
      s.remove();
    });
    var s = document.createElement("script");
    s.dataset.uaf = 1;
    s.textContent = `${c}\n//#sourceURL=UAF_${V}.js`;
    document.head.appendChild(s);
    console.log(`[UAF] ${V} 已加载`);
  });
