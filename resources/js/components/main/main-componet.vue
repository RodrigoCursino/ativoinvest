<template>
    <div>
        <v-app id="inspire">
            <nav-main></nav-main>
            <side-bar></side-bar>
            <slot></slot>
        </v-app>
    </div>
</template>

<script>
    import SideBar    from "./side-bar.vue";
    import NavMain    from "./nav-main.vue";
    import store      from "./shared/store";

    export default {
        store,
        name: 'main-component',
        components: {
            SideBar,
            NavMain
        },
        computed: {


        },
        data: () => ({

        }),
        props: {
            source: String
        }
    }
</script>




