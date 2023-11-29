<template>
    <div>
        <ProjectSamplesNavigation/>
        <ProjectsContent/>
    </div>
</template>

<script>
import ProjectSamplesNavigation from './ProjectSamplesNavigation.vue';
import ProjectsContent from './ProjectsContent.vue'
export default {
    name: 'ProjectsSamples',
    components: {
        ProjectSamplesNavigation,
        ProjectsContent
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>