<template>
  <div class="component">
    <h4>Proposal</h4>
    <div class="row">
      <div class="col-xs-6">
        <router-link to="/process">
          <q-btn round color="primary" icon="code" class="linkIcons" />
          <span class="linkButtons">Process</span>
        </router-link>
      </div>
      <div class="col-xs-6">
        <p>Summary of the development process and how it will integrate with you, your team, and your end users.</p>
      </div>
      <div class="col-xs-6">
        <router-link to="/timeline">
          <q-btn round color="primary" icon="alarm" class="linkIcons" />
          <span class="linkButtons">Timeline</span>
        </router-link>
      </div>
      <div class="col-xs-6">
        <p>Projected timeline for development through the various stages of this project.</p>
      </div>
      <div class="col-xs-6">
        <router-link to="/pricing">
          <q-btn round color="primary" icon="attach_money" class="linkIcons" />
          <span class="linkButtons">Pricing</span>
        </router-link>
      </div>
      <div class="col-xs-6">
        <p>Explanation of pricing for the various stages of this project.</p>
      </div>
      <div class="col-xs-6">
        <router-link to="/terms">
          <q-btn round color="primary" icon="info" class="linkIcons" />
          <span class="linkButtons">Terms</span>
        </router-link>
      </div>
      <div class="col-xs-6">
        <p>Project terms outline the contract and agreement between Swan-Tech, LLC and client. </p>
      </div>
    </div>
  </div>
</template>

<style lang="stylus">

</style>

<script>
export default {
  name: 'Proposal'
}
</script>
