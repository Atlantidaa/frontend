<template>
    <div
        class="menu"
    >
        <VMenuHeaderAuthorized
            v-if="user.authorized.status"
            :name="user.data.name"
        />
        <VMenuHeaderUnauthorized
            v-else
        />
    </div>
</template>

<script>
import VMenuHeaderAuthorized from '@/components/blocks/menus/VMenuHeaderAuthorized';
import VMenuHeaderUnauthorized from '@/components/blocks/menus/VMenuHeaderUnauthorized';

export default {
    name: 'HeaderMenu',
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    components: {
        VMenuHeaderAuthorized,
        VMenuHeaderUnauthorized
    }
}
</script>