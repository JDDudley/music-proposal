<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="white"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title class="text-primary text-center">
          SRS Bassoon GUI Interface Proposal
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <div class="row">
      <div class="col-3">
        <!-- left column -->
        <q-card class="q-ma-md">
          <q-card-title class="text-center">Pitch</q-card-title>
          <q-card-separator />
          <q-card-main>
            Image displaying sheet music notation
          </q-card-main>
        </q-card>
        <q-card class="q-ma-md">
          <q-card-title class="text-center">Fingering Chart</q-card-title>
          <q-card-separator />
          <q-card-main>
            Detailed fingering chart
          </q-card-main>
        </q-card>
      </div>
      <div class="col-6">
        <!-- center content -->
        <q-card class="q-ma-md">
          <q-card-title class="text-center">Note In Finger Chart</q-card-title>
          <q-card-separator />
          <q-card-main>
            Preceding, Current, Next
          </q-card-main>
        </q-card>
        <q-card class="q-ma-md">
          <q-card-title class="text-center">Lesson Box</q-card-title>
          <q-card-separator />
          <q-card-main>
            <!-- router injects here -->
            <q-page-container>
              <HelloWorld />
            </q-page-container>
            <!-- end router injection -->
          </q-card-main>
        </q-card>
      </div>
      <div class="col-3">
        <!-- right column -->
        <q-card class="text-center q-ma-md">
          <q-card-title>Breath</q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-knob
              v-model="breath"
              :min="1"
              :max="10"
              color="primary"
            />
          </q-card-main>
        </q-card>
        <q-card class="text-center q-ma-md">
          <q-card-title>Difficulty</q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-knob
              v-model="difficulty"
              :min="1"
              :max="10"
              color="red"
            />
          </q-card-main>
        </q-card>
        <q-card class="text-center q-ma-md">
          <q-card-title>Tempo</q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-knob
              v-model="tempo"
              :min="1"
              :max="10"
              color="secondary"
            />
          </q-card-main>
        </q-card>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'LayoutDefault',
  components: {
    HelloWorld
  },
  data () {
    return {
      breath: 8,
      difficulty: 6,
      tempo: 5
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
#q-app {
  margin-top: 60px;
}
</style>
