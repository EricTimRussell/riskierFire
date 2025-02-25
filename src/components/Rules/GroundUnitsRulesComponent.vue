<template>

  <body>
    <div id="ground" class="d-flex flex-column align-items-center text-center text-tan py-2">
      <h2>Ground Units</h2>
      <span class="divider"></span>
    </div>
    <p>
      <span class="text-tan fs-md">General Rules:</span> All units have a set amount of movement points and
      offensive points. Movement points are the number of
      times a unit can move on the combat board per turn. All land units can move 2 spaces on the main board if they
      are within their own territory. Otherwise land
      units can only move 1 space on the main board if they move into uncontrolled territory. Offensive points are
      the
      number of times a unit can
      attack per turn. Range is the distance a unit can attack an enemy. A range of 1 means the unit can only
      attack tiles that are next to them.
    </p>
    <p>
      <span class="text-tan fs-md">Militia</span> are civilian within cities that will defend a city when attacked. They
      are not organized enough to go on the offensive meaning they are only allowed to fight defensive battles. Small
      cities have 3 units of infantry. Medium cities have 3 infantry and 1 mechanized unit. Large cities will have 3
      infantry and 2 mechanized units. If military units are present at a city players can still use the militia.
      Militia have 1 movement point, 0 offensive points, and a range of 1. Any technology a player has does not apply to
      militia. Militia pieces are colored white.
    </p>
    <p><span class="text-tan fs-md">Infantry</span> are a more defensively balanced unit with limited offensive
      capabilities. They have the ability to occupy fortifications giving them a boost to defensive durability.
      Infantry have 1 movement point, 1 offensive point, and a range of 1.
    </p>
    <p><span class="text-tan fs-md">Special Forces</span> are an effective offensive unit, but are not a good defensive
      unit. They also have the ability to occupy fortifications.
      Special forces have access to certain operational events. Special forces carry laser
      designators giving artillery more accuracy and gaining access to destroyer and cruiser artillery if
      applicable. SF units have 2 movement points, 1 offensive point, and a
      range of 1.
      <span class="text-tan fs-md">Laser Designators</span> are used to direct artillery or missile strikes more
      accurately. LD's are most effective when used against enemies that are locked in combat by another friendly unit.
      An SF unit can also spend their offensive point to attack an enemy directly. <span
        class="text-tan fs-md">NOTE:</span> When an SF unit uses it's offensive point to conduct an LD attack the
      defending unit gets to attack first (if not locked in combat). As an example an SF unit uses it's laser designator
      to attack an IFV. The IFV
      will get a chance to destroy the SF unit before the LD attack occurs.
    </p>
    <p><span class="text-tan fs-md">Mechanized Infantry</span> are a heavier more mobile version of infantry. They
      are
      balanced between offensive ability and defensive ability. Making these units slightly more effective at taking
      on heavier opponents. Mech units have 2 movement points, 1 offensive point, and a range of 1.
    </p>
    <p><span class="text-tan fs-md">Infantry Fighting Vehicle (IFV)</span> are essentially light tanks that are
      effective at taking on infantry and Mechanized units. They are average at taking on other IFV's and are
      ineffective at taking on MBT's. IFV's have 2 movement points, 1 offensive point, and a range of 1.
    </p>
    <p><span class="text-tan fs-md">Main Battle Tank (MBT)</span> are the offensive work horse of any ground
      assault.
      They are effective at taking on any ground enemy, but have very limited defensive capabilities. MBT's have 2
      movement points, 2 offensive points, and a range of 1.
    </p>
    <p><span class="text-tan fs-md">Anti-aircraft</span> is a players ground defense from aircraft and missiles.
      They
      can fire AA missiles at aircraft and missiles that are within range. They have no other offensive ability and
      do
      not have any defensive ability. If they are attacked by ground units they are immediately destroyed. AA have 1
      movement point, 1 offensive point, and a range of 1. On the main board any aircraft
      that attacks a tile with AA will have to survive 1 shot from the AA unit before it can attempt to destroy its
      target.
    </p>
    <p><span class="text-tan fs-md">Artillery</span> is a form of indirect fire unless they have special
      forces
      guiding their shots. Guided shots are much more effective. Artillery have 1 movement point, 1
      offensive point, and a range of 3 on the combat board. Artillery cannot fire into tiles with fortifications.
    </p>
    <p><span class="text-tan fs-md">Missile-Artillery</span> is a very effective form of artillery but are limited
      by
      the need to be guided by a laser designator. Missile artillery can only fire when being guided by special
      forces
      unit. They do not have any defensive ability. They have a range of 4 on the combat board.
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