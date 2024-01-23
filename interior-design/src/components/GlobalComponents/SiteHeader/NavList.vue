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
                    link: "projects",
                },
                {
                    id: 2,
                    name: "Blog",
                    link: 'blog'
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
    height: 100%;
}
a {
    display: flex;
    align-items: center;
    height: 100%;
}
a:active, a:visited {
    color: #292f36;
}
.li-element {
    color: #292f36;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    height: 100%;
    padding: 0 25px;
    border-radius: 30px;
}
.li-element:hover {
    transition: 1s;
    background: #CDA274;
}
</style>
