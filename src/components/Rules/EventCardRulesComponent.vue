<template>

  <body>
    <div id="events" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Event Rules</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md">Event</span> cards are drawn at the end of the last players turn. Any player
      can draw
      the card and proceed to resolve whatever event the card presents. Players cannot decline any event unless the
      card says otherwise.
    </p>
  </body>

</template>

<script setup>

</script>

<style scoped>
body {
  color: #1d1d1d;
  text-shadow: #000000 2px 2px;
  color: whitesmoke;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 3px;
}

@media screen and (min-width: 768px) {
  p {
    margin-left: 20%;
    margin-right: 20%;
  }

}
</style>