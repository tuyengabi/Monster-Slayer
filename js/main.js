// THE COMPONENTS 

Vue.component ('slayer', {
  data: function() {
    return {
      countMonster: 100,
      countYou: 100
    }
  },
  template:
  `<section>
     <div class="player">
       <p>MONSTER</p>
       <div class="lifeBar">
         <p>{{ countMonster }}</p>
       </div>
     </div>
     <div class="player">
       <p>YOU</p>
       <div class="lifeBar">
         <p>{{ countYou }}</p>
       </div>
     </div>

     <button
       v-on:click="countMonster-=_.random(3,14)"
       v-on:click="countYou-=_.random(2,15)"
     >
     ATTACK
     </button>

     <button
       v-on:click="countMonster-=_.random(10,30)"
       v-on:click="countYou-=_.random(10,30)"
     >
     SPECIAL ATTACK
     </button>

     <button
       v-on:click="countYou+=10"
     >
     HEAL
     </button>

     <button
       v-on:click="countMonster=100"
       v-on:click="countYou=100"
     >
     RESTART
     </button>
  </section>`

})


// THE INSTANCES //

new Vue ({
  el:'.game'
})

