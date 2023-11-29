<template>
    <div class="home-page">
        <MainPageBanner />
        <FollowProjects />
        <CompanyStatistics />
        <ArticlesAndNewsSlider />
    </div>
</template>

<script>
import MainPageBanner from "@/components/PrivateComponents/HomePage/MainPageBanner.vue";
import ArticlesAndNewsSlider from "@/components/PrivateComponents/HomePage/ArticlesAndNewsSlider.vue";
import FollowProjects from "@/components/PrivateComponents/HomePage/FollowProjects.vue";
import CompanyStatistics from "@/components/PrivateComponents/HomePage/CompanyStatistics.vue";

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
