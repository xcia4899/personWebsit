export async function loadSvgSprite() {
  const svgSprite = document.getElementById("svgSprite");

  if (!svgSprite || svgSprite.children.length) return;

  const sprite = await fetch("./components/svg-sprite.html").then((res) =>
    res.text()
  );

  svgSprite.innerHTML = sprite;
}
