<template>
    <v-tabs
            dark
            color="#337ab7"
            show-arrows
            :value.sync="currentItem"
    >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab  v-for="i in menu"
                v-show="i.showNav"
                :key="i.position"
                :href="i.link"
                @dblclick="DISABLE_TAB(i.action)"
        >
            {{ i.text }}
        </v-tab>

        <v-tabs-items  :value.sync="currentItem">
            <v-tab-item
                    v-for="i in menu"
                    :key="i.position"
                    v-show="i.showPage"
                    :value="i.action"
            >
                <v-card flat>
                    <v-card-text>{{ text }}</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-tabs>
</template>

<script>
    import {mapState, mapMutations} from "vuex"
    export default {
        data () {
            return {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        },
        computed: {
            ...mapState({
                menu:        state => state.navList,
                currentItem: state => state.currentItem
            })
        },
        methods: {
            ...mapMutations([
                'DISABLE_TAB'
            ])
        }
    }
</script>