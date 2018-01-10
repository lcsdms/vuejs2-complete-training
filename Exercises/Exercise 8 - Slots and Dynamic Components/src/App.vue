<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="setActive('appBlue')">Load Blue Template</button>
                <button class="btn btn-success" @click="setActive('appGreen')">Load Green Template</button>
                <button class="btn btn-danger" @click="setActive('appRed')">Load Red Template</button>
                <hr>
                <component :is="active">
                    <p slot="content">Default Content</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        data: function(){
            return {
                active : 'appBlue'
            }
        }
        ,
        methods:{
            setActive(data){
                this.active = data;
            }
        }
    }
</script>

<style>
</style>
