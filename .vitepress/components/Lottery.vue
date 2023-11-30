<template>
  <div class="mapping-component">
    <select v-model="selectedCategory">
      <option value="welfare">Welfare</option>
      <option value="sports">Sports</option>
    </select>

    <input type="text" v-model="inputValue" @input="filterMappings" maxlength="3">

    <ul v-if="filteredKeys">
      <li v-for="(value, key) in filteredKeys" :key="key"> {{ key }}: {{ value }} </li>
    </ul>
  </div>
</template>  
  
<script setup lang="ts">
import { ref } from 'vue';
import type { KeyValueStore } from '../type';
import { DataLottory } from "../data/lottery";

const findMapping = (category: keyof KeyValueStore, key: string): number | undefined => {
  return DataLottory[category][key];
};

const selectedCategory = ref('welfare');
const inputValue = ref('');
const filteredKeys = ref({});

const filterMappings = () => {
  if (inputValue.value) {
    console.log(inputValue.value);
    const regex = new RegExp(`^${inputValue.value}`, 'i');
    filteredKeys.value = Object.keys(DataLottory[selectedCategory.value])
      .filter(key => regex.test(key))
      .reduce((obj, key) => {
        obj[key] = DataLottory[selectedCategory.value][key];
        return obj;
      }, {});

    console.log(filteredKeys.value);
  } else {
    filteredKeys.value = {};
  }
};  
</script>

<style scoped>
.mapping-component {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.mapping-component select {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
}

.mapping-component input {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
}

.mapping-component ul {
  margin-top: 10px;
}

.mapping-component li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid #ccc;
}
</style>