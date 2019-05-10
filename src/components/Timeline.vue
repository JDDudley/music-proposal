<template>
  <div class="component">
    <q-table
      :data="timelineTableData"
      :columns="timelineTableColumns"
      row-key="name"
      hide-bottom
    />
  </div>
</template>

<style lang="stylus">
</style>

<script>
export default {
  name: "Timeline",
  data () {
    return {
      timelineTableColumns: [
        {
          name: 'phase',
          label: 'Project Phase',
          required: true,
          align: 'left',
          field: 'name'
        },
        {
          name: 'date',
          label: 'Projected Timeline',
          required: true,
          align: 'right',
          field: 'date'
        }
      ],
      timelineTableData: [
        {
          name: 'Phase 1 - Design',
          date: '15 Days'
        },
        {
          name: 'Phase 2 - Build',
          date: '45 Days'
        },
        {
          name: 'Phase 3 - Test',
          date: '20 Days'
        },
        {
          name: 'Phase 4 - Deploy',
          date: '10 Days'
        }
      ]
    }
  }
};
</script>
