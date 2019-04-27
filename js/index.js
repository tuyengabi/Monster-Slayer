// THE COMPONENT MONSTER //
Vue.component ('monster', {
  data: function() {

  },
  props: ['hpMonster'],
  template:
  `<div>
    <p>MONSTER</p>
    <div class="lifeBar>
      <p>{{ hpMonster }}</p>
    </div>
   </div>
})


// THE COMPONENT PLAYER //
Vue.component ('player', {
  data: function() {

  },
  props: ['hpPlayer'],
  template:
  `<div>
    <p>PLAYER</p>
    <div class="lifeBar">
      <p>{{ hpPlayer }}</p>
    </div>
   </div>`
})


// THE COMPONENT BTN-ATTACK //
Vue.component ('btn-attack', {
  data: function() {

  },
  props: [ 'hpMonster', 'hpPlayer' ],
  template: 
  `<button
   v-on:click="hpMonster-=_.random(3,10)"
   v-on:click="hpPlayer-=_.random(2,10)"
   >
   ATTACK
   </button>`
})


// THE COMPONENT BTN-SPECIAL-ATTACK //
Vue.component ('btn-special-attack', {
  data: function() {

  },
  props: [ 'hpMonster', 'hpPlayer' ],
  template: 
  `<button
   v-on:click="monster-=_.random(10,20)"
   v-on:click="player-=_.random(10,20)"
   >
   SPECIAL ATTACK
   </button>`
})


// THE COMPONENT BTN-HEAL //
Vue.component ('btn-heal', {
  data: function() {

  },
  props: [ 'hpMonster', 'hpPlayer' ],
  template: 
  `<button
   v-on:click="player+=10"
   >
   HEAL
   </button>`
})


// THE COMPONENT BTN-RESET //
Vue.component ('btn-restart', {
  data: function() {

  },
  props: [ 'hpMonster', 'hpPlayer' ],
  template: 
  `<button
   v-on:click="hpPlayer=100"
   v-on:click="hpMonster=100"
   >
   RESTART
   </button>`
})


// THE INSTANCE //
new Vue ({
  el:'game',
  data: {
    hpMonster: 100,
    hpPlayer: 100
  }
})
