import { v4 as uuidv4 } from 'uuid';

export default {
  async beforeCreate(event) {
    if (!event.params.data.uuid) {
      event.params.data.uuid = uuidv4();
    }
  },

  async beforeUpdate(event) {
    if (!event.params.data.uuid) {
      event.params.data.uuid = uuidv4();
    }
  },
};
