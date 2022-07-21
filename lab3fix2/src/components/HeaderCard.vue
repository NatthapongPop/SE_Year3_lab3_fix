<template>
  <div class="header-card">
    <h5>
      {{ event.organizer }}
      have
      {{ event.category }}
    </h5>
  </div>
</template>

<script>
export default {
  name: 'HeaderCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.header-card {
  padding: 20px;
  width: 400px;
  cursor: pointer;
  border: 3px solid #39495c;
  margin-bottom: 12px;
}
h5 {
  font-size: 25px;
  text-align: right;
}
.header-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
