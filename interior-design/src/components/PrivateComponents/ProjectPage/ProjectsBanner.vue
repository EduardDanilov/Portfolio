<template>
    <div class="container">
        <div class="banner-img"><ProjectPageBanner /></div>
        <div class="banner-nav"><BannerNavigation /></div>
    </div>
</template>

<script>
import ProjectPageBanner from "./ProjectPageBanner";
import BannerNavigation from "./BannerNavigation.vue";
export default {
    name: "ProjectsBanner",
    components: {
        ProjectPageBanner,
        BannerNavigation,
    },
};
</script>

<style scoped>
.container {
    position: relative;
}
.banner-nav {
    position: absolute;
    z-index: 10;
    left: 50%;
    padding: 41px 125px;
    text-align: center;
    transform: translate(-50%, -50%);
    top: 75%;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
}
</style>
