<template>

  <body>
    <div id="militia" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Militia</h2>
      <span class="divider"></span>
    </div>
    <p><span class="text-tan fs-md">Militia </span>units are the civilian volunteers of any city to help
      defend from attacks. They are represented by the white pickup truck piece. They have 1 attack point and 1 movement
      point and a range of 1. Militia are essentially a less effective infantry unit, but can still pose a challenge for
      players.
    </p>
    <p>
      <span class="text-tan fs-md">Cities </span> automatically contain militia and will need to be defeated in order to
      capture a city. Capital cities will have 5 militia units, medium cities will have 4 units, and small cities will
      have 3 units. A defending player will get access to these militia units when one of their cities is attacked.
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