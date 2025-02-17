<template>

  <body>
    <div id="navy" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Navy Units</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md">General Rules:</span> There are 3 types of naval units, Aircraft carrier,
      Cruiser, and Destroyer. Carriers and destroyers
      have peg holes in
      them to track their damage. When a carrier or destroyer is hit a red peg is placed into one of the holes in
      the
      center of the ship to
      track damage. Each ship has a specific construction time. Carriers take 3
      turns to
      construct. Cruisers and destroyers
      take 2 turns to construct. All ships can move 1 space per turn on the main board.
    </p>
    <p><span class="text-tan fs-md">Carriers</span> have the ability to carry up to 8 fighter aircraft and CAS
      units.
      They are durable ships and rely on their aircraft for offensive and defensive capabilities. Carriers have
      point
      defense systems that let them target incoming missiles and aircraft. Carriers also have the ability to
      transport
      and land up to 6 ground units. Carriers have 1 movement point, 4 hit points, and no offensive points. Carriers
      point defense has a range of 1 on the mainboard and the combat board. If a carrier is destroyed all the
      aircraft
      on the ship are destroyed as well. However, the aircraft that are in the air can continue to fight until the
      battle is over then they
      are
      immediately moved to another airfield or carrier within range. Otherwise they are immediately destroyed.
    </p>
    <p><span class="text-tan fs-md">Cruisers</span> are much more versatile than destroyers, but are
      not as durable or
      nimble. They have the ability to deploy missiles and AA missiles. Cruisers have 2 movement points, 1 hit
      point,
      and 1 offensive point. On the combat board cruisers AA has a range of 1 and their missiles have a range of 3.
      Cruisers can provide missile artillery support if a special forces unit is being used and the
      cruiser is within 2 tiles on the main board of where the combat is taking place.
    </p>
    <p><span class="text-tan fs-md">Destroyers</span> are heavy combat vessels with large guns and
      heavy armor giving
      them the ability to absorb hits. They are smaller and more nimble than most naval vessals and are great at
      destroying other naval vessels. They have no AA ability. Destroyers have 2 movement points, 2 hit points, and
      2
      offensive points with a range of 1. Destroyers have the ability to provide artillery support to land battles
      so
      long as they are adjacent to the tile where the battle is taking place.
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