<template>
    <div>
        <div class="container center">
            <p class="bathroom link">Bathroom</p>
            <p class="bedroom link">Bedroom</p>
            <p class="kitchen link">Kitchen</p>
            <p class="living-area link">Living Area</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectSamplesNavigation",

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style scoped>
.container {
    width: 880px;
    height: 75px;
    display: flex;
    align-items: center;
    border-radius: 18px;
    border: 1px solid #cda274;
    justify-content: space-around;
}
.link {
    color: #292f36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.link:hover {
    /* padding: 0 65px; */
    border-radius: 18px;
    background: #cda274;
    cursor: pointer;
}
</style>
