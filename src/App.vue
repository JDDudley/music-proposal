<template>
  <q-layout id="q-app" view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title class="text-center text-tertiary text-weight-bolder uppercase">
          SRS Bassoon GUI Interface Proposal
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <div class="row items-stretch">
      <div class="col-xs-12 col-md-3 parent-col">
        <!-- left column -->
        <q-card color ="white" class="text-black q-ma-md text-center">
          <q-card-title class="bg-primary text-white">Pitch</q-card-title>
          <q-card-separator />
          <q-card-main>
            <img src="./assets/sheet-music.gif" alt="Shows pitch" class="img-embed">
          </q-card-main>
        </q-card>
        <q-card color ="white" class="text-black q-ma-md text-center">
          <q-card-title class="bg-primary text-white">Fingering Chart</q-card-title>
          <q-card-separator />
          <q-card-main>
            <img src="./assets/fingering-chart.jpg" alt="Detailed bassoon fingering chart " class="img-embed">
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
      <div class="col-xs-12 col-md-6 parent-col">
        <!-- center content -->
        <q-card color ="white" class="text-black q-ma-md">
          <q-card-title class="text-center bg-primary text-white">Note In Finger Chart</q-card-title>
          <q-card-separator />
          <q-card-main class="text-center">
            <div class="row">
              <div class="col-xs-4">
                <q-btn label="Preceeding Note" class="full-width" disable />
              </div>
              <div class="col-xs-4">
                <q-btn label="Current Note" color="primary" class="full-width" />
              </div>
              <div class="col-xs-4">
                <q-btn label="Next Note" class="full-width" disable />
              </div>
              <div class="col-xs-12"><br><br></div>
              <div class="col-xs-4 text-right">
                <router-link to="/process">
                  <span class="linkButtons">Process</span>
                  <q-btn round color="primary" icon="code" class="linkIcons" />
                </router-link>
                <br>
                <router-link to="/timeline">
                  <span class="linkButtons">Timeline</span>
                  <q-btn round color="primary" icon="alarm" class="linkIcons" />
                </router-link>
              </div>
              <div class="col-xs-4">
                <br>
                <img src="./assets/swantech.png" to="/" alt="Swan-Tech" class="img-embed">
              </div>
              <div class="col-xs-4 text-left">
                <router-link to="/pricing">
                  <q-btn round color="primary" icon="attach_money" class="linkIcons" />
                  <span class="linkButtons">Pricing</span>
                </router-link>
                <br>
                <router-link to="/terms">
                  <q-btn round color="primary" icon="info" class="linkIcons" />
                  <span class="linkButtons">Terms</span>
                </router-link>
              </div>
            </div>
          </q-card-main>
        </q-card>
        <q-card color ="white" class="text-black q-ma-md">
          <q-card-title class="text-center bg-primary text-white">{{ this.$route.name.toUpperCase() }}</q-card-title>
          <q-card-separator />
          <q-card-main>
            <!-- router injection -->
            <router-view/>
            <!-- end router injection -->
          </q-card-main>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-3 parent-col">
        <!-- right column -->
        <q-card color ="white" class="text-center text-black q-ma-md">
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
          </q-card-main>
        </q-card>
        <q-card color ="white" class="text-center text-black q-ma-md">
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
              color="red"
            />
          </q-card-main>
        </q-card>
        <q-card color ="white" class="text-center text-black q-ma-md">
          <q-card-title class="bg-primary text-white">Tempo</q-card-title>
          <q-card-separator />
          <q-card-main>
            <q-knob
              v-model="tempo"
              :min="1"
              :max="10"
              color="secondary"
            />
            <q-slider
              v-model="tempo"
              :min="0"
              :max="10"
              :step="1"
              label
              snap
              color="secondary"
            />
          </q-card-main>
        </q-card>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { openURL,colors } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      mode: 'Practical',
      breath: 10,
      difficulty: 6,
      tempo: 5,
      defaultPrimary: ''
    }
  },
  methods: {
    openURL
  },
  watch: {
    mode: function(set) {
      // watch what mode is set and change color theme accordingly
      if (set==='Pro') {
        this.defaultPrimary = colors.getBrand('primary');
        colors.setBrand('primary','#333');
      }
      else if (set === 'Practical') {
        colors.setBrand('primary',this.defaultPrimary);
      }
    }
  }
}
</script>

<style lang="stylus">
@import './styles/quasar.variables'
html 
  background-color: $tertiary
body
  margin: 0
  padding: 0
  background-color: $tertiary
#q-app
  margin-top: 60px
  background-color: $tertiary
.component
  width: 100%;
.parent-col
  background-color: $tertiary
.img-embed
  max-width: 80%
.full-width
  width: 100%
.linkButtons
  font-weight: bold
  color: $primary
  margin: 6px
.linkIcons
  margin-top: 12px
  margin-bottom: 12px
</style>