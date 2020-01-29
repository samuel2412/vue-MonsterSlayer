new Vue({
  el: '#app',
  data: {
    playerHp: 100,
    monsterHp: 100,
    gameIsRunning: false,
    actionLog: [],
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHp = 100;
      this.monsterHp = 100;
      this.actionLog = [];
    },
    attack: function () {

      if (!this.playerAttack(3, 10)) {
        this.monsterAttack();
      }

    },
    specialAttack: function () {

      if (!this.playerAttack(10, 20)) {
        this.monsterAttack();
      }

    },
    heal: function () {

      if (this.playerHp <= 90) {
        this.playerHp += 10;
      } else {
        this.playerHp = 100;
      }
      this.actionLog.unshift({
        isPlayer: true,
        text: `Player healed 10 hp.`
      });
      this.monsterAttack();

    },
    giveUp: function () {
      this.gameIsRunning = false;
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    monsterAttack: function () {
      var damage = this.calculateDamage(5, 12);
      this.playerHp -= damage;
      this.actionLog.unshift({
        isPlayer: false,
        text: `Monster attack caused ${damage} damage.`
      });
      this.checkWin();
    },
    playerAttack: function (min, max) {
      var damage = this.calculateDamage(min, max);
      this.monsterHp -= damage;
      this.actionLog.unshift({
        isPlayer: true,
        text: `Player attack caused ${damage} damage.`
      });
      return this.checkWin();
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