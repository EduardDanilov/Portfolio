<template>
    <div class="wrapper">
        <div class="content center">
            <div class="statistics-element">
                <div class="stat-el-digit">{{ yearsOfExperience }}</div>
                <div class="stat-el-text article-text-font-smallsize">Years Of Experience</div>
            </div>
            <div class="divider"></div>
            <div class="statistics-element">
                <div class="stat-el-digit">{{ successProjects }}</div>
                <div class="stat-el-text article-text-font-smallsize">Success Projects</div>
            </div>
            <div class="divider"></div>

            <div class="statistics-element">
                <div class="stat-el-digit">{{ activeProjects }}</div>
                <div class="stat-el-text article-text-font-smallsize">Active Projects</div>
            </div>
            <div class="divider"></div>
            <div class="statistics-element">
                <div class="stat-el-digit">{{ happyCustomers }}</div>
                <div class="stat-el-text article-text-font-smallsize">
                    Happy Customers
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CompanyStatistics",

    data() {
        return {
            yearsOfExperience: 12,
            successProjects: 85,
            activeProjects: 15,
            happyCustomers: 95,
        };
    },
};
</script>

<style scoped>
.wrapper {
    height: 457px;
    background: #f4f0ec;
    display: flex;
    align-items: center;
}
.content {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.divider {
    width: 1px;
    height: 130px;
    background: #cda274;
}
.statistics-element {
    text-align: center;
}
.stat-el-digit {
    margin-bottom: 16px;
    color: #cda274;
    font-family: DM Serif Display;
    font-size: 85px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 106.25px */
    letter-spacing: 1.7px;
}
</style>
