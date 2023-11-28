<template>
    <div>
        <GlobalStyles />
        <SiteHeader />
        <router-view />
        <SiteFooter />
    </div>
</template>
<script>
import SiteHeader from "@/components/GlobalComponents/SiteHeader/SiteHeader.vue";
import SiteFooter from "@/components/GlobalComponents/SiteFooter/SiteFooter.vue";
import GlobalStyles from "@/components/GlobalComponents/GlobalStyles.vue";

export default {
    name: "App",
    components: {
        GlobalStyles,
        SiteHeader,
        SiteFooter,
    },
    data() {
        return {};
    },
};
</script>
<style>
</style>
