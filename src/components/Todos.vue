<template>
    <v-content style="background: #f1f1f1">
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <blockquote style="height: 1000px">
              &#8220;Resume Page&#8221;
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
</template>

<script>
  export default {
    data () {
      return {
        test: 1
      }
    }
  }
</script>
