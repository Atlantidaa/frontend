<template>
    <div class="icon" :style="myStyles">
        <i :class="name"></i>
    </div>
</template>

<script>
import StyleBuilder from '@/mixins/StyleBuilder';

export default {
    name: 'Icon',
    props: {
        name: {
            required: true
        },
        size: {
            default: 12
        },
        color: {
            default: 'white'
        }
    },
    computed: {
        myStyles: {
            get() {
                return StyleBuilder.getString({
                    'font-size': this.size + 'px',
                    'color': this.color
                });
            }
        }
    }
}
</script>

<style scoped>
.icon {
    text-align: center;
}
</style>