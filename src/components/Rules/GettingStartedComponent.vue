<template>

  <body>

    <div id="gettingStarted" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Getting Started</h2>
      <span class="divider"></span>
    </div>
    <p>--Once the board has been built and players have chosen their starting locations it is time to get started in
      the app.</p>
    <p><span class="text-tan fs-md">First</span> a player should claim a capital city with the region # of
      0 on the game page. <span class="material-symbols-outlined">
        sports_esports
      </span> And then claim each city on the game page with the appropriate region number that is located on the
      region claim token.
    </p>
    <p><span class="text-tan fs-md">Second</span>
      a player should claim all regions that have region claim tokens by using the claim region button on the game
      page. The region number should match the number on the region calim token.</p>
    <p><span class="text-tan fs-md">Third</span>
      a player should build and place all the buildings they want to start with. Then if a player has a naval yard
      they should build and place any ships they want to start with. During the set-up phase buildings and ships
      will
      build instantly, but during normal play they take 2 turns to build. Players can add/remove anykind of building
      or units on the game page using the "+" & "-" symbols next to the unit they wish to build. Resources will
      automatically be
      updated upon adding and removing anything.</p>
    <p><span class="text-tan fs-md">Lastly</span>
      a player should build and place any units they wish to use. If a player builds a carrier they should also create a
      carrier card on
      the game page using the "Create Carrier" button. See <a href="#navy">Navy Unit Rules.</a></p>
    <!-- SECTION Turn Phases -->
    <div class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Turn Phases of Play</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md">Turn Order of Play</span> -At the start of a players turn the <span
        class="text-tan fs-md">First Phase</span> is to
      place any buildings, ships, or units that have
      finished building. The <span class="text-tan fs-md">Second Phase</span> the player should claim any new
      territory. <span class="text-tan fs-md">Third Phase</span> they should make and
      resolve any combat moves. <span class="text-tan fs-md">Fourth Phase</span> the player makes non-combat moves.
      <span class="text-tan fs-md">Fifth Phase</span> the player can build new
      units and buildings. The units will not be placed on the board until the start of the players next turn.
    </p>
    <p>
      --Units that are being built will be placed in front of the player off the board until the start of their
      turn.
      Newly constructed units can only be placed on a players factories or capital.
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

a {
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  p {
    margin-left: 20%;
    margin-right: 20%;
  }

}
</style>