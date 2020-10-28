<template>
  <div class="field">
    <div
        class="icon icon-pre"
        v-if="prependIcon"
        @click="$emit('click:prepend-icon')"
    >
      <v-icon-base
          :name="prependIcon"
          :color="icons.color"
          :size="icons.size"
      />
    </div>

    <div :class="placeholderClasses">
      {{placeholder}}
    </div>

    <input
        :type="type"
        :name="name"
        :class="inputClasses"
        v-model="myInputValue"
        @click="input.clicked = true"
        @blur="input.clicked = false"
    />

    <div
        class="icon icon-post"
        v-if="appendIcon"
        @click="$emit('click:append-icon')"
    >
      <v-icon-base
          :name="appendIcon"
          :color="icons.color"
          :size="icons.size"
      />
    </div>
  </div>
</template>

<script>
import VIconBase from '@/components/icons/v-icon-base';

export default {
  name: 'v-form-input-base',
  components: {
    VIconBase,
  },
  props: {
    prependIcon: {
      default: false,
    },
    appendIcon: {
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      input: {
        clicked: false,
      },
      icons: {
        size: 16,
        color: 'black'
      },
    }
  },
  computed: {
    inputClasses: {
      get() {
        let classes = [];
        this.prependIcon ? classes.push('with-prepend-icon') : false;
        this.appendIcon ? classes.push('with-append-icon') : false;
        return classes;
      }
    },
    placeholderClasses: {
      get() {
        let classes = ['placeholder'];
        this.input.clicked || this.myInputValue !== '' ? classes.push('placeholder-top') : false;
        return classes;
      }
    },
    myInputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('update:value', value);
      }
    }
  }
}
</script>

<style scoped>
.placeholder {
  color: #ababab;
  position: absolute;
  top:50%;
  transform:translate(0, -50%);
  left: 30px;
  z-index: 1000;
  transition: top .1s linear, font-size .1s linear;
}

.placeholder-top {
  top: 8px;
  font-size: 12px;
  transition: top .1s linear, font-size .1s linear;
}

.field {
  position: relative;
}

.icon {
  position: absolute;
  top:50%;
  transform:translate(0, -50%);
  z-index: 1000;
}

.icon-pre {
  left: 10px;
}

.icon-post {
  right: 10px;
}

.with-prepend-icon {
  padding-left: 30px;
}

.with-append-icon {
  padding-right: 30px;
}

input {
  width: 100%;
  padding: 15px 15px 10px 15px;
  border: 1px solid rgba(0, 0, 0, .3);
  border-radius: 3px;
  box-sizing: border-box;
  transition: border .1s linear;
  outline: none;
}

input:focus {
  border: 1px solid rgba(0, 0, 0, .9);
  transition: border .2s linear;
}

</style>