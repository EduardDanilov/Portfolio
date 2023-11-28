<template>
    <div class="container center">
        <div class="container-heading">
            <h2 class="heading article-heading-font-bigsize">
                Articles & News
            </h2>
            <p class="description article-text-font-bigsize">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using.
            </p>
        </div>

        <div class="articles-container">
            <div
                class="article"
                v-for="(article, index) in articles.slice(0, 3)"
                :key="index"
            >
                <div
                    class="article-background"
                    :style="{
                        width: '340px',
                        height: '306px',
                        marginBottom: '21px',
                        backgroundImage: `url(${article.backImg})`,
                    }"
                >
                    <div class="article-description-block">
                        <p class="article-description-text">
                            {{ article.description }}
                        </p>
                    </div>
                </div>
                <div class="article-heading article-text-font-mediumsize">
                    {{ article.heading }}
                </div>
                <div class="article-fnc-content">
                    <div class="article-fnc-text">{{ article.date }}</div>
                    <LinkButton />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LinkButton from "@/components/UI/LinkButton.vue";
export default {
    name: "ArticlesAndNewsSlider",
    components: {
        LinkButton,
    },

    data() {
        return {
            articles: [
                {
                    heading:
                        "Let’s Get Solution For Building Construction Work",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading:
                        "Let’s Get Solution For Building Construction Work",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading:
                        "Let’s Get Solution For Building Construction Work",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading:
                        "Let’s Get Solution For Building Construction Work",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading:
                        "Let’s Get Solution For Building Construction Work",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading:
                        "Let’s Get Solution For Building Construction Work",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading:
                        "Let’s Get Solution For Building Construction Work",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading:
                        "Let’s Get Solution For Building Construction Work",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
            ],
        };
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.container-heading {
    max-width: 811px;
    text-align: center;
}
.heading {
    margin-bottom: 12px;
}
.description {
    margin-bottom: 52px;
}

.articles-container {
    display: flex;
    gap: 27px;
}
.article {
    padding: 21px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);

    display: flex;
    flex-direction: column;
}
.article:hover {
    background: #F4F0EC;
}
.article-background {
    border-radius: 62px 62px 0 0;
    position: relative;
}
.article-description-block {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 124px;
    height: 41px;
    border-radius: 8px 8px 8px 0px;
    background: #fff;
}
.article-description-text {
    color: #4d5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;

    display: flex;
    width: 118px;
    height: 29px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 4px;
    margin-left: 11px;
}

.article-heading {
    margin-bottom: 30px;
}

.article-fnc-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.article-fnc-text {
    color: #4d5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}
</style>
