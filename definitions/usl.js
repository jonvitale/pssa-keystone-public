export default {
  qInfo: { qType: 'visualization' },
  qHyperCubeDef: {
    qDimensions: [
      {
        qDef: {
          qFieldDefs: ['School Name'],
          qFieldLabels: ['school'],
          qSortCriterias: [{ qSortByLoadOrder: 0, qSortByAscii: 1 }],
        },
        qNullSuppression: true,
      },
      {
        qDef: {
          qFieldDefs: ['School URL Slug'],
          qFieldLabels: ['slug'],
        },
        qNullSuppression: false,
      },
      {
        qDef: {
          qFieldDefs: ['School ID'],
          qFieldLabels: ['srcschoolid'],
        },
        qNullSuppression: true,
      },
      {
        qDef: {
          qFieldDefs: ['Admission Type'],
          qFieldLabels: ['admissionType'],
        },
        qNullSuppression: true,
      },
      {
        qDef: {
          qFieldDefs: ['Learning Network'],
          qFieldLabels: ['network'],
        },
        qNullSuppression: true,
      },
    ],
    qMeasures: [
      {
        qDef: {
          qDef: `Count(distinct {<[School Year]={'$(vMaxYear)'}>} 1)`,
          qLabel: 'Flag_CY',
        },
      },
    ],
    qInitialDataFetch: [{ qWidth: 20, qHeight: 500 }],
  },
}
