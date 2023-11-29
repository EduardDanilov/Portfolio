<template>
    <div>
        <a :href="link">
            <button class="button">
                <p>{{ buttonName }}</p>
                <svg
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        class="svg-path"
                        d="M1 8.43536L14.7232 8.29851M9.61818 1.91132L16.1412 8.4343L9.48677 15.0887"
                        stroke="#292F36"
                        stroke-width="2"
                        stroke-linecap="square"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </a>
    </div>
</template>

<script>
export default {
    name: "DefaultButton",
    props: {
        buttonName: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.button {
    width: max-content;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 26px 54px;
    border-radius: 18px;
    background: #cda274;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
}

.button p {
    color: #fff;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%; /* 22.5px */
    letter-spacing: 0.36px;
}

.button:hover {
    background: #292f36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
    cursor: pointer;

    .svg-path {
        stroke: #cda274;
    }
}
</style>
