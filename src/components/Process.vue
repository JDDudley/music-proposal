<template>
  <div class="component">
    <!-- Dev Process Stepper -->
    <q-stepper ref="stepper">
    <q-step default title="Plan">
        <h6>Planning</h6>
        <p>The first step we will need to take is to create a detailed list of the requirements you will need. This will include what pages, content, and any other necessary items you will need. These specifications serve as a roadmap for the rest of the web design process.</p>
    </q-step>
    <q-step title="Build">
        <h6>Application Build</h6>
        <p>Once we have a complete understanding of the specifications of your website we will begin building the site to those specs. During this time we will provide you with updates, when available, to give you an idea of where your project is at and if you want to change anything. We will make up to five total changes during this phase. This limit is in place to ensure that we do not sidetrack from the creation of the entire website and therefore miss the timeline that we are trying to reach. </p>
    </q-step>
    <q-step title="Integrate">
        <h6>Integration</h6>
        <p>Once we’ve agreed on the final layout and design of your website, our team will proceed with integration with the backend of the website, kicking off phase two. This is when we will need to work closely with the backend team that you have decided to work with. </p>
    </q-step>
    <q-step title="Test">
        <h6>Testing</h6>
        <p>Once our developers have finished their work integrating the front-end with the back-end, they will get to work testing your site’s performance and reliability. We’ll use various industry-standard tools to benchmark your site for loading, responsiveness, and speed, while also ensuring that it works reliably on all web browsers and mobile devices.</p>
    </q-step>
    <q-step title="Deploy">
        <h6>Deployment</h6>
        <p>Once we’re sure that your site is ready to be released to the public, we’ll deploy it on your public domain. Then, we’ll shift into a monthly support process that will continue for 12 months. During that period, we’ll create monthly backups of your site, update scripts and plugins to maintain security and reliability, and perform layout and content updates at your request.</p>
    </q-step>
    <q-stepper-navigation>
        <q-btn
        flat
        @click="$refs.stepper.previous()"
        label="Back"
        />
        <q-btn
        @click="$refs.stepper.next()"
        label="Next"
        />
    </q-stepper-navigation>
    </q-stepper>
  </div>
</template>

<style lang="stylus">

</style>

<script>
export default {
  name: 'Process'
}
</script>
