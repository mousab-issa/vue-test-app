<template>
  <div class="article">
    <p>
      {{ article.title }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "Article",
  props: ["article"],
};
</script>

<style scoped>
.article {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}
</style>
