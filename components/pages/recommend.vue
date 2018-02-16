<template>
    <div>
        <h3 class="title">Data</h3>
        <ul>
           <li v-for="(data, index) in datahavetoshow" :key="index">{{ data.first_name }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
      props: ['datahavetoshow']
    }
</script>