<template>
    <div class="sample-button">
        <slot>
        </slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            
        },
        data() {
            return {
                text: "Sample button",
            }
        }
    }
</script>

<style scoped>
.sample-button {
    padding: 5px;
    cursor: pointer;
    display: inline-block;
    background-color: rgb(224, 224, 96);
}
.sample-button:hover {
    background-color: rgb(172, 172, 130);
}
</style>