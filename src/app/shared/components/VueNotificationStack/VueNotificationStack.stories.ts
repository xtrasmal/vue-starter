import { storiesOf }                      from '@storybook/vue';
import { withInfo }                       from 'storybook-addon-vue-info';
import VueNotificationStack               from './VueNotificationStack.vue';
import VueButton                          from '../VueButton/VueButton.vue';
import { addNotification, INotification } from './utils';

const story = (storiesOf('2. Components|NotificationStack', module) as any);

story.add('Default', withInfo({})(() => ({
  components: { VueNotificationStack, VueButton },
  template:   `
<div>
  <vue-notification-stack />
  <vue-button secondary @click="addNotificationClick">add notification</vue-button>
</div>
`,
  methods:    {
    addNotificationClick() {
      addNotification(
        {
          title: 'this is a test',
          text:  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
        } as INotification,
      );
    },
  },
})));
