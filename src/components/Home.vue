<template>
    <v-content style="background: #f1f1f1">
      <v-container class="pa-0" fluid>
        <v-slide-y-transition mode="out-in">

            <v-layout column align-center>
              <v-parallax style="width: 100%" src="/public/bg.jpg">
                <v-layout column align-center justify-center>
                  <img  style="height: 180px;width: 180px;border-radius: 90px" src="/public/qqq.png" alt="SadRedditor" class="mb-5" />
                  <strong> The next generation of web is arriving, be prepared.</strong>
                </v-layout>
              </v-parallax>
            </v-layout>

        </v-slide-y-transition>
      </v-container>
      <v-jumbotron color="grey lighten-2">
        <v-container>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Welcome to my github page!</h3>
              <span class="subheading">I'm assuming you're one of the recruiters who got my resume and therefore found this page. For those who don't,
                I am a 25 yo frontend Web developer (and a Javascript <strong>zealot</strong> also!) who currently looking for a job, I've been doing frontend develop for over 1 year.<br/>
              This SPA is used for giving a brief introduction about my skill set and is also used as a playground for practicing new ideas.</span>
              <v-divider class="my-3"></v-divider>
              <div class="title mb-3">Check out the TODOs to see what i want to learn/build next and what feature will be added into this app.</div>
              <v-btn to="/todos" large color="primary" class="mx-0">See TODOs</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <v-container>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <div>
              <v-tabs right>
                <v-tab v-for="n in 3" :key="n">
                  tets {{ n }}
                </v-tab>
              </v-tabs>
            </div>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <v-card  v-for="(card, i) in cards" :key="card.name" class="mb-3">
                <v-container grid-list-lg fluid>
                  <v-layout row>
                    <v-flex xs7>
                      <span class="headline">{{card.name}}</span>
                      <br>
                      <span>Whitehaven Beach</span><br>
                      <span>Whitsunday Island, Whitsunday Islands</span>
                      <v-card-actions>
                        <v-btn :style="{'color':card.font||'white'}" :color="card.color">Explore</v-btn>
                      </v-card-actions>
                    </v-flex>
                    <v-flex xs5>
                      <v-card-media
                              contain
                              height="150px"
                              :src="card.img"
                      ></v-card-media>
                    </v-flex>

                  </v-layout>
                </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
  export default {
    data () {
      return {
        test: 1,
        active: 0,
        cards: [
            {name: 'JavaScript', level: 8, color: 'yellow', font: 'black', img: 'public/480px-JavaScript-logo.png'},
            {name: 'CSS', level: 6, color: 'blue', img: 'public/css.svg'},
            {name: 'HTML', level: 6,color: 'orange',  img: 'public/html.png'}
        ],
        productionCards: [
            {name: 'Angular(2+)', level: 8, color: 'red', img: 'public/angular.svg'},
            {name: 'ReactJs', level: 4, color: 'blue', img: 'public/css.svg'},
            {name: 'VueJs',level: 5, color: 'orange',  img: 'public/html.png'}
        ],
      }
    }
  }
</script>
