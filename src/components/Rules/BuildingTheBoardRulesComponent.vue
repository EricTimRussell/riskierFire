<template>

  <body>
    <div id="gettingStarted" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Main board Setup</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md">First</span> players should assemble the region pieces together until it roughly
      forms a square. Each piece has a color that represents a specific <a href="#mainBoardPieces"
        class="text-primary">environemnt.</a> When building the board it is important to assemble it in a realistic way
      based on each environment and not just randomly mix all the environment types. Also atleast 1 or 2 large bodies of
      water is recommended for players to build navys.
      The size of the board is up to the players, but with 3 to 4 players it is recommended the board is 11x11. There
      will be extra pieces.</p>
    <p>
      <span class="text-tan fs-md">Second</span> players should roll a D12 die and highest to lowest each player chooses
      their starting location on the board. Ties should roll again. Players cannot be within 3 spaces of another players
      capital.
    </p>
    <p>
      <span class="text-tan fs-md">Third</span> each player will be given one research center and can place it anywhere
      within their initial territory during the fourth step. One research center is placed as closely as possible in the
      center of the board so long as it is atleast 4 tiles from any players capital, and not on a water tile.
    </p>
    <p>
      <span class="text-tan fs-md">Fourth</span> players will need to place 10 region claim tokens on the board around
      their capital and within 2 tiles of their capital. These are the players starting regions. Then players will place
      their other starting cities and research center on a tile they just put region claim tokens on. Only 1 building is
      allowed per tile this includes cities.
    </p>
    <p>
      <span class="text-tan fs-md">Lastly</span> since each player starts with 1 research center they need to draw a
      card from the research item card deck at random. Each research center is worth 1 item card that permanently
      upgrades your faction with a new technology. See <a href="#items">Technology</a> for more info about items.
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