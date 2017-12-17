new Vue({
   el:'#app',
   data:{
       hasGameStarted: false,
       playerHealth: 100,
       monsterHealth: 100,
       maxHealth: 100,
       innerHealthBarStyle : 'background-color: green; margin: 0; color: white;',
       log: []
   },
    computed:{
       showLog: function(){
           return this.hasGameStarted || this.log.length > 0;
       },
        playerHealthClass: function(){
            return this.innerHealthBarStyle + 'width:' + this.playerHealth + '%';
        },
        monsterHealthClass: function(){
            return this.innerHealthBarStyle + 'width:' + this.monsterHealth + '%';
        }
    },
    methods:{
       startGame : function(){
           this.clearData();
           this.hasGameStarted = true;
       },
        giveUp: function () {
            this.hasGameStarted = false;
            this.logMessage("The player has given up!");
        },
        heal: function(){
           var points = this.generateRandomPoints(false);
            this.playerHealth += points;
            this.logAction('player','heal',points);
            this.endRound();
        },
        playerAttack: function(isSpecial){
            var points = this.generateRandomPoints(isSpecial);
            this.monsterHealth -= points;
            this.logAction('player','attack', points);
            this.checkWin();
            this.endRound();
        },
        logAction: function(who,action,value){
           var additionalMessage = '';
          if(action === 'heal'){
             additionalMessage = ' himself '
          }else{
              additionalMessage = '';
          }

          this.logMessage(who + " " + action+"s " + additionalMessage + (who === 'player' ? 'monster' : 'player') + " for " + value,who);
        },
        logMessage: function(message,who){
            var whoValue = who === 'player' ? 'player-turn' : 'monster-turn';
            this.log.push({message: message.toUpperCase(), who: whoValue});
        },
        clearData: function(){
            this.log = [];
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        monsterAttack: function(){
            var points = this.generateRandomPoints(false);
            this.playerHealth -= points;
            this.logAction('monster','attack',points);
            this.checkWin();
        },
        generateRandomPoints: function(isSpecial){
            var minRange = 1;
            var maxRange = 0;
            if(typeof isSpecial === 'undefined' || isSpecial === false){
                maxRange = 10;
            }else{
                minRange = 10;
                maxRange = 20;
            }
            return Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
        }
        ,
        endRound: function(){
            this.monsterAttack();
        },
        checkWin: function(){
           if(this.monsterHealth <= 0){
               if(confirm('You win! Start a new Game?')){
                   this.startGame();
               }else{
                   return;
               }
           }

           if(this.playerHealth <= 0 ){
               if(confirm('You lose! Start a new Game?')){
                   this.startGame();
               }
           }
        }
    },
});