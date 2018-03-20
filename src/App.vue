<template>
  <v-app v-scroll="onScroll">
    <v-navigation-drawer
      fixed
      :disable-resize-watcher="true"
      :disable-route-watcher="true"
      :mini-variant="miniVariant"
      :clipped="true"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile 
          value="true"
          v-if="item.to"
          :to="item.to"
          v-for="(item, i) in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          <v-divider v-else-if="item.href"></v-divider>
          <v-list-tile
          value="true"
          v-if="item.href"
          :href="item.href"
          v-for="(item, i) in items"
          :key="item.title + '0'"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed app :clipped-left="false" :mode="`out-in`">
     <i class="hidden-md-and-up fas fa-bars fa-2x" @click.stop="drawer = !drawer"></i>
      <v-spacer class="hidden-sm-and-down"></v-spacer>


        <v-toolbar-title class="d-flex align-center justify-start" style="width: 250px">
            <v-scale-transition  :origin="'center center 0'" :mode="`out-in`">
                <span style="flex-grow: 0!important;" v-if="offsetTop<=244">{{title}}</span>
                <img style="flex-grow: 0!important;height: 50px;width: 50px;border-radius: 25px" src="/public/qqq.png" alt="SadRedditor" v-if="offsetTop>244" v-text="title">
            </v-scale-transition>
        </v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">

          <v-btn to="/home" flat class="hidden-sm-and-down">
              HOME
          </v-btn>

        <v-btn to="/todos" flat class="hidden-sm-and-down">
          TODOs
        </v-btn>

        <v-btn href="https://github.com/loveDstyle/portfolio-in-vue" target="_blank" flat class="hidden-sm-and-down">
            <i class="fab fa-github fa-lg"></i>&nbsp;GITHUB
        </v-btn>
      </v-toolbar-items>


      <v-spacer></v-spacer>
    </v-toolbar>
    <router-view></router-view>
      <v-scale-transition  :origin="'center center 0'" :mode="`out-in`">
          <v-btn  v-if="offsetTop>244"
                  color="pink"
                  dark
                  fixed
                  bottom
                  right
                  fab
                  @click="scrollToTop()"
          >
              <v-icon>fa-chevron-up</v-icon>
          </v-btn>
      </v-scale-transition>
    <v-footer :fixed="false">
        <v-card flat tile style="width: 100%" class="mx-0">
            <v-card-title class="blue-grey white--text">
                <strong class="subheading">Get connected with us on social networks!</strong>
            </v-card-title>
            <v-card-actions class="grey lighten-2 justify-center">
                powered by <strong>Vue & Vuetify & Github</strong> with <i style="color: deeppink" class="fas fa-heart"></i>
            </v-card-actions>
        </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  import throttle from 'lodash/throttle';
  export default {
      data () {
      return {
        offsetTop: 0,
        clipped: true,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'fa-home', title: 'Home', to: '/home' },
          { icon: 'fa-list', title: 'Todos', to: '/todos' },
          { icon: ' fa-external-link-alt', title: 'Github', href: 'https://github.com/loveDstyle/portfolio-in-vue' },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'lovedstyle.github.io'
      }
    },
    methods: {
        onScroll: throttle((function () {
            this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
        }), 150),
        scrollToTop() {
            // window.scrollTo(0,0);
            document.documentElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
    }
  }
</script>
