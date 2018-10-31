import { storiesOf } from '@storybook/vue';
import { withInfo }  from 'storybook-addon-vue-info';
import VueModal      from './VueModal.vue';
import VueButton     from '../VueButton/VueButton.vue';

const story = (storiesOf('2. Components|Modal', module) as any);

story.add('Default', withInfo({})(() => ({
  components: { VueModal, VueButton },
  data() {
    return {
      show: false,
    };
  },
  template:   `
<div>
  <vue-button @click="show = true" secondary>Show</vue-button>
  <vue-modal :show="show" @close="show = false">
    <vue-button primary @click="show = false">Hide</vue-button>
  </vue-modal>
</div>
  `,
})));

story.add('Fit Content', withInfo({})(() => ({
  components: { VueModal, VueButton },
  data() {
    return {
      show: false,
    };
  },
  template:   `
<div>
  <vue-button @click="show = true" secondary>Show</vue-button>
  <vue-modal :show="show" @close="show = false" fit-content>
    <vue-button style="margin: 0;" primary @click="show = false">Hide</vue-button>
  </vue-modal>
</div>
  `,
})));
