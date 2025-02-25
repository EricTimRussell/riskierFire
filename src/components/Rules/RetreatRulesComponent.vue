<template>

  <body>
    <div id="retreat" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Retreat Rules</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md"> Retreating:</span> The defending or offensive players can retreat by moving
      there
      units to first row of
      tiles closest to
      them on the combat board and declaring that the unit is retreating. They have to remain on that tile for 1
      turn in order to retreat and be will removed from the board. If the combat board is not being used the
      retreating player declares that they are retreating and the retreating unit will have to survive 1 turn
      before moving the unit in the opposite direction where combat is taking place. Once it is declared that a
      unit is retreating this cannot be undone and the unit will be removed after 1 turn unless it is destroyed.
    </p>
    <p>--Once a unit has retreated the player will move that unit one space in the opposite direction to any
      friendly or non-hostile territory. If the opposite tile is water or hostile territory the unit will move
      to the nearest safe tile. If there are no safe tiles the unit cannot retreat.
    </p>
    <p>--Fighter Aircraft and CAS can retreat instantly and will be returned to any airfield within
      range.
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