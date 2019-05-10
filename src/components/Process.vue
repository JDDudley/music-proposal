<template>
  <div class="component">
    <!-- Dev Process Stepper -->
    <q-stepper ref="stepper">
    <q-step default title="Design">
        <h6>Design</h6>
        <p>The first step we will need to take is to create a detailed list of the requirements for this project. This will include inputs, supported systems, desired outputs, and various calculations used in the processing of data.</p>
    </q-step>
    <q-step title="Build">
        <h6>Application Build</h6>
        <p>Once we have a complete understanding of the specifications of your project we will begin building the application to those specs. During this time we will provide you with updates, when available, to give you an idea of where your project is at and potential decision-points for changes or improvements. We will make up to five total changes during this phase. This limit is in place to ensure that we do not sidetrack from the creation of the entire project and therefore miss the timeline that we are trying to reach. </p>
    </q-step>
    <q-step title="Integrate">
        <h6>Integration</h6>
        <p>Once we’ve agreed on the final layout and design of your application, our team will proceed with integration with existing inputs, kicking off phase two. This is when we will begin development of required data processing systems.</p>
    </q-step>
    <q-step title="Test">
        <h6>Testing</h6>
        <p>Once our developers have finished their work integrating the GUI with the desired workflow, they will get to work testing your application's performance and reliability in real-world situations. We’ll use various industry-standard tools to benchmark your application for loading, accuracy, and speed, while also ensuring that it works reliably on all supported systems required.</p>
    </q-step>
    <q-step title="Deploy">
        <h6>Deployment</h6>
        <p>Once we’re sure that your application is ready to be put to use, we’ll build and install a final release version. This will include a phase of beta-testing by end users..</p>
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
        color="primary"
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
