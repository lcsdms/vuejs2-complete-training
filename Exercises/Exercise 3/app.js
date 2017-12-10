new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        watch: {
          result : function () {
              var instance  = this;
              setTimeout(function(){
                  instance.value = 0;
              }, 5000);
          }
        },
        computed: {
            result: function () {
                return this.value >= 37 ?  'done' : 'not there yet';
            }
        },
        methods:{

        }
    });