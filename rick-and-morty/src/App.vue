<template>
    <section class="main-content"><RickAndMortyCharacters /></section>
</template>

<script>
import RickAndMortyCharacters from "./components/RickAndMortyCharacters.vue";

export default {
    name: "App",
    components: {
        RickAndMortyCharacters,
    },
    methods: {},
    created() {
        this.$store.dispatch("fetchApiData");
    },
};
</script>

<style lang="scss">
.main-content {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 4.5rem 0px;
    background: rgb(39, 43, 51);
    min-height: calc(-60px + 50vh);
}
</style>
