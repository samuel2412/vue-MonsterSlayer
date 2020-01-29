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

      this.monsterHp -= this.calculateDamage(3, 10);

      if (this.checkWin()) {
        return;
      }

      this.playerHp -= this.calculateDamage(5, 12);

      this.checkWin()
    },
    specialAttack: function () {

    },
    heal: function () {

    },
    givUp: function () {

    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
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