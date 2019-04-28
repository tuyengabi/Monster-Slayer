// THE COMPONENT MONSTER //
Vue.component ('monster', {
  data: function() {

  },
  props: ['hpMonster'],
  template:
  `<div>
    <p>MONSTER</p>
    <div class="lifeBar">
      <p>{{ hpMonster }}</p>
    </div>
   </div>`
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
  `<button v-on:click="$emit('btnAttack')">ATTACK</button>`
})


// THE COMPONENT BTN-SPECIAL-ATTACK //
Vue.component ('btn-special-attack', {
  data: function() {

  },
  props: [ 'hpMonster', 'hpPlayer' ],
  template: 
  `<button v-on:click="$emit('btnSpecialAttack')">SPECIAL ATTACK</button>`
})


// THE COMPONENT BTN-HEAL //
Vue.component ('btn-heal', {
  data: function() {

  },
  props: ['hpPlayer'],
  template: 
  `<button v-on:click="$emit('btnHeal')">HEAL</button>`
})


// THE COMPONENT BTN-RESTART //
Vue.component ('btn-restart', {
  data: function() {

  },
  props: [ 'hpMonster', 'hpPlayer' ],
  template: 
  `<button v-on:click="$emit('btnRestart')">RESTART</button>`
})


// THE INSTANCE //
new Vue ({
  el:'game',
  data: {
    hpMonster: 100,
    hpPlayer: 100
  },

  methods: {
    attack: function() {
      return {
      hpMonster-=_.random(3,10); 
      hpPlayer-=_.random(2,10)  
      }
    },

    specialAttack: function() {
      return {
      hpMonster-=_.random(10,20); 
      hpPlayer-=_.random(10,20)  
      }
    },

    heal: function() {
      return {
      hpPlayer+=10
      }
    },

    restart: function() {
      return {
      hpMonster=100;
      hpPlayer=100
      }
    }

  } 
})
