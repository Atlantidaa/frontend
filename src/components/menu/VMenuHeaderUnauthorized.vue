<template>
    <div
        class="menu-unauthorized"
    >
        <div
            class="menu-item menu-item-primary"
            @click="opened.authorization = !opened.authorization"
        >
            Войти
        </div>
        <VSpacerHorizontal
            :size="15"
        />
        <div
            class="menu-item"
            @click="opened.registration = !opened.registration"
        >
            Регистрация
        </div>
        <VModalAuthorization
            :opened="opened.authorization"
            @close="opened.authorization = !opened.authorization"
        />
        <VModalRegistration
            :opened="opened.registration"
            @close="opened.registration = !opened.registration"
        />
    </div>
</template>

<script>
import VModalAuthorization from '@/components/modal/v-modal-authorization';
import VModalRegistration from '@/components/modal/v-modal-registration';
import VSpacerHorizontal from '@/components/spacers/v-spacer-horizontal'

export default {
    name: 'VMenuHeaderUnauthorized',
    components: {
        VModalAuthorization,
        VModalRegistration,
        VSpacerHorizontal
    },
    data() {
        return {
            opened: {
                authorization: false,
                registration: false
            }
        }
    }
}
</script>

<style scoped>
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
