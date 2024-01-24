import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            articles: [
                {
                    heading: "Let’s Get Solution For Building Construction Work",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "вторая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "третья",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "четвертая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "пятая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "шестая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "седьмая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "восьмая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "девятая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "десятая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "одиннадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "двенадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "тринадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "четырнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "пятнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "шестнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "семнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "восемнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "девятнадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "двадцатая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "двадцать первая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "двадцать вторая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "двадцать третья",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "двадцать четвертая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "двадцать пятая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "двадцать шестая",
                    backImg: require("@/assets/img/kitchen-photo.jpg"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                },
                {
                    heading: "Low Cost Latest Invented Interior Designing Ideas",
                    backImg: require("@/assets/img/article-kitchen-back-img.png"),
                    date: "26 December,2022 ",
                    description: "Kitchan Design",
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
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
