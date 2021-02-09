<template>
  <router-link :to="{ name: 'detail', params: { userId: id }}" class="list-item">
      <h2>{{name}}</h2>
      <h3>{{team}}</h3>
  </router-link>
</template>

<style lang="scss">
    .list-item {
        display: block;
        padding: $unit_xl;
        margin-bottom: $unit;

        border: 2px solid $primary;
        border-left-width: 12px;
        border-radius: 4px;

        color: $black;
    }
</style>

<script>

export default {
  name: "ListItem",
  props: {
      name: String || null,
      team: String || null,
      id: Number || null
  }
};
</script>