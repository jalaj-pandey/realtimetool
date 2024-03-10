<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Optional: Add global styles */
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
</style>




<!-- index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Real-Time Collaboration Tool</title>
</head>
<body>
  <textarea id="editor" rows="10" cols="50"></textarea>

  <script src="https://cdn.socket.io/4.1.3/socket.io.min.js"></script>
  <script>
    const socket = io('http://localhost:3000');

    const editor = document.getElementById('editor');

    // Listen for document changes
    socket.on('documentChange', ({ docId, content }) => {
      if (editor.dataset.docId === docId) {
        editor.value = content;
      }
    });

    // Get initial document data
    socket.emit('getDocument', 'document1');
    socket.on('getDocument', ({ docId, content }) => {
      editor.value = content;
      editor.dataset.docId = docId;
    });

    // Handle editor changes
    editor.addEventListener('input', () => {
      const docId = editor.dataset.docId;
      const content = editor.value;
      socket.emit('documentChange', { docId, content });
    });
  </script>
</body>
</html> -->
