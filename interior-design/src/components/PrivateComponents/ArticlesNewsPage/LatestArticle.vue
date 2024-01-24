<template>
    <div
        class="post-container center"
        v-for="(article, index) in articles.slice(-1)"
        :key="index"
    >
        <h2 class="post-heading article-heading-font-bigsize">Latest Post</h2>
        <div class="post-content">
            <div
                class="post-img"
                :style="{ backgroundImage: `url(${article.backImg})` }"
            ></div>
            <div class="post-text">
                <h3 class="text-heading article-text-font-mediumsize">
                    {{ article.heading }}
                </h3>
                <p class="text-content article-text-font-standard">
                    {{ article.text }}
                </p>
                <div class="fnc-area">
                    <p class="date article-date-standard">{{ article.date }}</p>
                    <LinkButton />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LinkButton from "@/components/UI/LinkButton.vue";
import { mapState } from "vuex";
export default {
    name: "LatestArticle",

    components: {
        LinkButton,
    },

    computed: {
        ...mapState(["articles"]),
    },

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style scoped>
.post-container {
    margin-bottom: 150px;
}
.post-heading {
    margin-bottom: 27px;
}
.post-content {
    display: flex;
    align-items: center;
    gap: 65px;
    padding: 22px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}
.post-img {
    width: 569px;
    height: 478px;
    flex-shrink: 0;
    background-size: cover;
    background-position: center center;
    border-radius: 50px;
}
.post-text {
    display: flex;
    flex-direction: column;
}
.text-heading {
    margin-bottom: 22px;
}
.text-content {
    margin-bottom: 41px;
}
.fnc-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
