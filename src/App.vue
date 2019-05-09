<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title class="text-center">
          SRS Bassoon GUI Interface Proposal
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <div class="row">
      <div class="col-3">
        <!-- left column -->
        <q-card class="q-ma-md">
          <q-card-title class="text-center bg-primary text-white">Pitch</q-card-title>
          <q-card-separator />
          <q-card-main>
            <img src="./assets/sheet-music.gif" alt="Shows pitch" class="img-embed">
          </q-card-main>
        </q-card>
        <q-card class="q-ma-md">
          <q-card-title class="text-center bg-primary text-white">Fingering Chart</q-card-title>
          <q-card-separator />
          <q-card-main>
            <img src="./assets/fingering-chart.jpg" alt="Detailed bassoon fingering chart" class="img-embed">
          </q-card-main>
        </q-card>
        <div class="text-center">
          <q-btn-toggle
            v-model="mode"
            toggle-color="primary"
            :options="[
              {label: 'Pro', value: 'Pro'},
              {label: 'Practical', value: 'Practical'}
            ]"
          />
        </div>
      </div>
      <div class="col-6">
        <!-- center content -->
        <q-card class="q-ma-md">
          <q-card-title class="text-center bg-primary text-white">Note In Finger Chart</q-card-title>
          <q-card-separator />
          <q-card-main>
            Preceding, Current, Next
          </q-card-main>
        </q-card>
        <q-card class="q-ma-md">
          <q-card-title class="text-center bg-primary text-white">Lesson Box</q-card-title>
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
          <q-card-title class="bg-primary text-white">Breath</q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-knob
              v-model="breath"
              :min="0"
              :max="10"
              color="primary"
            />
            <p>This can be calculated however needed - based on notes, time, etc.</p>
            <q-slider
              v-model="breath"
              :min="0"
              :max="10"
              :step="1"
              label
              snap
            />
          </q-card-main>
        </q-card>
        <q-card class="text-center q-ma-md">
          <q-card-title class="bg-primary text-white">Difficulty</q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-knob
              v-model="difficulty"
              :min="1"
              :max="10"
              color="red"
            />
            <p>Preset or based on some calculation, this can stay updated whenever needed.</p>
            <q-slider
              v-model="difficulty"
              :min="0"
              :max="10"
              :step="1"
              label
              snap
            />
          </q-card-main>
        </q-card>
        <q-card class="text-center q-ma-md">
          <q-card-title class="bg-primary text-white">Tempo</q-card-title>
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
      mode: 'Pro',
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
.img-embed {
  max-width: 100%;
}
</style>
