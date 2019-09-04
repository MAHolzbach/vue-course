new Vue({
  el: "#monsterSlayer",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startNewGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },
    normalPlayerAttack() {
      this.monsterAttack();
      this.calcDamage(1, 10);
    },
    specialPlayerAttack() {
      this.monsterAttack();
      this.calcDamage(10, 20);
    },
    monsterAttack() {
      this.calcDamage(1, 10);
    },
    calcDamage(min, max) {
      const playerAttack = Math.floor(Math.random() * max) + min;
      const monsterAttack = Math.floor(Math.random() * max) + min;
      this.monsterHealth = this.monsterHealth - playerAttack;
      this.playerHealth = this.playerHealth - monsterAttack;

      this.logTurn(playerAttack, monsterAttack);
    },
    heal() {
      const healResult = Math.floor(Math.random() * 10) + 1;

      this.playerHealth = this.playerHealth + healResult;
      this.monsterAttack();

      this.logTurn(0, 0, healResult);
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    logTurn(playerDmg, monsterDmg, healing) {
      let logColor = playerDmg > monsterDmg ? "green" : "red";
      let turnObj = {
        player: `You lost ${monsterDmg} hit points!`,
        monster: `The beast lost ${playerDmg} hit points!`,
        healing: `You healed for ${healing} hit points!`,
        color: healing ? "blue" : logColor
      };

      this.turns.push(turnObj);
    }
  }
});
