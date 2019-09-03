new Vue({
  el: "#monsterSlayer",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false
  },
  methods: {
    startNewGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    normalPlayerAttack() {
      const playerAttack = Math.floor(Math.random() * 10) + 1;

      this.monsterHealth = this.monsterHealth - playerAttack;
      this.monsterAttack();
    },
    specialPlayerAttack() {
      const playerAttack = Math.floor(Math.random() * 20) + 10;

      this.monsterHealth = this.monsterHealth - playerAttack;
      this.monsterAttack();
    },
    monsterAttack() {
      const monsterAttack = Math.floor(Math.random() * 10) + 1;

      this.playerHealth = this.playerHealth - monsterAttack;
    }
  }
});
