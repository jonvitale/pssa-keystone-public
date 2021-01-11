<template>
  <div class="container">
    <Square class="flex flex-wrap mb-4" color="light" tight>
      <QlikKPI
        ref="kpi1"
        class="max-w-sm"
        :q-id="kpi1.qId"
        :title="kpi1.title"
        :subtitle="kpi1.subtitle"
        :secondary-label="kpi1.secondaryLabel"
        :description="kpi1.description"
      />
      <QdtComponent
        class="flex-auto m-2 p-2 bg-white"
        type="QdtViz"
        :props="chart1"
      />
    </Square>
    <Square class="flex flex-wrap mb-4" color="light" tight>
      <QlikKPI
        class="max-w-sm"
        :q-id="kpi2.qId"
        :title="kpi2.title"
        :subtitle="kpi2.subtitle"
        :secondary-label="kpi2.secondaryLabel"
        :description="kpi2.description"
      />
      <QdtComponent
        class="flex-auto m-2 p-2 bg-white"
        type="QdtViz"
        :props="chart2"
      />
    </Square>
    <Square
      v-if="!$store.getters['selections/oneSchoolSelected']"
      class="flex flex-wrap mb-4"
      color="light"
      tight
    >
      <QlikKPI
        class="max-w-sm"
        :q-id="kpi3.qId"
        :title="kpi3.title"
        :subtitle="kpi3.subtitle"
        :secondary-label="kpi3.secondaryLabel"
        :description="kpi3.description"
      />
      <QdtComponent
        class="flex-auto m-2 p-2 bg-white"
        type="QdtViz"
        :props="chart3"
      />
    </Square>
  </div>
</template>

<script>
import QdtComponent from '~sdp-components/Qdt/QdtComponent'
import QlikKPI from '~sdp-components/Qlik/QlikKPI'
import Square from '~sdp-components/PageElements/Square'

// qlik objects and kpis
import {
  kpiProAdvELA,
  kpiProAdvMath,
  kpiProAdvScience,
} from '~/definitions/kpis'

import {
  chartLevelELA,
  chartLevelMath,
  chartLevelScience,
} from '~/definitions/qlikObjects'

export default {
  layout: 'main',
  components: {
    QdtComponent,
    QlikKPI,
    Square,
  },
  computed: {
    kpi1() {
      return kpiProAdvELA
    },
    kpi2() {
      return kpiProAdvMath
    },
    kpi3() {
      return kpiProAdvScience
    },
    chart1() {
      return chartLevelELA
    },
    chart2() {
      return chartLevelMath
    },
    chart3() {
      return chartLevelScience
    },
  },
}
</script>
