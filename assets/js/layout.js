export async function loadLayout() {
  const header = await fetch("./components/header.html").then((res) =>
    res.text()
  );

  document.getElementById("header").innerHTML = header;

  const footer = await fetch("./components/footer.html").then((res) =>
    res.text()
  );

  document.getElementById("footer").innerHTML = footer;
}