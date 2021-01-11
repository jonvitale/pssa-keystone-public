import { state as stateFun } from '~/store'

const state = stateFun()

const kpiProAdvELA = {
  qId: 'JJsmu',
  description: `
    % Proficient/Advanced - ELA
    `,
  title: '',
  subtitle: ' ',
  secondaryLabel: 'From  ' + state.SY_P,
  color: 'light',
}

const kpiProAdvMath = {
  qId: '4a234d8b-8346-4d3a-a818-c76e9ec85fba',
  description: `
  % Proficient/Advanced - Math
    `,
  title: '',
  subtitle: ' ',
  secondaryLabel: 'From  ' + state.SY_P,
  color: 'light',
}

const kpiProAdvScience = {
  qId: '081d40bb-323b-408e-aa1e-d3343192587c',
  description: ` % Proficient/Advanced - Science `,
  title: '',
  subtitle: ' ',
  secondaryLabel: 'From  ' + state.SY_P,
  color: 'light',
}

export { kpiProAdvELA, kpiProAdvMath, kpiProAdvScience }
