// THE COMPONENT MONSTER //
Vue.component ('monster', {
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
  props: [ 'hpMonster', 'hpPlayer' ],
  template: 
  `<button v-on:click="$emit('btnAttack')">ATTACK</button>`
})


// THE COMPONENT BTN-SPECIAL-ATTACK //
Vue.component ('btn-special-attack', {
  props: [ 'hpMonster', 'hpPlayer' ],
  template: 
  `<button v-on:click="$emit('btnSpecialAttack')">SPECIAL ATTACK</button>`
})


// THE COMPONENT BTN-HEAL //
Vue.component ('btn-heal', {
  props: ['hpPlayer'],
  template: 
  `<button v-on:click="$emit('btnHeal')">HEAL</button>`
})


// THE COMPONENT BTN-RESTART //
Vue.component ('btn-restart', {
  props: [ 'hpMonster', 'hpPlayer' ],
  template: 
  `<button v-on:click="$emit('btnRestart')">RESTART</button>`
})


// THE INSTANCE //
new Vue ({
  el:'.game',
  data: {
    hpMonster: 100,
    hpPlayer: 100
  },

  methods: {
    attack: function() {
      hpMonster-=_.random(3,10); 
      hpPlayer-=_.random(2,10)  
    },

    specialAttack: function() {
      hpMonster-=_.random(10,20); 
      hpPlayer-=_.random(10,20)  
    },

    heal: function() {
      hpPlayer+=10
    },

    restart: function() {
      hpMonster=100;
      hpPlayer=100
    }

  } 
})
