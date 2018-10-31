import { storiesOf } from '@storybook/vue';
import { withInfo }  from 'storybook-addon-vue-info';
import VueInput      from './VueInput.vue';
import VueButton     from '../VueButton/VueButton.vue';
import VueModal      from '../VueModal/VueModal.vue';

const story = (storiesOf('2. Components|Input', module) as any);

story.add('Default', withInfo({})(() => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" />`,
})));

story.add('Disabled', withInfo({})(() => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" :disabled="true" />`,
})));

story.add('Hint', withInfo({})(() => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" message="description" />`,
})));

story.add('Validation/Error state', withInfo({})(() => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" v-model="model" validation="required|integer" required message="please enter a number" errorMessage="This is not a number" />`,
})));

story.add('Readonly', withInfo({})(() => ({
  components: { VueInput },
  data() {
    return {
      model: '',
    };
  },
  template:   `<vue-input placeholder="Name" name="name" id="name" value="foo" readonly />`,
})));

story.add('SPA autofocus', withInfo({})(() => ({
  components: { VueInput, VueButton, VueModal },
  data() {
    return {
      model: '',
      show:  false,
    };
  },
  template:   `<div>
  <vue-button @click="show = !show" primary>Login</vue-button>

  <vue-modal :show="show" @close="show = false">
    <vue-input autofocus placeholder="Name" name="name" id="name" v-model="model" />
    <vue-button @click="show = !show">Close</vue-button>
  </vue-modal>
</div>`,
})));
