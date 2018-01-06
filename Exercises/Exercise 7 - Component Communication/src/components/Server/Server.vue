<template>
    <div>
        <li class="list-group-item" :class="statusClass" @click="loadServerDetails()">
            Server #{{server.id}}
        </li>
    </div>
</template>
<script>
    import {eventBus} from "./../../main"

    export default {
        props: ['server'],
        methods: {
            loadServerDetails() {
                eventBus.$emit('serverSelected', this.server);
            }
        },
        computed:{
            statusClass : function (){
                return "status-"+this.server.status.toLowerCase();
            }
        }
    }
</script>
<style>
    li:hover {
        cursor: pointer;
        background-color: #537cd8;
        color: #fff;
    }

    .status-critical {
        background-color: red;
        color: #fff;
    }

    .status-normal {
        color: #000;
    }

    .status-warning {
        background-color: #ffe85b;
        color: #000;
    }

    .status-stopped {
        background-color: #7c7b74;
        color: #fff;
    }
</style>