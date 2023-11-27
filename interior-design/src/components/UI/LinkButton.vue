<template>
    <div>
        <svg
            width="52"
            height="53"
            viewBox="0 0 52 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="svg-img"
        >
            <circle
                cx="26"
                cy="26.267"
                r="26"
                fill="#F4F0EC"
                class="svg-circle"
            />
            <path
                d="M23.772 32.9527L29.7148 26.267L23.772 19.5813"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </div>
</template>

<script>
export default {
    name: "LinkButton",
};
</script>

<style scoped>
.svg-img:hover {
    .svg-circle {
        fill: white;
    }
}
</style>
