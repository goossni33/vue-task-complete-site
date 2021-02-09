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

        transition: .2s all;

        -webkit-box-shadow: 2px 2px 5px 0px #ccc;
        -moz-box-shadow: 2px 2px 5px 0px  #ccc;
        box-shadow: 2px 2px 5px 0px  #ccc;

        &:hover {
          transform: translateY(1px);
          -webkit-box-shadow: none;
          -moz-box-shadow: none;
          box-shadow: none;
        }
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