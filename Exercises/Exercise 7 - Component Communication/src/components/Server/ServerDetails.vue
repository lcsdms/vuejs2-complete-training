<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">No server selected</p>
        <p v-if="server">Server ID: {{server.id}} - Status: {{server.status}}</p>
        <button v-if="server && server.status != 'Normal'" @click="resetToNormal()">Change back to Normal</button>
    </div>
</template>

<script>
    import { eventBus } from "./../../main"

    export default{
        data : function(){
           return {
               server: null
           }
        },
        created(){
            eventBus.$on('serverSelected',(server) => {
               this.server = server;
            })
        },
        methods:{
            resetToNormal(){
                this.server.status = "Normal"
            }
        }

    }
</script>

<style>

</style>
