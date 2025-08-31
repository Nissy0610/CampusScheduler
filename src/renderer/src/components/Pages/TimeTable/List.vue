<template>
    <div 
        class=""
        v-for="list in listTimeTable()"
        :key="i"
    >
        {{ list[i] }}
    </div>
</template>

<style scoped>

</style>

<script setup>
    //時間割データ
    const listTimeTable = async () => {
        const data = await getTimeTable()
        return data
    }

    //時間割を取得
    const getTimeTable = async () => {
        try {
            const data = await window.timeTableAPI.getTimeTable()
            return data
        } catch(err) {
            console.log(err)
        }
    }

</script>