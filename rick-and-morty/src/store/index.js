import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        selectedPage: 1, //первая отображаемая страница
        pagesCount: 0, // количество страниц (нужно для пагинации)
        charactersApiData: [], // данные о персонажах
        queryToApi: "https://rickandmortyapi.com/api/character/",
    },
    mutations: {
        setApiData(state, data) {
            state.charactersApiData = data;
        },
        setPagesCount(state, data) {
            state.pagesCount = data;
        },
        setSelectedPage(state, data) {
            state.selectedPage = data;
        },
        setQueryToApi(state, data) {
            state.queryToApi = data;
        },
    },
    actions: {
        // функция получения данных при загрузке страницы
        async fetchApiData({ commit }) {
            const response = await axios.get(
                `https://rickandmortyapi.com/api/character/?page=${this.state.selectedPage}`
            );

            const characters = response.data.results.map(async (character) => {
                const { id, name, status, species, episode, location, image } =
                    character;
                const episodeResponse = await axios.get(episode[0]);
                const episodeData = episodeResponse.data;
                const episodeName = episodeData.name;
                return {
                    id,
                    name,
                    status,
                    species,
                    location,
                    image,
                    episodeName,
                };
            });

            const resolvedCharacters = await Promise.all(characters);

            commit("setPagesCount", response.data.info.pages);
            commit("setApiData", resolvedCharacters);
        },

        // функция получения данных при фильтрации
        async fetchFilteredApiData({ commit }) {
            try {
                const response = await axios.get(this.state.queryToApi);

                if (response.data.results) {
                    const characters = response.data.results.map(
                        async (character) => {
                            const {
                                id,
                                name,
                                status,
                                species,
                                episode,
                                location,
                                image,
                            } = character;
                            const episodeResponse = await axios.get(episode[0]);
                            const episodeData = episodeResponse.data;
                            const episodeName = episodeData.name;
                            return {
                                id,
                                name,
                                status,
                                species,
                                location,
                                image,
                                episodeName,
                            };
                        }
                    );

                    const resolvedCharacters = await Promise.all(characters);

                    commit("setPagesCount", response.data.info.pages);
                    commit("setApiData", resolvedCharacters);
                }
            } catch (error) {
                console.log(error.code, "(Неверно заданы параметры фильтра)");
                console.log(error.message);
            }
        },
    },
    modules: {},
});
