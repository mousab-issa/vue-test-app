<template>
  <div>
    <div v-if="isLoading">
      <h1>loading ...</h1>
    </div>
    <div v-else v-bind:key="article.id" v-for="article in getArticles">
      <Article v-bind:article="article" />
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import Article from "../ArticlesCard/Article.vue";

export default {
  components: {
    Article,
  },
  name: "ArticleManager",
  props: ["articles"],
  methods: {
    ...mapActions(["fetchArticles"]),
  },
  computed: mapGetters(["getArticles", "isLoading"]),
  created() {
    this.fetchArticles();
  },
};
</script>

<style scoped></style>
