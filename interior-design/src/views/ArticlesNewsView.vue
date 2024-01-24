<template>
    <div class="articles-news-wrapper">
        <ArticlesNewsBanner />
        <div class="articles-news-content">
            <LatestArticle />
            <ArticlesNewsContent />
        </div>
    </div>
</template>
<script>
import ArticlesNewsBanner from "@/components/PrivateComponents/ArticlesNewsPage/ArticlesNewsBanner.vue";
import ArticlesNewsContent from "@/components/PrivateComponents/ArticlesNewsPage/ArticlesNewsContent.vue";
import LatestArticle from "@/components/PrivateComponents/ArticlesNewsPage/LatestArticle.vue";

export default {
    name: "ProjectsView",
    components: {
        ArticlesNewsBanner,
        ArticlesNewsContent,
        LatestArticle
    },
};
</script>
<style scoped>
.articles-news-content {
  margin-top: 200px;
  margin-bottom: 200px;
}
</style>
