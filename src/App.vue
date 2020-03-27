<template src="./templates/main.html"></template>
<style lang="stylus" src="./assets/styles/style.styl" global></style>

<script>
import Nav from '@/components/nav/Nav.vue';
import Content from '@/components/content/Content.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
    name: 'App',
    components: {Nav, Content, Footer},
    beforeMount(){
        document.title = window.location.hostname;
    }
};
</script>
