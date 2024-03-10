<template>
  <div>
    <h1>Document: {{ docId }}</h1>
    <textarea v-model="content" @input="updateDocument"></textarea>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { io } from 'socket.io-client';

export default {
  props: {
    docId: String,
  },
  setup(props) {
    const socket = io();

    const content = ref('');

    onMounted(() => {
      // Example: Get initial document data
      socket.emit('getDocument', props.docId);
      socket.on('getDocument', (data) => {
        content.value = data.content;
      });

      // Example: Listen for changes in the document
      socket.on('documentChange', (data) => {
        if (data.docId === props.docId) {
          content.value = data.content;
        }
      });
    });

    const updateDocument = () => {
      // Example: Update document content
      socket.emit('documentChange', { docId: props.docId, content: content.value });
    };

    return {
      content,
      updateDocument,
    };
  },
};
</script>

<style scoped>
/* Optional: Add component-specific styles */
textarea {
  width: 100%;
  height: 200px;
}
</style>
