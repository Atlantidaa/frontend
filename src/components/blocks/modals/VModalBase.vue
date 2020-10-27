<template>
    <transition
        name="modal-fade"
        @after-enter="events.rendered = true"
        @before-enter="events.entered = true"
    >
        <div
            class="modal"
        >
            <div
                class="modal-close"
                :style="closeButtonStyles"
            >
                <VSpacerVertical
                    :size="2"
                />
                <Icon
                    :name="settings.close.icon"
                    :size="settings.close.size"
                    :color="settings.close.color"
                />
            </div>
            <div
                class="modal-content"
                :ref="refs.modalContent"
                v-click-outside="close"
            >
                <div
                    class="modal-content-title"
                >
                    {{title}}
                </div>
                <VSpacerVertical
                    v-if="$slots.body"
                    :size="settings.spacer.default.body.size"
                />
                <div
                    class="modal-content-body"
                >
                    <slot
                        name="body"
                    >
                    </slot>
                </div>
                <VSpacerVertical
                    v-if="$slots.footer"
                    :size="settings.spacer.default.body.size"
                />
                <div
                    class="modal-content-footer"
                >
                    <slot
                        name="footer"
                    >
                    </slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import ClickOutside from 'vue-click-outside';
import IconsConfig from '@/config/icons';
import StyleBuilder from '@/mixins/StyleBuilder'
import Icon from '@/components/icons/Icon';
import VSpacerVertical from '@/components/blocks/spacers/VSpacerVertical';

export default {
    name: 'VModalBase',
    directives: {
        ClickOutside
    },
    components: {
        Icon,
        VSpacerVertical
    },
    props: {
        title: {
            default: false
        }
    },
    data() {
        return {
            events: {
                rendered: false,
                entered: false
            },
            refs: {
                modalContent: 'modalContent'
            },
            settings: {
                spacer: {
                    default: {
                        body: {
                            size: 30
                        },
                        footer: {
                            size: 20
                        }
                    }
                },
                close: {
                    icon: IconsConfig.close,
                    size: 16,
                    color: 'white'
                }
            }
        }
    },
    methods: {
        close() {
            if (this.events.rendered === true) {
                this.events.rendered = false;
                this.$emit('close');
            }
        }
    },
    computed: {
        closeButtonStyles: {
            get() {
                if (this.events.entered) {
                    return StyleBuilder.getString({
                        'margin-top': -this.$refs[this.refs.modalContent].clientHeight + 'px',
                        'margin-left': this.$refs[this.refs.modalContent].clientWidth + 'px',
                    });
                }
            }
        }
    }
}
</script>

<style scoped>
.modal {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
}

.modal-content {
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, .1);
    padding: 30px;
    border-radius: 5px;
}

.modal-content-title {
    font-size: 26px;
    font-weight: 500;
}

.modal-close {
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    background-color: black;
    padding: 5px;
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, .1);
    width: 20px;
    height: 20px;
}

.modal-close .icon {
    margin: 0 auto;
}

.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .3s ease
}
</style>
