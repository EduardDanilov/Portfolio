<template>
    <ul>
        <li
            class="li-element"
            v-for="(navElement, index) in navElements"
            :key="index"
        >
            <router-link :to="{path:navElement.link}">{{ navElement.name }}</router-link>
        </li>
    </ul>
</template>
<script>
export default {
    name: "NavList",
    data() {
        return {
            navElements: [
                {
                    id: 0,
                    name: "Home",
                    link: "/",
                },
                {
                    id: 1,
                    name: "Project",
                    link: "/About",
                },
                {
                    id: 2,
                    name: "Blog",
                    link: '/'
                },
            ],
        };
    },
};
</script>
<style>
ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 237px;
    height: 100%;
}
.li {
    display: block;
    height: 100%;
}
.li-element {
    color: #292f36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    display: block;
}
</style>
