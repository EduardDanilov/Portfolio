<template>
    <div class="projects-wrapper">
        <ProjectsBanner />
        <div class="projects-content">
            <ProjectsSamples />
        </div>
    </div>
</template>
<script>
import ProjectsBanner from "@/components/PrivateComponents/ProjectPage/ProjectsBanner.vue";
import ProjectsSamples from "@/components/PrivateComponents/ProjectPage/ProjectsSamples.vue";
export default {
    name: "ProjectsView",
    components: {
        ProjectsBanner,
        ProjectsSamples,
    },
};
</script>
<style scoped>
.projects-content {
  margin-top: 200px;
  margin-bottom: 200px;
}
</style>
