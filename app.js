new Vue({
    el: '#app',
    data: {
        greeting: 'Hello World!'
    },
    methods: {
        changeGreeting: function (event) {
            this.greeting = event.target.value;
        }
    }
});