<template>
  <div class="header-container center">
    <SiteLogo />
    <NavList />
  </div>
</template>
<script>
import SiteLogo from "./SiteLogo.vue";
import NavList from "./NavList.vue";
export default {
  name: "SiteHeader",
  components: {
    SiteLogo,
    NavList,
  },
};
</script>
<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 44px;
  margin-bottom: 57px;
  height: 63px;
}
</style>
