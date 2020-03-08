<template>
    <nav id="nav-root">
        <a v-for="(element, idx) in nav_elements" :value="element" :key="idx">
            <font-awesome-icon :icon="[`${element.icon_type}`, `${element.icon_name}`]"/>
            <router-link :to="`${element.link}`">{{element.title}}</router-link>
        </a>
        <router-view />
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    props: {},
    data() {
        return {
            nav_elements: [
                {icon_type: 'fas', icon_name: 'home', title: 'home', link: '/'},
                {icon_type: 'fas', icon_name: 'socks', title: 'me', link: '/me'},
                {icon_type: 'fab', icon_name: 'python', title: 'projects', link: '/projects'},
                {icon_type: 'fas', icon_name: 'stamp', title: 'imprint', link: '/imprint'},
                {icon_type: 'fas', icon_name: 'stamp', title: 'about', link: '/about'}
            ]
        };
    }
};
</script>
