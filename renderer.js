function save() {
    const text = document.getElementById('note').value;
    window.electronAPI.saveText(text);
  }
  