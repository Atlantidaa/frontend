<template>
    <header>
        <div class="container">
            <LogoIcon />
            <VMenuHeader :user="$root.user" />
        </div>
    </header>
</template>

<script>
import LogoIcon from '@/components/icons/LogoIcon';
import VMenuHeader from '@/components/blocks/menus/VMenuHeader'

export default {
    name: 'HeaderLayout',
    components: {
        LogoIcon,
        VMenuHeader
    }
}
</script>

<style scoped>
header {
    height: 50px;
    width: 100%;
    background-color: rgb(36, 36, 36);
}

.container {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>