<template>
    <div class="spacer-vertical" :style="style">

    </div>
</template>

<script>
import StyleBuilder from '@/mixins/StyleBuilder';

export default {
    name: 'VSpacerVertical',
    props: {
        size: {
            default: 0
        }
    },
    computed: {
        style: {
            get() {
                return StyleBuilder.getString({
                    'height': this.size + 'px'
                });
            }
        }
    }
}
</script>

<style scoped>
.spacer-vertical {
    width: 100%;
}
</style>