<template>
  <div>
    <ScrollSpyNav
      class="sticky top-0 bg-white"
      title="Charts:"
      :refs="['v-disproportionality', 'v-subgroup', 'v-map', 'v-table']"
      orientation="row"
    />
    <div class="flex flex-wrap">
      <Square
        ref="v-disproportionality"
        name="Disproportionality"
        class="mb-4 w-full"
        color="light"
      >
        <QdtComponent
          class="w-full bg-white"
          type="QdtViz"
          :props="{
            id: 'sdyPmN',
            type: 'extension',
            height: '400px',
          }"
        />
      </Square>
      <Square
        ref="v-subgroup"
        name="Group Comparisons"
        class="mb-4 w-full"
        color="light"
      >
        <QdtComponent
          class="w-full bg-white"
          type="QdtViz"
          :props="chartProAdvBySubgroup"
        />
        <div class="w-full flex flex-row justify-center">
          <ButtonGroup
            :options="[
              { value: '>2', label: 'Proficient/Advanced' },
              { value: 1, label: 'Below Basic' },
              { value: 2, label: 'Basic' },
              { value: 3, label: 'Proficient' },
              { value: 4, label: 'Advanced' },
            ]"
            @buttonClicked="handleLevelSelection($event.value, $event.label)"
          />
        </div>
      </Square>
      <Square ref="v-map" name="Map" class="w-full mb-4" color="tint">
        <QdtComponent class="w-full" type="QdtViz" :props="map" />
        <div class="w-full flex flex-row justify-center">
          <ButtonGroup
            :options="{
              HS: 'High School Area',
              MS: 'Middle School Area',
              ES: 'Elementary School Area',
            }"
            :selected-value="catchmentType"
            label="Show Background Color By"
            @buttonClicked="
              handleCatchmentSelection($event.value, $event.label)
            "
          />
        </div>
      </Square>
      <Square ref="v-table" name="Table" class="w-full mb-4" color="tint" tight>
        <QdtComponent class="w-full" type="QdtViz" :props="table" />
      </Square>
    </div>
  </div>
</template>

<script>
import QdtComponent from '~sdp-components/Qdt/QdtComponent'
import Square from '~sdp-components/PageElements/Square'
import ButtonGroup from '~sdp-components/PageElements/ButtonGroup'
import ScrollSpyNav from '~sdp-components/Navigation/ScrollSpyNav'

import {
  chartProAdvBySubgroup,
  mapProAdv,
  tableLevelBySchool,
} from '~/definitions/qlikObjects'

export default {
  layout: 'main',
  components: {
    QdtComponent,
    Square,
    ButtonGroup,
    ScrollSpyNav,
  },
  data() {
    return {
      catchmentType: 'HS',
      levelType: '>2',
    }
  },
  computed: {
    chartProAdvBySubgroup() {
      return chartProAdvBySubgroup
    },
    map() {
      return mapProAdv
    },
    table() {
      return tableLevelBySchool
    },
  },
  methods: {
    handleLevelSelection(levelType, levelLabel) {
      this.$qlik.setVariableValueByName('vPerformanceCode_Selected', levelType)
      this.backgroundType = levelType
    },
    handleCatchmentSelection(catchmentType, catchmentLabel) {
      this.$qlik.setVariableValueByName('v_catchment_view', catchmentType)
      this.backgroundType = catchmentType
    },
  },
}
</script>
