function handleFile() {
  const fileInput = document.getElementById("fileInput");
  const preview = document.getElementById("preview");
  const info = document.getElementById("info");

  const file = fileInput.files[0];
  if (!file) return;

  info.innerText = `File: ${file.name} (${Math.round(file.size / 1024)} KB)`;
  preview.innerHTML = "";

  if (file.type.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
  } else {
    preview.innerText = "Preview not available";
  }
}
