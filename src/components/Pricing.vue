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
  name: "Pricing",
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
          name: 'cost',
          label: 'Phase Cost',
          required: true,
          align: 'right',
          field: 'cost'
        }
      ],
      timelineTableData: [
        {
          name: 'Phase 1 - Design',
          cost: '$3,000'
        },
        {
          name: 'Phase 2 - Build',
          cost: '$9,000'
        },
        {
          name: 'Phase 3 - Test',
          cost: '$4,000'
        },
        {
          name: 'Phase 4 - Deploy',
          cost: '$2,000'
        }
      ]
    }
  }
};
</script>
