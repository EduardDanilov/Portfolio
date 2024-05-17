<template>
    <div class="page-wrapper">
        <CharacterFilter />
        <div class="characters-container">
            <SingleCharacter
                v-for="character in apiData"
                :key="character.id"
                :character="character"
            />
        </div>
        <PagePagination
            :selectedPage="selectedPage"
            :pagesCount="pagesCount"
            @page-changed="handlePageChange"
        />
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import SingleCharacter from "./SingleCharacter.vue";
import CharacterFilter from "./CharacterFilter.vue";
import PagePagination from "./PagePagination.vue";

export default {
    name: "RickAndMortyCharacters",
    components: {
        SingleCharacter,
        CharacterFilter,
        PagePagination,
    },
    setup() {
        const store = useStore();
        const apiData = computed(() => store.state.charactersApiData);
        const selectedPage = computed(() => store.state.selectedPage);
        const pagesCount = computed(() => store.state.pagesCount);

        const handlePageChange = (pageNumber) => {
            store.commit("setSelectedPage", pageNumber);
            store.dispatch("fetchApiData");
        };

        return {
            apiData,
            selectedPage,
            pagesCount,
            handlePageChange,
        };
    },
};
</script>

<style scoped>
.characters-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1920px;
}
.page-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
</style>
