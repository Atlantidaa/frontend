<template>
    <div
        class="spacer-horizontal"
        :style="style"
    >
    </div>
</template>

<script>
import StyleBuilder from '@/mixins/StyleBuilder';

export default {
    name: 'VSpacerHorizontal',
    props: {
        size: {
            default: 0
        }
    },
    computed: {
        style: {
            get() {
                return StyleBuilder.getString({
                    'width': this.size + 'px'
                });
            }
        }
    }
}
</script>

<style scoped>
.spacer-horizontal {
    display: inline-block;
    height: 100%;
}
</style>
