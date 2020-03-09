<template src="./template.html"></template>
<style scoped src="./style.css"></style>

<script>
var cUrl = window.location.hostname;

export default {
    name: 'Footer',
    data(){
        return{
            cUrl,
            nav_elements: [
                {title: 'contact', link: '/contact'},
                {title: 'about', link: '/about'},
                {title: 'imprint', link: '/imprint'},
            ]
        }
    }
}
</script>
