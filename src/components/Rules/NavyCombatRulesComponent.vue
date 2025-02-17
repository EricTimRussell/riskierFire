<template>

  <body>
    <div id="navyCombat" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Navy Combat Rules</h2>
      <span class="divider"></span>
    </div>
    <p>--Naval units do not need to occupy the same MB tile to all be included in a naval
      battle. All adjacent
      naval units to the tile where combat is initiated will be included on the combat board. A max of 3 ships
      can occupy a tile at one time.
    </p>
    <p>--The same combat board is used for naval battles as well and is largely identical to the combat board for
      land
      battles. The difference however is that the defending player can only place their units on the 2nd and 3rd
      row closest to them. The attacking player can place their units on the first 3 rows closest to them.
    </p>
    <p>--Any action an aircraft takes when they are within AA range the AA gets to fire 1 shot
      at the aircraft.
      This applies to all AA that is in range. For example if a player moves their aircraft into AA range the AA
      get to fire at them first before the aircraft can do anything else (unless the aircraft is using the
      stealth item). During that same turn if that aircraft moves onto another tile and is still within AA range
      the AA gets to fire again. This can occur as many times as the aircraft moves within AA range.
    </p>
    <p>--Destroyers have heavy armor giving them a chance to absorb any incoming hits.
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