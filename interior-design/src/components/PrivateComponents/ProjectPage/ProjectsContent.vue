<template>
    <div>
        <div class="container center">
            <div
                class="project"
                v-for="{ id, title, category, image } in projects"
                :key="id"
            >
                <div class="project-image">
                    <img :src="image" class="image" />
                </div>
                <div class="project-fnc">
                    <div class="project-fnc-text">
                        <div class="project-fnc-heading article-text-font-mediumsize">{{ title }}</div>
                        <div class="project-fnc-category article-text-font-standard">{{ category }}</div>
                    </div>
                    <div class="project-nfc-button">
                        <LinkButton />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LinkButton from "@/components/UI/LinkButton.vue";
export default {
    name: "ProjectsContent",
    components: {
        LinkButton,
    },
    data() {
        return {
            projects: [
                {
                    id: 0,
                    title: "Minimal Bedroom",
                    category: "Decor / Artchitecture",
                    image: require("@/assets/img/bedroom-1.png"),
                    isFavorite: false,
                },
                {
                    id: 1,
                    title: "Minimal Bedroom",
                    category: "Decor / Artchitecture",
                    image: require("@/assets/img/bedroom-2.jpg"),
                    isFavorite: false,
                },
                {
                    id: 2,
                    title: "Classic Minimal Bedroom",
                    category: "Decor / Artchitecture",
                    image: require("@/assets/img/bedroom-3.jpg"),
                    isFavorite: false,
                },
                {
                    id: 3,
                    title: "Modern Bedroom",
                    category: "Decor / Artchitecture",
                    image: require("@/assets/img/bedroom-4.png"),
                    isFavorite: false,
                },
                {
                    id: 4,
                    title: "Minimal Bedroom table",
                    category: "Decor / Artchitecture",
                    image: require("@/assets/img/bedroom-5.jpg"),
                    isFavorite: false,
                },
                {
                    id: 5,
                    title: "System Table",
                    category: "Decor / Artchitecture",
                    image: require("@/assets/img/bedroom-6.jpg"),
                    isFavorite: false,
                },
                {
                    id: 6,
                    title: "Modern Medroom",
                    category: "Decor / Artchitecture",
                    image: require("@/assets/img/bedroom-7.jpg"),
                    isFavorite: false,
                },
                {
                    id: 7,
                    title: "Modern Bedroom",
                    category: "Decor / Artchitecture",
                    image: require("@/assets/img/bedroom-8.jpg"),
                    isFavorite: false,
                },
                {
                    id: 8,
                    title: "Minimal Bedroom",
                    category: "Decor / Artchitecture",
                    image: require("@/assets/img/bedroom-9.jpg"),
                    isFavorite: false,
                },
            ],
        };
    },

    mounted() {},

    methods: {},
};
</script>

<style scoped>
.container {
    margin-top: 61px;
    margin-bottom: 61px;
    
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, minmax(585px, 1fr));
    grid-auto-flow: dense;
    justify-items: center;
    grid-auto-rows: min-content;
}
.project-image {
    max-width: 585px;
}
.image {
    width: 100%;
}
.project-fnc {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
