<template>
    <div
        class="menu-authorized"
    >
        <div
            class="menu-item"
        >
            {{name}}
            <Icon
                :name="menu.icon"
                :color="menu.color"
            />
        </div>
        <VSpacerHorizontal
            :size="15"
        />
        <div
            class="menu-item"
            @click="logout"
        >
            Выйти
        </div>
    </div>
</template>

<script>
import VSpacerHorizontal from '@/components/blocks/spacers/VSpacerHorizontal';
import Icon from '@/components/icons/Icon';
import IconsConfig from '@/config/icons';

export default {
    name: 'VMenuHeaderAuthorized',
    props: {
        name: {
            required: true
        }
    },
    components: {
        VSpacerHorizontal,
        Icon
    },
    data() {
        return {
            menu: {
                icon: IconsConfig.menuArrow,
                color: 'inherit'
            }
        }
    },
    methods: {
        logout() {
            this.$root.user.logout();
        }
    }
}
</script>

<style scoped>
.icon {
    display: inline-block;
}

.menu-item {
    cursor: pointer;
    display: inline-block;
    color: white;
}

.menu-item-primary {
    border: 1px solid white;
    border-radius: 3px;
    padding: 7px;
}

.menu-item:hover {
    color: #08e4fc;
    transition: color .2s linear;
}

.menu-item-primary:hover {
    border-color: #08e4fc;
    transition: border-color .1s linear;
}
</style>
