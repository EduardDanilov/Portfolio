<template>
    <div class="pagination">
      <button @click="changePage(selectedPage - 1)" :disabled="selectedPage <= 1">Previous</button>
      <template v-for="page in getPageRange" :key="page">
        <button @click="changePage(page)" :class="{'active': page === selectedPage}">{{ page }}</button>
      </template>
      <button @click="changePage(selectedPage + 1)" :disabled="selectedPage >= pagesCount">Next</button>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: "PagePagination",
    props: {
      selectedPage: Number,
      pagesCount: Number
    },
    setup(props, { emit }) {
      const changePage = (pageNumber) => {
        emit('page-changed', pageNumber);
      };
  
      const getPageRange = computed(() => {
        const start = Math.max(props.selectedPage - 5, 1);
        const end = Math.min(props.pagesCount, props.selectedPage + 5);
        return Array.from({ length: end - start + 1 }, (_, index) => start + index);
      });
  
      return { changePage, getPageRange };
    }
  };
  </script>
  
  <style>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button {
    margin: 0 5px;
  }
  
  .active {
    font-weight: bold;
  }
  </style>