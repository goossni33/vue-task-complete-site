<template>
  <div class="home page">
    <h1>Zoek deelnemer</h1>
    <input type="text"  v-model="searchTerm" placeholder="Zoek..." class="search-field">
    <div class="container">
      <ListItem
          v-for="(participant) in filteredParticipants" 
          :key="participant.id"
          :name="participant.naam"
          :team="participant.afdeling"
          :id="participant.id"
      />
    </div>
  </div>
</template>

<style lang="scss">
  .page.home {
    h1 {
      margin-bottom: $unit_xs;
    }

    .search-field {
      display: block;

      width: 100%;
      height: $unit_xl;

      margin-bottom: $unit_xl;
      padding: 0 $unit_s;

      border: 2px solid $grey;
      border-radius: 4px;
    }
  }
</style>

<script>
import ListItem from '@/components/ListItem.vue';

export default {
  name: 'Home',
  components: {
    ListItem
  },
  computed: {
    filteredParticipants() {
      console.log(this.participants)
      return this.participants.filter(participant => participant.naam.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
  },
  data() {
    return {
      participants: [],
      searchTerm: ''
    }
  },
  methods: {
    getParticipants() {
      this.axios.get('http://dump.lwdev.nl/vue-cursus-api/deelnemers/').then((response) => {
        this.participants = response.data;
      })
    }
  },
  created() {
    this.getParticipants();
  }
}
</script>
