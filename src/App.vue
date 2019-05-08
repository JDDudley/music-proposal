<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <!-- left column -->
        <v-flex xs12 md3>
          <v-card class="layout-card">
            <v-card-title>Pitch</v-card-title>
            <v-card-content>Sheet Music Printout</v-card-content>
          </v-card>
          <v-card class="layout-card">
            <v-card-title>Fingering Chart</v-card-title>
            <v-card-content>Chart of finger position for notes</v-card-content>
          </v-card>
        </v-flex>
        <!-- center content -->
        <v-flex xs12 md6>
          <v-card class="layout-card">
            <v-card-title>Notes</v-card-title>
            <v-card-content>Preceding, current, and next notes</v-card-content>
          </v-card>
          <v-card class="layout-card">
            <v-card-title>Lesson Box</v-card-title>
            <v-card-content>
              <v-content>
                <HelloWorld/>
              </v-content>
            </v-card-content>
          </v-card>
        </v-flex>
        <v-flex xs12 md3>
          <v-card class="layout-card">
            <v-card-title>Breath</v-card-title>
            <v-card-content>Meter/Countdown</v-card-content>
          </v-card>
          <v-card class="layout-card">
            <v-card-title>Difficulty</v-card-title>
            <v-card-content>Meter, slider</v-card-content>
          </v-card>
          <v-card class="layout-card">
            <v-card-title>Tempo</v-card-title>
            <v-card-content>Meter, slider</v-card-content>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-app>
</template>

<script>
import HelloWorld from './components/Proposal'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .layout-card {
    margin: 2em;
    padding: 1em;
  }
</style>