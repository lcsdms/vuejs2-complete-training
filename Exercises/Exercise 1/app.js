new Vue({
    el: '#exercise',
    data: {
        name: 'Lucas Dimas',
        age: 27,
        image: 'http://i0.kym-cdn.com/entries/icons/mobile/000/005/608/nyan-cat-01-625x450.jpg'
    },
    methods: {
        randomNumber : function (){
            return Math.random();
        }

    }
});