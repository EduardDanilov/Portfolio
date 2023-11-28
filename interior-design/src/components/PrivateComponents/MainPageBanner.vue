<template>
    <div>
        <div class="container center">
            <div class="intro">
                <div class="intro-content">
                    <h1 class="intro-heading">{{ heading }}</h1>
                    <p class="intro-text article-text-font-bigsize">{{ text }}</p>
                </div>
                <div class="button">
                    <DefaultButton :buttonName="'Get Started'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DefaultButton from "../UI/DefaultButton.vue";

export default {
    name: "MainPageBanner",
    data() {
        return {
            heading: "Let Your Home Be Unique",
            text: "There are many variations of the passages of lorem Ipsum fromavailable, majority.",
        };
    },
    mounted() {},
    methods: {},
    components: { DefaultButton },
};
</script>

<style scoped>
.container {
    height: 758px;
    background-image: url("../../assets/img/main-page-banner.jpg");
    background-position: center;
    background-position-y: -450px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 70px;
    display: flex;
    align-items: center;
}

.intro {
    margin-left: 50px;
    max-width: 435px;
    display: flex;
    flex-direction: column;
    gap: 21px;
}
.intro-content {
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.intro-heading {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 65px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 81.25px */
}
</style>
