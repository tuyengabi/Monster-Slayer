// THE COMPONENT MONSTER //
Vue.component ('monster', {
  props: ['hpmonster'],
  template:
  `<div>
    <p>MONSTER</p>
    <div class="lifeBar">
      <p>{{ hpmonster }}</p>
    </div>
   </div>`
})


// THE COMPONENT PLAYER //
Vue.component ('player', {
  props: ['hpplayer'],
  template:
  `<div>
    <p>PLAYER</p>
    <div class="lifeBar">
      <p>{{ hpplayer }}</p>
    </div>
   </div>`
})


// THE COMPONENT BTN-ATTACK //
Vue.component ('btn-attack', {
  props: [ 'hpmonster', 'hpplayer' ],
  template: 
  `<button v-on:click="$emit('btnatt')">ATTACK</button>`
})


// THE COMPONENT BTN-SPECIAL-ATTACK //
Vue.component ('btn-special-attack', {
  props: [ 'hpmonster', 'hpplayer' ],
  template: 
  `<button v-on:click="$emit('btnspeatt')">SPECIAL ATTACK</button>`
})


// THE COMPONENT BTN-HEAL //
Vue.component ('btn-heal', {
  props: ['hpplayer'],
  template: 
  `<button v-on:click="$emit('btnheal')">HEAL</button>`
})


// THE COMPONENT BTN-RESTART //
Vue.component ('btn-restart', {
  props: [ 'hpmonster', 'hpplayer' ],
  template: 
  `<button v-on:click="$emit('btnrestart')">RESTART</button>`
})


// THE INSTANCE //
new Vue ({
  el:'.game',
  data: function() {
    return {
      hitPoint: {
        monster: 100,
        player: 100
      }
    }
  },

  methods: {
    attack: function() {
      this.monster-=_.random(3,10); 
      this.player-=_.random(2,10)  
    },

    specialAttack: function() {
      this.monster-=_.random(10,20); 
      this.player-=_.random(10,20)  
    },

    heal: function() {
      this.player+=10
    },

    restart: function() {
     this.monster=100;
     this.player=100
    }

  } 
})
