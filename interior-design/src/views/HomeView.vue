<template>
    <div class="home-page">
        <MainPageBanner />
        <FollowProjects />
        <CompanyStatistics />
        <ArticlesAndNewsSlider />
    </div>
</template>

<script>
import MainPageBanner from "@/components/PrivateComponents/MainPageBanner.vue";
import ArticlesAndNewsSlider from "@/components/PrivateComponents/ArticlesAndNewsSlider.vue";
import FollowProjects from "@/components/PrivateComponents/FollowProjects.vue";
import CompanyStatistics from "@/components/PrivateComponents/CompanyStatistics.vue";

export default {
    name: "HomeView",
    components: {
        MainPageBanner,
        CompanyStatistics,
        FollowProjects,
        ArticlesAndNewsSlider,
    },
};
</script>
<style scoped>
.home-page {
    display: flex;
    flex-direction: column;
    gap: 96px;
    margin-bottom: 96px;
}
</style>
