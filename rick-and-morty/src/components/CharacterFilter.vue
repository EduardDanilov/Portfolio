<template>
    <div class="filter-box">
        <label for="name" class="label">Введите имя:</label>
        <input v-model.trim="localCharacterName" type="text" name="characterName" id="name" />
        <label for="status" class="label">Выберите статус:</label>
        <select v-model="localCharacterStatus" id="status">
            <option value=""></option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        <button @click="applyFilters">Применить</button>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: "CharacterFilter",
    setup() {
        const store = useStore();
        const localCharacterName = ref('');
        const localCharacterStatus = ref('');

        // функция, формирующая запрос к API
        const applyFilters = () => {
            let query = 'https://rickandmortyapi.com/api/character/'; //обнуление запроса
            if (localCharacterName.value) {
                query += `?name=${localCharacterName.value}`;
            }
            if (localCharacterStatus.value) {
                query += `${query.includes('?') ? '&' : '?'}status=${localCharacterStatus.value}`;
            }

            store.commit('setQueryToApi', query);
            store.dispatch('fetchFilteredApiData');
        };

        return {
            localCharacterName,
            localCharacterStatus,
            applyFilters
        };
    }
};
</script>

<style scoped>
.label {
    color: #fff;
}
</style>