<template>
  <div class="events">
    <StudentCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script>
// @ is an alias to /src
import StudentCard from '@/components/StudentCard.vue'
import StudentService from '@/services/StudentService.js'
console.log('View: ' + StudentService.getEvents().data)
export default {
  name: 'StudentView',
  components: {
    // EventCard,
    StudentCard
  },
  create() {
    StudentService.getEvents()
      .then((response) => {
        this.events = response.data
        //console.log('View: ' + response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  data() {
    return {
      events: {}
    }
  }
}
</script>
