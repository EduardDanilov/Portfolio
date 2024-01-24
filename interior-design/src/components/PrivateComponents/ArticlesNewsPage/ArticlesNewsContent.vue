<template>
    <div class="container center">
        <div class="container-heading">
            <h2 class="heading article-heading-font-bigsize">
                <router-link :to="{ path: 'articles-news' }"
                    >Articles & News</router-link
                >
            </h2>
        </div>

        <div class="articles-container">
            <div
                class="article"
                v-for="(article, index) in displayedArticles.slice(
                    startIndex,
                    endIndex
                )"
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

        <!-- Компоненты пагинации -->
        <div class="pagination">
            <div
                v-if="currentPage > 1"
                class="circle"
                @click="changePage(currentPage - 1)"
            >
                <span class="material-symbols-outlined"> chevron_left </span>
            </div>

            <div
                v-for="pageNumber in paginationNumbers"
                :key="pageNumber"
                class="circle"
                :class="{ active: pageNumber === currentPage }"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>

            <div v-if="showEllipsis" class="ellipsis">...</div>

            <div
                v-if="shouldShowNextArrow"
                class="circle"
                @click="changePage(currentPage + 1)"
            >
                <span class="material-symbols-outlined"> chevron_right </span>
            </div>
        </div>
    </div>
</template>

<script>
import LinkButton from "@/components/UI/LinkButton.vue";
import { mapState } from "vuex";

export default {
    name: "ArticlesAndNewsContent",
    components: {
        LinkButton,
    },
    computed: {
        ...mapState(["articles"]),
        // Вычисляемое свойство, возвращающее статьи для отображения на текущей странице
        displayedArticles() {
            const startIndex = (this.currentPage - 1) * this.articlesPerPage;
            const endIndex = startIndex + this.articlesPerPage;
            return this.articles.slice(startIndex, endIndex);
        },
        // Вычисляемое свойство, возвращающее массив номеров страниц для пагинации
        paginationNumbers() {
            const totalPages = Math.ceil(
                this.articles.length / this.articlesPerPage
            );
            const startPage = Math.max(
                1,
                this.currentPage - this.maxPaginationNumbers + 1
            );
            const endPage = Math.min(
                startPage + this.maxPaginationNumbers - 1,
                totalPages
            );

            return Array.from(
                { length: endPage - startPage + 1 },
                (_, i) => startPage + i
            );
        },
        // Вычисляемое свойство, указывающее, должно ли отображаться многоточие
        showEllipsis() {
            const totalPages = Math.ceil(
                this.articles.length / this.articlesPerPage
            );
            return totalPages > this.maxPaginationNumbers;
        },
        // Вычисляемое свойство, указывающее, следует ли показывать стрелку вправо
        shouldShowNextArrow() {
            const totalPages = Math.ceil(
                this.articles.length / this.articlesPerPage
            );
            return this.currentPage < totalPages;
        },
    },
    data() {
        return {
            currentPage: 1,
            articlesPerPage: 6,
            maxPaginationNumbers: 3,
        };
    },
    methods: {
        changePage(newPage) {
            this.currentPage = newPage;
        },
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
    display: flex;
    justify-content: center;
}
.description {
    margin-bottom: 52px;
}

.articles-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
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
    cursor: pointer;
}
.article:hover {
    background: #f4f0ec;
}
.article-background {
    border-radius: 62px 62px 0 0;
    position: relative;
    background-position: center center;
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

/* Пагинация */
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 51px;
}

.circle {
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #cda274;
    color: #292f36;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    text-transform: capitalize;
}
.circle.active {
    background-color: #f4f0ec;
    border: none;
}
.material-symbols-outlined {
    color: #292f36;
    font-size: 30px;
    font-weight: 500;
}
</style>
