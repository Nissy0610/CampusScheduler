<template>
    <footer class="fixed bottom-0 h-10 w-full flex items-center bg-white border-t-gray-300 border-t-1">
        <ul class="flex pl-6 ">
            <li id="footer_menu" :class="onPage == 1 ? 'onPage':'' ">
                <router-link to="/">
                    Home
                </router-link>
            </li>
            <li id="footer_menu" :class="onPage == 2 ? 'onPage':'' ">
                <router-link to="/Calendar">
                    Calender
                </router-link>
            </li>
            <li id="footer_menu" :class="onPage == 3 ? 'onPage':'' ">
                <router-link to="/TimeTable">
                    TimeTable
                </router-link>
            </li>
            <li id="footer_menu" :class="onPage == 4 ? 'onPage':'' ">
                <router-link to="/Setting">
                    Setting
                </router-link>
            </li>
        </ul>
    </footer>
</template>

<style scoped>
    #footer_menu {
        min-width: 100px;
        border-right: solid 1px #ccc;
        text-align: center;
    }

    #footer_menu:last-child {
        border-right: none;
    }

    .onPage {
        margin-top: -4px;
        border-top: solid 4px skyblue;
    }
    
</style>

<script setup>
    //propsの設定
    defineProps({
        onPage: {
            require: true
        }
    })
</script>
