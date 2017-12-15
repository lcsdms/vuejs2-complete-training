new Vue({
  el: '#exercise',
  data: {
  	activeEffect: null,
  	circle: "circle",
  	blue: "blue",
  	typedClass_3: "",
  	typedClass_4: "",
  	isActive_4: false,
  	styles_5: "",
  	progressBarStyle: "progressBar",
  	progresso:0
  },
  computed:{
  	progressInfo : function(){
  		if(this.progresso === 0) {
  			return "Click to start progress" ;
  		}else{
  			return this.progresso + ' %';
  		}
  	},
  	progressStyle : function(){
  		return 'width:'+this.progresso+'%;';
  	}
  },
  methods: {
    startEffect: function() {
    	vm = this;
    	setInterval(function(){
	    	vm.activeEffect = vm.activeEffect === "highlight" ? "shrink" : "highlight";
    	}, 2000);
    },
    startProgress: function(){
    	this.progresso = 0;
    	vm = this;
    	var intervalID = setInterval(function(){
    		console.log(vm.progresso);
    		if(vm.progresso < 100){
    			vm.progresso += 1;
    			return;
    		}
    		clearInterval(intervalID);
    	}, 65);
    },

  }
});
