<template>
  <div>
    <h1>Home</h1>
    <Document :docId="'document1'" />
    <Document :docId="'document2'" />
  </div>
</template>

<script>
import Document from '@/components/Document.vue';

export default {
  components: {
    Document,
  },
};
</script>
