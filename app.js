new Vue({
  el: '#app',
  data: {
    playerHp: 100,
    monsterHp: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHp = 100;
      this.monsterHp = 100;
    },
    attack: function () {

      this.playerAttack(3, 10);
      this.monsterAttack();

    },
    specialAttack: function () {

      this.playerAttack(10, 20);
      this.monsterAttack();
    },
    heal: function () {

      if (this.playerHp <= 90) {
        this.playerHp += 10;
      } else {
        this.playerHp = 100;
      }
      this.monsterAttack();

    },
    giveUp: function () {
      this.gameIsRunning = false;
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    monsterAttack: function () {
      this.playerHp -= this.calculateDamage(5, 12);
      this.checkWin()
    },
    playerAttack: function (min, max) {
      this.monsterHp -= this.calculateDamage(min, max);
      this.checkWin()
    },

    checkWin: function () {
      if (this.monsterHp <= 0) {
        if (confirm('You won! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHp <= 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;

    }
  },
})