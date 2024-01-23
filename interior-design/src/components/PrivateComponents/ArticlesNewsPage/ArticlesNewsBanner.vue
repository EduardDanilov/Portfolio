<template>
    <div class="container">
        <div class="banner-img"><ArticlesNewsPageBanner /></div>
        <div class="banner-nav"><BannerNavigation /></div>
    </div>
</template>

<script>
import BannerNavigation from "./BannerNavigation.vue";
import ArticlesNewsPageBanner from "./ArticlesNewsPageBanner.vue";
export default {
    name: "ProjectsBanner",
    components: {
    BannerNavigation,
    ArticlesNewsPageBanner
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
