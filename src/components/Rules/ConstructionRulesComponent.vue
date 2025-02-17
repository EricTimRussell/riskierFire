<template>

  <body>
    <div id="construction" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Construction</h2>
      <span class="divider"></span>
    </div>
    <p>
      --All buildings and naval units take 2 turns to construct and their progress can be tracked on the
      construction
      page. <span class="material-symbols-outlined text-warning">
        construction
      </span>
    </p>
    <p>
      --Each city is worth 1 production. One Factory can be built onto capitals large cities and
      medium
      cities to
      increase their production by 1. Factories cannot be built on small cities. The amount of
      production a player has dictates how many units, buildings, and naval units a player can produce per turn.
      NOTE:
      Naval units and buildings take 2 turns to produce meaning a players production capacity will be reduced by 1
      per
      construction project until they are complete.
    </p>
    <p>--Once a project is complete a player can then add that building or naval unit on the
      construction page using
      the "+" icon.</p>
    <p><span class="text-tan fs-md"> Example:</span> A player has 10 production and decides to build 2 airfields and
      2
      cruisers during their build phase. Their total production will be reduced by 4 for 2 turns and their new total
      production is now 6. They can now only produce 6 units instead of 10 per turn until their construction
      projects
      are complete or the player cancels their construction projetcs.</p>
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