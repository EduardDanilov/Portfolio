<template>
    <div class="container center">
        <div class="container-heading">
            <router-link :to="{ path: '/projects' }">
                <h2 class="heading article-heading-font-bigsize">
                    Follow Our Projects
                </h2>
            </router-link>
            <p class="description article-text-font-bigsize">
                It is a long established fact that a reader will be distracted
                by the of readable <br />
                content of page lookings at its layouts points.
            </p>
        </div>

        <div class="projects-container">
            <div
                class="project"
                v-for="(project, index) in projects"
                :key="index"
            >
                <div class="project-container-image">
                    <img
                        :src="project.backImg"
                        :class="[
                            index === 0
                                ? 'project-img first-img-rounding'
                                : 'project-img',
                            index === 1
                                ? 'project-img second-img-rounding'
                                : 'project-img',
                            index === 2
                                ? 'project-img third-img-rounding'
                                : 'project-img',
                            index === 3
                                ? 'project-img fourth-img-rounding'
                                : 'project-img',
                        ]"
                    />
                </div>
                <div class="project-fnc-content">
                    <div class="project-fnc-box">
                        <div
                            class="project-fnc-heading article-text-font-mediumsize"
                        >
                            {{ project.heading }}
                        </div>
                        <div
                            class="project-fnc-text article-text-font-standard"
                        >
                            {{ project.text }}
                        </div>
                    </div>
                    <LinkButton />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LinkButton from "@/components/UI/LinkButton.vue";
export default {
    name: "FollowProjects",
    components: {
        LinkButton,
    },

    data() {
        return {
            projects: [
                {
                    heading: "Modern Kitchan",
                    backImg: require("@/assets/img/project-icon-1.jpg"),
                    text: "Decor / Artchitecture",
                    class: "image-image",
                },
                {
                    heading: "Modern Kitchan",
                    backImg: require("@/assets/img/project-icon-1.jpg"),
                    text: "Decor / Artchitecture",
                },
                {
                    heading: "Modern Kitchan",
                    backImg: require("@/assets/img/project-icon-1.jpg"),
                    text: "Decor / Artchitecture",
                },
                {
                    heading: "Modern Kitchan",
                    backImg: require("@/assets/img/project-icon-1.jpg"),
                    text: "Decor / Artchitecture",
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
    max-width: 737px;
    text-align: center;
    margin-bottom: 93px;
}
.heading {
    margin-bottom: 12px;
}

.projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 56px;
}
.project {
    max-width: 530px;
}

.project:hover {
    cursor: pointer;
}

.project-container-image {
    max-width: 100%;
    margin-bottom: 24px;
}

.project-img {
    max-width: 100%;
}
.project-heading {
    margin-bottom: 30px;
}

.project-fnc-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.project-fnc-content:hover {
    border-radius: 0 30px 30px 0;
    background: #cda274;
    transition: 1.5s;
}
.first-img-rounding {
    border-radius: 0 20% 0 0;
}
.second-img-rounding {
    border-radius: 20% 0 0 0;
}
.third-img-rounding {
    border-radius: 0 0 20% 0;
}
.fourth-img-rounding {
    border-radius: 0 0 0 20%;
}
</style>
