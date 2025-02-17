<template>

  <body>
    <div id="resources" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Resources</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md">Resources</span> are determined at random for each tile captured, except for the
      tiles with cities on them. Each tile contains the resources capital, industry, and agriculture.</p>
    <p>
      <span class="text-tan fs-md">Cities</span> are worth a pre-deterimed amount based on their size or importance.
      A
      players capital is worth 15 of each resource. A captured capital is worth 10 of each resource. A medium sized
      city is
      worth 6 of each resources. A small city is worth 4 of each resource. All cities are worth 1 production point.
      City size can be determined by the number of buildings present on the board piece. 5 buildings is a capital
      size. 4 is a medium city and 3 is a small city.
    </p>
    <p><span class="text-tan fs-md">Negative Resources:</span> A player is not allowed to be in the negative for any
      resource. If a player finds themself in the negative they must immediately resolve it by selling assets at the
      begining of their turn or before they end their turn.</p>
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