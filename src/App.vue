<template>
  <v-app v-scroll="onScroll">
    <v-navigation-drawer
      fixed
      :disable-resize-watcher="true"
      :mini-variant="miniVariant"
      :clipped="true"
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile 
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark fixed app :clipped-left="false">
     <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!--<v-btn icon @click.stop="miniVariant = !miniVariant">
       <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
     </v-btn>
     <v-btn icon @click.stop="clipped = !clipped">
       <v-icon>web</v-icon>
     </v-btn>
     <v-btn icon @click.stop="fixed = !fixed">
       <v-icon>remove</v-icon>
     </v-btn>-->
      <v-spacer class="hidden-sm-and-down"></v-spacer>

      <v-fab-transition>
        <v-toolbar-title v-if="offsetTop<=244" v-text="title"></v-toolbar-title>
        <img style="height: 50px;width: 50px;border-radius: 25px" src="/public/qqq.png" alt="SadRedditor" v-if="offsetTop>244" v-text="title">
      </v-fab-transition>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn flat class="hidden-sm-and-down">
        HOME
      </v-btn>
      <v-btn flat class="hidden-sm-and-down">
        RESUME
      </v-btn>
      <v-btn flat class="hidden-sm-and-down">
        TODOs
      </v-btn>

        <v-btn href="https://www.baidu.com" target="_blank" flat class="hidden-sm-and-down">
          GITHUB
        </v-btn>

      <v-spacer></v-spacer>
      <!--<v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>-->
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <img  style="height: 180px;width: 180px;border-radius: 90px" src="/public/qqq.png" alt="SadRedditor" class="mb-5" />
            <blockquote style="height: 1000px">
              &#8220;First, solve the problem. Then, write the code.&#8221;
              <footer>
                <small>
                  <em>&mdash;John Johnson</em>
                </small>
              </footer>
            </blockquote>
          </v-layout>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        offsetTop: 0,
        clipped: true,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspires1' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'lovedstyle.github.io'
      }
    },
    methods: {
        onScroll (e) {
            this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
        }
    }
  }
</script>
