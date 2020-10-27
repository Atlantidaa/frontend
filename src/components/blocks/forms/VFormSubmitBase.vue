<template>
    <div class="submit-default">
        <input
            type="submit"
            :value="value"
        />
    </div>
</template>

<script>
import StyleBuilder from '@/mixins/StyleBuilder';

export default {
    name: 'VFormSubmitBase',
    props: {
        value: {
            type: String,
            default: 'Отправить'
        }
    }
}
</script>

<style scoped>
.submit-primary input {
    border: 0 !important;
    background-color: #08e4fc !important;
}

.submit-primary:hover input {
    background-color: #00cde3 !important;
    transition: background-color .1s linear;
}

.submit-default input{
    border: 1px solid rgba(0, 0, 0, .3);
    border-radius: 3px;
    background-color: #f2f2f2;
}

.submit-default:hover input {
    background-color: #e0e0e0;
    border: 1px solid rgba(0, 0, 0, .6);
    transition: border .2s linear, background-color .1s linear;
}

input[type=submit] {
    cursor: pointer;
    width: 100%;
    outline: none;
    font: inherit;
    padding: 10px;
}
</style>