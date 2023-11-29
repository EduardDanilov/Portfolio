<template>
    <div>
        <div class="wrapper">
            <div class="image-block"></div>
            <div class="page-content center">
                <div class="text-block">
                    <div class="error-code">404</div>
                    <div class="error-description">
                        We are sorry, but the page you requested was not found
                    </div>
                    <div class="button">
                        <DefaultButton buttonName="Back To Home" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DefaultButton from "@/components/UI/DefaultButton.vue";
export default {
    name: "ErrorView",
    components: {
        DefaultButton,
    },

    data() {
        return {};
    },

    mounted() {},

    methods: {},
};
</script>

<style scoped>
.text-block {
    max-width: 400px;
    display: flex;
    flex-direction: column;
}
.error-code {
    margin-top: 350px;
    margin-bottom: 15px;

    display: flex;
    width: 395px;
    height: 172px;
    flex-direction: column;
    justify-content: center;

    color: #cda274;
    font-family: DM Serif Display;
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 312.5px */
}

.error-description {
    margin-bottom: 23px;

    display: flex;
    width: 569px;
    height: 139px;
    flex-direction: column;
    justify-content: center;

    color: #292f36;
    font-family: DM Serif Display;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 52.5px */
    letter-spacing: 0.35px;
}
.image-block {
    height: 1042px;
    width: 50vw;
    background-image: url("../assets/img/error-page.png");
    background-size: cover;
    border-radius: 0 0 0 30%;
    position: absolute;
    left: 50%;
}
</style>
