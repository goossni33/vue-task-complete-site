<template>
  	<p class="back-button" @click="goBack">&#60; Terug</p>
</template>

<style lang="scss">
    .back-button {
        color: $primary;
        font-weight: bold;
        text-transform: uppercase;

        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
</style>

<script>

export default {
    name: "BackButton",
    methods: {
        goBack() { 
            this.$router.go(-1);
        }
    } 
};
</script>