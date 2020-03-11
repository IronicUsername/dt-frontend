<template src="./template.html"></template>
<style src="./style.styl" lang="stylus" scoped></style>
<script>
export default {
    name: 'Nav',
    props: {},
    data(){
        return {
            nav_elements: [
                {icon_type: 'fas', icon_name: 'home', title: 'home', link: '/'},
                {icon_type: 'fas', icon_name: 'socks', title: 'me', link: '/me'},
                {icon_type: 'fab', icon_name: 'python', title: 'projects', link: '/projects'},
            ]
        };
    }
};
</script>
