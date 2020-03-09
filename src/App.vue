<template src="./templates/main.html"></template>
<style lang="stylus">@import './assets/styles/style.styl'</style>

<script>
import Nav from '@/components/nav/Nav.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
    name: 'App',
    components: {Nav, Footer},
    beforeMount(){
        document.title = window.location.hostname;
    }
};
</script>
