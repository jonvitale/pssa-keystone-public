<template>
  <div>
    <div class="container mx-auto px-2 lg:px-6 py-4 md:py-6">
      <Header />
      <br />
      <Navigation />
      <br />
      <Columns>
        <Column side="left" width="1/3">
          <Square color="dark">
            <Heading size="large">PSSA & Keystone Performance</Heading>
            <p>For the {{ $store.getters.sy_c }} school year</p>
          </Square>
          <Square color="tint" class="sticky top-0">
            <QlikCollapsableFilterContainer
              :field-values="[
                { field: 'Sector' },
                { field: 'Learning Network', label: 'Network' },
              ]"
              :blacklist-fields="['School Name']"
              @change="handleSelections"
            />
            <QlikFilter
              style="max-height: 400px"
              title="School Name"
              field="School Name"
              @change="handleFieldSelections"
            />
          </Square>
        </Column>
        <Column side="right" width="2/3">
          <Nuxt />
        </Column>
      </Columns>
    </div>
    <Footer />
  </div>
</template>

<script>
import SelectionsMixin from '~/mixins/SelectionsMixin'
import Header from '~sdp-components/Header/Header'
import Navigation from '~/components/Navigation'
import Footer from '~sdp-components/Footer/Footer'
import Columns from '~sdp-components/PageElements/Columns'
import Column from '~sdp-components/PageElements/Column'
import QlikCollapsableFilterContainer from '~sdp-components/Qlik/QlikCollapsableFilterContainer'
import QlikFilter from '~sdp-components/Qlik/QlikFilter'
import Square from '~sdp-components/PageElements/Square'
import Heading from '~sdp-components/PageElements/Heading'

export default {
  components: {
    Header,
    Navigation,
    Footer,
    Columns,
    Column,
    QlikFilter,
    QlikCollapsableFilterContainer,
    Square,
    Heading,
  },
  mixins: [SelectionsMixin],

  /**
   * Remove field values that we don't want to carry to other pages
   */

  async destroyed() {
    const fieldsToClear = []
    const engine = await this.$qlik.engine
    let field
    fieldsToClear.forEach(async (fieldName) => {
      field = await engine.getField(fieldName)
      await field.clear()
    })
  },
}
</script>
