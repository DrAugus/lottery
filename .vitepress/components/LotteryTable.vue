<template>
    <table>
        <tr>
            <th class="center" colspan=2>福彩</th>
            <th class="center" colspan=2>体彩</th>
        </tr>
        <tr>
            <td>代码</td>
            <td>金额</td>
            <td>代码</td>
            <td>金额</td>
        </tr>

    </table>

    {{ DataLottory }}
</template>  
 
<script setup lang="ts">
import { DataLottory } from "../data/lottery";
</script>

<style scoped>
.center {
    align-content: center;
    text-align: center;
}
</style>