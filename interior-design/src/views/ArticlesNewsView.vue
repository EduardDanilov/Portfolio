<template>
    <div class="articles-news-wrapper">
        <ArticlesNewsBanner />
        <div class="articles-news-content">
            <ArticlesNewsContent />
        </div>
    </div>
</template>
<script>
import ArticlesNewsBanner from "@/components/PrivateComponents/ArticlesNewsPage/ArticlesNewsBanner.vue";
import ArticlesNewsContent from "@/components/PrivateComponents/ArticlesNewsPage/ArticlesNewsContent.vue";
export default {
    name: "ProjectsView",
    components: {
        ArticlesNewsBanner,
        ArticlesNewsContent
    },
};
</script>
<style scoped>
.articles-news-content {
  margin-top: 200px;
  margin-bottom: 200px;
}
</style>
