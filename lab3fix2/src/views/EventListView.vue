<template>
  <h1>Events For Good</h1>
  <!--new element-->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <HeaderCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  font-size: 20px;
}
</style>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import HeaderCard from '@/components/HeaderCard.vue'
import EventService from '@/services/EventService.js'
// import axios from 'axios'
export default {
  name: 'EventListView',
  components: {
    EventCard,
    HeaderCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
