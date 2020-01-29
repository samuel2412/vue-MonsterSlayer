new Vue({
	el: '#app',
  data:{
          playerHp: 100,
          monsterHp: 100,
          gameIsRunning: false,
    },
    methods:{
      startGame: function(){
        this.gameIsRunning= true;
        this.playerHp= 100;
        this.monsterHp= 100;
      },
      attack: function(){
        var max= 10;
        var min= 3;
        var damage = Math.max(Math.floor(Math.random() * max) +1, min);
        this.monsterHp -= damage;

        if(this.monsterHp <= 0){
          alert('You won!');
          this.gameIsRunning=false;
          return;
        }
        max = 12;
        min = 5;
        damage = Math.max(Math.floor(Math.random() * max) +1, min);
        this.playerHp -= damage;

        if(this.playerHp <= 0){
          alert('You lost!');
          this.gameIsRunning=false;
        }
      },
      specialAttack: function(){
       
      },
      heal: function(){
       
      },
      givUp: function(){
       
      },
    }
})