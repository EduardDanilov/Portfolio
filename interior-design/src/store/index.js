import { createStore } from "vuex";

const store = createStore({
    state() {
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
                    heading: "вторая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "третья",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "четвертая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "пятая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "шестая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "седьмая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "восьмая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "девятая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "десятая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "одиннадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "двенадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "тринадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "четырнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "пятнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "шестнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "семнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "восемнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "девятнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "двадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "двадцать первая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "двадцать вторая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "двадцать третья",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "двадцать четвертая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "двадцать пятая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "двадцать шестая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
                {
                    heading: "двадцать седьмая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                },
            ],
        };
    },
    mutations: {
        addArticle(state, article) {
            state.articles.push(article);
        },
    },
    actions: {
        addArticle(context, article) {
            context.commit("addArticle", article);
        },
    },
    getters: {
        getArticles(state) {
            return state.articles;
        },
    },
});

export default store;
