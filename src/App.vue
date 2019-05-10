<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
.parent-col
  background-color: $tertiary
.img-embed
  max-width: 80%
</style>