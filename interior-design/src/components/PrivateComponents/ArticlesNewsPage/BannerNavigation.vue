<template>
    <div>
        <div class="nav-content center">
            <div class="nav-heading article-heading-font-bigsize">
                Articles & News
            </div>
            <div class="nav-links">
                <p class="nav-home article-text-font-standard">Home</p>
                <div class="divide article-text-font-standard">&nbsp;/&nbsp;</div>
                <p class="nav-projects article-text-font-standard">Articles & News</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BannerNavigation",

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style scoped>
.nav-content {
    display: flex;
    flex-direction: column;
    /* align-content: center; */
    align-items: center;
}
.nav-links {
    display: flex;
    align-items: center;
}
</style>
