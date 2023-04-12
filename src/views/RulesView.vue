<template>
  <body class="container-fluid">
    <div class="row px-2">
      <div class="col-12 text-center mb-2 mt-4">
        <h1 class="fs-xl">Rule Book</h1>
      </div>
      <div class="dropdown-center col-12 d-flex justify-content-center mb-4">
        <button class="dropdown-toggle px-2 py-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Jump to:
        </button>
        <ul class="dropdown-menu drop-menu">
          <nav class="nav nav-pills">
            <a class="nav-link dropdown-item" href="#resources">Resources</a>
            <a class="nav-link dropdown-item" href="#construction">Construction</a>
            <a class="nav-link dropdown-item" href="#mainBoardPieces">Main Board Pieces</a>
            <a class="nav-link dropdown-item" href="#units">Unit Rules</a>
            <a class="nav-link dropdown-item" href="#groundCombat">Ground Combat Rules</a>
            <a class="nav-link dropdown-item" href="#airCombat">Air Combat Rules</a>
            <a class="nav-link dropdown-item" href="#navyCombat">Navy Combat Rules</a>
            <a class="nav-link dropdown-item" href="#items">Item Rules</a>
            <a class="nav-link dropdown-item" href="#events">Event Rules</a>
            <a class="nav-link dropdown-item" href="#structure">Structure Rules</a>
            <a class="nav-link dropdown-item" href="#armyDivision">Army & Division Rules</a>

          </nav>
        </ul>
      </div>
    </div>
    <section class="row px-2">
      <div class="col-12">
        <!-- SECTION Getting Started -->
        <div class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Get Started</h2>
          <span class="divider"></span>
        </div>
        <p>--Once the board has been built and players have chosen their starting locations it is time to get started in
          the app. </p>
        <p><span class="text-tan fs-md">First</span> a player should claim a capital city with the region # of
          0 on the game page. <span class="material-symbols-outlined">
            sports_esports
          </span></p>
        <p><span class="text-tan fs-md">Second</span> a player should place 10 of their circular region number
          pieces around their capital. These are the initial regions to start the game with.</p>
        <p><span class="text-tan fs-md">Third</span>
          a player should place their other cities within the regions they just
          claimed. And then claim each city on the game page with the appropriate region number that is located on the
          region number piece. Be sure to select the correct amount of resource based on the city size.</p>
        <p><span class="text-tan fs-md">Fourth</span>
          a player should claim the rest of their regions without cities by using the claim region button on the game
          page.</p>
        <p><span class="text-tan fs-md">Fifth</span>
          a player should build and place all the buildings they want to start with. Then if a player has a naval yard
          they should build and place any ships they want to start with. During the set-up phase buildings and ships will
          build instantly, but during normal play they take 2 turns to build. Players can add/remove anykind of building
          or units on the game page using the "+" & "-" symbols next to the item. Resources will automatically will be
          updated upon adding and removing anything.</p>
        <p><span class="text-tan fs-md">Lastly</span>
          a player should build and place any units they wish to use. They also should form any armies and divisions they
          want after building the units they want. If a player built a carrier they should also create a carrier card on
          the game page using the "Create Carrier" button.</p>
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
          --Units that are being built will be placed in front of the player off the board until the start of their turn.
          Newly constructed units can only be placed on a players factories or capital.
        </p>
        <!-- SECTION Resources -->
        <div id="resources" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Resources</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">Resources</span> are determined at random for each tile captured, except for the
          tiles with cities on them. Each tile contains the resources capital, industry, and agriculture.</p>
        <p>
          <span class="text-tan fs-md">Cities</span> are worth a pre-deterimed amount based on their size or importance. A
          players capital is worth 15 of each resource. A captured capital is worth 10 of each resource. A medium sized
          city is
          worth 6 of each resources. A small city is worth 4 of each resource. All cities are worth 1 production point.
          City size can be determined by the number of buildings present on the board piece. 5 buildings is a capital
          size. 4 is a medium city and 3 is a small city.
        </p>
        <!-- SECTION Construction -->
        <div id="construction" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Construction</h2>
          <span class="divider"></span>
        </div>
        <p>
          --All buildings and naval units take 2 turns to construct and their progress can be tracked on the construction
          page. <span class="material-symbols-outlined text-warning">
            construction
          </span>
        </p>
        <p>
          --Each city is worth 1 production. One Factory can be built onto capitals large cities and
          medium
          cities to
          increase their production by 1. Factories cannot be built on small cities. The amount of
          production a player has dictates how many units, buildings, and naval units a player can produce per turn. NOTE:
          Naval units and buildings take 2 turns to produce meaning a players production capacity will be reduced by 1 per
          construction project until they are complete.
        </p>
        <p><span class="text-tan fs-md"> Example:</span> A player has 10 production and decides to build 2 airfields and 2
          cruisers during their build phase. Their total production will be reduced by 4 for 2 turns and their new total
          production is now 6. They can now only produce 6 units instead of 10 per turn until their construction projects
          are complete or the player cancels their construction projetcs.</p>
        <!-- SECTION Main Board Pieces -->
        <div id="mainBoardPieces" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Main Board Pieces</h2>
          <span class="divider"></span>
        </div>
        <p>
          <span class="text-tan fs-md">Fortifications:</span> Each player has pillbox or bunker type pieces that
          represents fortifications. When fortifications are built 1 bunker piece is placed on the main board where they
          were built. This will provide 3 bunker pieces on the combat board. Only one can be built per tile. Bunkers can
          be built during the build phase of a players turn and they build instantly. A player must own the tile to build
          fortifications on it. Only Infantry and special forces can
          use fortifications and it gives provides immunity to artillery. It also gives the occupying unit an extra
          hitpoint. A successfull hits on a fortification destroys it, but not the unit occupying it.
        </p>
        <!-- SECTION Land Units -->
        <div id="units" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Ground Units</h2>
          <span class="divider"></span>
        </div>
        <p>
          <span class="text-tan fs-md">General Rules:</span> All units have a set amount of movement points and
          offensive points. Movement points are the number of
          times a unit can move on the combat board per turn. All land units can move 2 spaces on the main board if they
          are within their own territory. Otherwise land
          units can only move 1 space on the main board if they move into uncontrolled territory. Offensive points are the
          number of times a unit can
          attack per turn. Range is the distance a unit can attack an enemy. A range of 1 means the unit can only
          attack tiles that are next to them.
        </p>
        <p><span class="text-tan fs-md">Infantry</span> are a more defensively balanced unit with limited offensive
          capabilities. They have the ability to occupy fortifications giving them a boost to defensive durability.
          Infantry have 1 movement point, 1 offensive point, and a range of 1.
        </p>
        <p><span class="text-tan fs-md">Special Forces</span> are similar to infantry in that they are defensively
          balanced, but are a fair bit more effective offensively. They also have the ability to occupy fortifications.
          Special forces have access to certain operational events that no other unit has. Special forces carry laser
          designators giving artillery more accuracy and gaining access to destroyer and cruiser artillery if
          applicable. SF units have 1 movement point, 1 offensive point, and a range of 1.
        </p>
        <p><span class="text-tan fs-md">Mechanized Infantry</span> are a heavier more mobile version of infantry. They are
          balanced between offensive ability and defensive ability. Making these units slightly more effective at taking
          on heavier opponents. Mech units have 2 movement points, 1 offensive point, and a range of 1.
        </p>
        <p><span class="text-tan fs-md">Infantry Fighting Vehicle (IFV)</span> are essentially light tanks that are
          effective at taking on infantry and Mechanized units. They are average at taking on other IFV's and are
          ineffective at taking on MBT's. IFV's have 3 movement points, 1 offensive point, and a range of 1.
        </p>
        <p><span class="text-tan fs-md">Main Battle Tank (MBT)</span> are the offensive work horse of any ground assault.
          They are effective at taking on any ground enemy, but have very limited defensive capabilities. MBT's have 2
          movement points, 2 offensive points, and a range of 1.
        </p>
        <p><span class="text-tan fs-md">Anti-aircraft</span> is a players ground defense from aircraft and missiles. They
          can fire AA missiles at aircraft and missiles that are within range. They have no other offensive ability and do
          not have any defensive ability. If they are attacked by ground units they are immediately destroyed. AA have 1
          movement point, 1 offensive point, and a range of 1. On the main board any aircraft
          that attacks a tile with AA will have to survive 1 shot from the AA unit before it can attempt to destroy its
          target.
        </p>
        <p><span class="text-tan fs-md">Artillery</span> is a form of indirect fire unless they have special forces
          guiding their shots. Guided shots are much more effective. Artillery have 1 movement point, 1
          offensive point, and a range of 3 on the combat board. Artillery cannot fire into tiles with fortifications.
        </p>
        <p><span class="text-tan fs-md">Missile-Artillery</span> is a very effective form of artillery but are limited by
          the need to be guided by a laser designator. Missile artillery can only fire when being guided by special forces
          unit. They do not have any defensive ability. They have a range of 4 on the combat board.
        </p>
        <!-- SECTION Air Units -->
        <div class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Air Units</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">Fighter Aircraft</span> provide more flexable AA cover for ground units with a
          limited ability to strike ground targets. Fighter aircraft have 4 movement points, 1 offensive point, and a
          range of 1 on the combat board. They can move 3 tiles on the main board per turn. Fighter aircraft must stay
          within 3 tiles of an airfield. When a fighter aircraft is used to make attacks on the main board the player will
          immediately return it to an airfield within range after the attack. Fighters on the combat board can remain for
          the duration of
          the battle but once they are taken off the combat board or the battle ends they will be immediately moved to a
          airfield within range.
        </p>
        <p><span class="text-tan fs-md">Close Air Support</span> aircraft are very effective at destroying ground targets
          and provide some air cover against other CAS aircraft. However, they cannot target fighter aircraft and only
          have a small chance to evade fighter attacks. CAS have 3 movement points, 2 offensive points, and a range of 1
          on the combat board. They have 2 movement points on the main board. CAS can attack once per turn meaning if they
          make attacks on the main board they cannot be involved in any combat board battles and vice versa. CAS do not
          need to be in range of an airfield.
        </p>
        <p><span class="text-tan fs-md">Cargo Aircraft</span> can transport units from airfield to airfield. They can also
          be used to deploy special forces units and infantry by air as paratroopers. They have no offensive or defensive
          ability. Supply aircraft are not used on the combat board. They can move 3 tiles per turn on the main board and
          must remain within 5 spaces of an airfield.
        </p>
        <!-- SECTION Navy Units -->
        <div class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Navy Units</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">General Rules:</span> There are 3 types of naval units, Aircraft carrier,
          Cruiser, and Destroyer. Carriers and destroyers
          have peg holes in
          them to track their damage. When a carrier or destroyer is hit a red peg is placed into one of the holes in the
          center of the ship to
          track damage. Each ship has a specific construction time. Carriers take 3
          turns to
          construct. Cruisers and destroyers
          take 2 turns to construct. All ships can move 1 space per turn on the main board.
        </p>
        <p><span class="text-tan fs-md">Carriers</span> have the ability to carry up to 8 fighter aircraft and CAS units.
          They are durable ships and rely on their aircraft for offensive and defensive capabilities. Carriers have point
          defense systems that let them target incoming missiles and aircraft. Carriers also have the ability to transport
          and land up to 6 ground units. Carriers have 1 movement point, 4 hit points, and no offensive points. Carriers
          point defense has a range of 1 on the mainboard and the combat board. If a carrier is destroyed all the aircraft
          on the ship are destroyed as well unless they are within range of another carrier that has available space or an
          airfield. However, the aircraft that are in the air can continue to fight until the battle is over then they are
          immediately moved to another airfield or carrier within range. Otherwise they are immediately destroyed.
        </p>
        <p><span class="text-tan fs-md">Cruisers</span> are much more versatile than destroyers, but are not as durable or
          nimble. They have the ability to deploy missiles and AA missiles. Cruisers have 2 movement points, 1 hit point,
          and 1 offensive point. On the combat board cruisers AA has a range of 1 and their missiles have a range of 3.
          Cruiser can provide missile artillery support if a special forces unit is being used and the
          cruiser is within 2 tiles on the main board of where the combat is taking place.
        </p>
        <p><span class="text-tan fs-md">Destroyers</span> are heavy combat vessels with large guns and heavy armor giving
          them the ability to absorb hits. They are smaller and more nimble than most naval vessals and are great at
          destroying other naval vessels. They have no AA ability. Destroyers have 2 movement points, 2 hit points, and 2
          offensive points with a range of 1. Destroyers have the ability to provide artillery support to land battles so
          long as they are adjacent to the tile where the battle is taking place.
        </p>
        <!-- SECTION Combat Rules -->
        <div id="groundCombat" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Combat Rules</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md"> General Rules on Combat:</span> Only 1 offensive move per tile is
          allowed per turn on the main board. This means that a player can only attack from a tile once per turn. Land
          battles take place on a seperate board called the combat board. Before combat begins be sure to place any item
          in front of the player at
          the combat board
          when being used.
        </p>
        <p><span class="text-tan fs-md">Ground Combat Setup:</span>
          There is a maximum of 12 ground units each for both sides on the board at one time. There is no limit on
          aircraft. A maximum of 2 ground units can share the same tile, however there is no limit on aircraft. If
          there are more than 12 defending units involved the defending player can decide to retreat the extra units
          or keep them as reserves to be used in combat later. Offense can only deploy a max of 12 units at one time
          as well as keep reserves. The defending player will place their 3 fortifications only 1 per tile and only
          infantry
          or Special forces can use fortifications. All of the defenders units involved will be placed in the middle of
          the combat
          board. The defending player cannot place units on first row of tiles closest to them or past the middle row. The
          offensive player will now place their units anywhere up to the defenders line but not on or past it.
        </p>
        <p>-- The defending player must deploy all their units possible up to the maximum of 12. For example the
          defending player cannot deploy 2 units and have the other 10 retreat. If they wish to try and retreat they
          have to follow the retreat rules.
        </p>
        <p>-- A unit is considered locked in combat when they engage an enemy. When locked in combat both
          units cannot move until another one of them is destroyed or they are relieved by a friendly unit.
        </p>
        <p>--During combat if players lose units they can deploy reserves and they will enter the
          combat board in the row closest to the player. When reserve are placed they cannot move until
          the next turn.
        </p>
        <div id="airCombat" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Air Combat Rules</h2>
          <span class="divider"></span>
        </div>
        <p>--Fighters and CAS can be deployed immediately or they can be set to the side and called up when players
          wish to use them. When aircraft are deployed they will be placed on the 1st row closest to the player
          deploying the aircraft. Fighter aircraft can move and attack immediately. CAS can move immediately but
          they cannot attack until the players next turn.
        </p>
        <p>--Any action an aircraft takes when they are within AA range the AA gets to fire 1 shot
          at the aircraft.
          This applies to all AA that is in range. For example if a player moves their aircraft into AA range the AA
          get to fire at them first before the aircraft can do anything else. During that same turn if that aircraft
          moves onto another tile and is still within AA range the AA gets to fire again. This can occur as many
          times as the aircraft moves within AA range.
        </p>
        <p>--Combat is resolved once all of a players units are destroyed or the attacker/defender retreats from the
          battlefield. If both players declare that they want to end combat before all units have been
          destroyed/retreated
          then
          combat immediately ends.
        </p>
        <p>--Players involved should keep track of units lost and territory lost during combat and then update their
          economies immediately after the combat phase ends.
        </p>
        <p>--When a player takes territory from another player they must hold that territory for 1
          turn before they
          can claim it.
        </p>
        <p><span class="text-tan fs-md">Example of combat:</span> An IFV unit attacks an enemy unit on the space next to
          it. The
          attacking unit
          fails to destroy the defending unit. The attacking player still has 3 movement points left but cannot
          move that unit because they remain locked in battle with enemy. If the attacking unit was successfull they would
          move into
          the space they captured and this would count as 1 movement point. The player can still move the unit 2
          more space but cannot attack anymore.
        </p>
        <p><span class="text-tan fs-md"> Example of combat:</span> A mechanized unit is attacking an infantry unit. They
          both roll
          successfull
          hits and neither of them are destroyed, however the mech unit cannot attack again since it only has 1
          attack point. And since the mech unit was unsuccessfull at destroying the infantry the mech is now locked
          in combat with the infantry and cannot move even though it still has 2 movement points left. If during
          that same turn another unit comes along and destroys the infantry or takes the place of the mechanized unit they
          are no longer locked in combat and
          can now move if they wish. If the mech unit was not relieved at the end of the players turn the other
          player can now go on the offensive against the mech unit.
        </p>
        <!-- SECTION Retreat Rules -->
        <div class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Retreat Rules</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md"> Retreating:</span> The defending or offensive players can retreat by moving there
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
        <p><span class="text-tan fs-md">--Retreating when a unit has no supplies: </span> In the event a army/division has
          no
          supplies left to defend themselves from an attack they must all retreat. A dice roll for each unit
          retreating will be used determine a successfull escape or not. Using a D12 the defending player must roll
          2 higher than the attacking player to escape. If a unit successfully escapes the player can choose which
          adjacent tile to place each unit. If there are no safe tiles to retreat to then all units are destroyed.
        </p>
        <!-- SECTION Attrition -->
        <div class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Attrition</h2>
          <span class="divider"></span>
        </div>
        <p>
          <span class="text-tan fs-md">Attrition</span> occurs when units are cut-off from a direct connection to a city,
          naval yard or carrier. Units that are cut-off are now subject to running out of supplies. Armies and divisions
          only have
          enough supplies for 4 battles. If an army/division or unit runs out of supplies they can no longer attack or
          defends themselves. If they are attacked with no supplies the player must follow the "retreat rules when a unit
          has no supplies".
        </p>
        <!-- SECTION Navy Combat Rules -->
        <div id="navyCombat" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Navy Combat Rules</h2>
          <span class="divider"></span>
        </div>
        <p>--Naval units do not need to occupy the same MB tile to all be included in a naval
          battle. All adjacent
          naval units to the tile where combat is initiated will be included on the combat board. A max of 3 ships
          can occupy a tile at one time.
        </p>
        <p>--Their is a combat board for naval battles as well and is largely identical to the combat board for land
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
        <!-- SECTION Item Card Rules -->
        <div id="items" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Item Rules</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">Items:</span> Players start with 3 item cards chosen at random from the deck.
          Items are cards that are drawn from a pile every time a player takes a territory including territory not owned
          by another player. This does not apply to territory claimed during set-up phase. Players can have as many item
          cards as they want. Once they are used shuffle them back into item deck. Item cards are placed face up in front
          of the player when using an item card at the combat board. The item cards will not be placed face up until both
          players have chosen the items they will be using. Once players choose and place their cards face up they cannot
          remove or change them. Players should not know what items another player is going to use before they place them
          face up.
        </p>
        <p><span class="text-tan">--Exsplosive Reactive Armor:</span> This can be used before a battle begins to
          increase MBT's
          odds of surving a hit. When an MBT takes a hit roll a D12 to determine if the reactive armor deflects the
          shot 1-5 is successful.
        </p>
        <!-- <p><span class="text-tan">--Laser Designator:</span> This item can be used beofre a battle to increase
          the odds of
          artillery hitting its target. Special forces units are required to use the laser designator item. Enemy
          units next to a special forces unit can be lased and give artillery and missiles a better chance of hitting
          their
          target so long as they are within range. Lasing a target uses up 1 movement point, but does not use up the
          special forces 1
          offensive point.
        </p> -->
        <p><span class="text-tan">Point Defense:</span> The point defense item can be used by a defending player
          before a battle
          to provide better AA and anti-missile protection. Point defense applies to all Anti-aircraft units. Increases
          chance to hit aircraft and missiles to a 1-8 with a D12.
        </p>
        <p><span class="text-tan">Aircraft Stealth:</span> The stealth card can be applied before a battle. This
          will reverse
          attack
          order of AA and aircraft meaning the aircraft will fire first and then the AA will fire second. If the AA is
          destroyed by an aircrafts first shot the AA does not
          get to fire.
        </p>
        <p><span class="text-tan">Surplus Fuel:</span> This item can be used before a battle begins to upgrade
          mechanized units
          movement. When used mechanized units can now move 3 spaces on the battlefield but can still only attack
          once per turn.
        </p>
        <p><span class="text-tan">Paratroopers:</span> This item card can be used before combat by the offensive
          player. The
          offensive player can place up to 3 infantry units behind the defending player during the combat board
          set-up phase. This requires the offensive player to have infantry or SF infantry present when the attack
          is initiated. If AA is present then each infantry unit being deployed as paratroopers will have to survive
          one AA attack roll. The AA only gets to shoot once at each paratrooper.
        </p>
        <p><span class="text-tan">Javelin Missiles</span> : This item card equips infantry units (not SF) with
          effective
          anti-tank
          weapons. A roll of 7-12 is now considered a successful hit. Does not apply to defense rolls.
        </p>
        <!-- SECTION Event Card Rules -->
        <div id="events" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Event Rules</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">Event</span> cards are drawn at the end of the last players turn. Any player draws
          the card and proceeds to resolve whatever event the card presents. Players cannot decline any event unless the
          card says otherwise. Players should decide if 2 or 1 events are to be drawn per turn.
        </p>
        <!-- SECTION Structure Rules -->
        <div id="structure" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Structure Rules</h2>
          <span class="divider"></span>
        </div>
        <p><span class="text-tan fs-md">General Rules:</span> Only one structure can occupy any one tile. A player
          must own the tile in order to build anything on the tile. Players
          capitals act as airfields.
        </p>
        <p><span class="text-tan fs-md">Airfields</span> can only be built within the adjacent tiles of cities. Aircraft
          can only be placed on airfields when built. Airfields can also be used to transport units around the board from
          one airfield to another airfield. Moving a unit via airfield uses that units 1 movement point and requires 1
          available movement point as well as a cargo aircraft present at the starting airfield.
        </p>
        <p><span class="text-tan fs-md">Naval Yards</span> can be built on any tile that is next to a water tile. Each
          naval yard can build up to three ships at a time. The player must own the tile the naval yard is built from.
          Naval yards can repair a max of 2 cruisers/destroyers or 1 carrier at one time.
        </p>
        <p><span class="text-tan fs-md">Factories</span> can be built on any city except small cities and are used to
          increase a factions production capacity. When they are built onto cities they increase your faction production
          by 1. Large and medium cities can have 1 factory.
        </p>
        <!-- SECTION Army/Division Rules -->
        <div id="armyDivision" class="d-flex flex-column align-items-center text-center text-tan py-2">
          <h2>Army & Division Rules</h2>
          <span class="divider"></span>
        </div>
        <p>--Army and Division pieces are a way to consolidate large groups of units. Armies are
          groups of 9 units
          and Divisions are groups of 6. Each unit piece has holes that represent each unit within the division or
          army. Division pieces have 10 peg holes and army pieces have 13 peg holes. The group of 4 peg holes
          represent the supplies the army/division has total if their supply line is cut.
        </p>
        <p>--Units contained within these groups will be tracked on paper or the companion app. If
          a unit is
          destroyed it will be erased from the resource sheet or removed on the app.
        </p>
        <p>--Units that are not within a division or army can join these groups to replace destroyed units.
        </p>
        <p>--If more than half of a division or army group is destroyed, and the player does not
          have any extra
          units within range to immediately replace the lost units then the division or army is disbanded and
          replaced with the remaining individual units.
        </p>
        <p>--Divisions and army groups can only move if all units within the group have not already moved. For
          example if a unit traveled 1 space to join the group the entire group cannot move until next turn.
        </p>
        <p>--Divisions and Army groups can instantly capture unnoccupied tiles.
        </p>
      </div>
      <span class="divider"></span>
      <div class="col-12 d-flex justify-content-center py-3 sticky-bottom">
        <button @click="backToTop()" class="p-2">Back-to-Top</button>
      </div>
    </section>
  </body>
</template>

<script>
import { computed, onMounted } from 'vue'
import { rulesService } from '../services/RulesService.js'
import { useRulesStore } from "../stores/RulesStore";
export default {
  setup() {
    async function getUnitRules() {
      try {
        await rulesService.getUnitRules()
      } catch (error) {
        console.error(error);
      }
    }

    async function getBuildingRules() {
      try {
        await rulesService.getBuildingRules()
      } catch (error) {
        console.error(error);
      }
    }

    async function getGeneralRules() {
      try {
        await rulesService.getGeneralRules()
      } catch (error) {
        console.error(error);
      }
    }

    async function getCombatRules() {
      try {
        await rulesService.getCombatRules()
      } catch (error) {
        console.error(error);
      }
    }

    // onMounted(() => {
    //   getUnitRules()
    //   getBuildingRules()
    //   getGeneralRules()
    //   getCombatRules()
    // })
    return {
      units: computed(() => useRulesStore.units),
      buildings: computed(() => useRulesStore.buildings),
      general: computed(() => useRulesStore.general),
      combat: computed(() => useRulesStore.combat),

      backToTop() {
        window.scrollTo(0, 0)
      }

    }
  }
}
</script>

<style lang="scss" scoped>
body {
  color: #1d1d1d;
  text-shadow: #000000 3px 3px 2px;
  color: whitesmoke;
  min-height: 80vh;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 3px;
}

a {
  border-bottom: #1d1d1d 5px solid;
  color: black;
  text-shadow: none;
}

a:hover {
  text-decoration: underline 2px solid black;
}

a:active {
  text-decoration: underline 2px solid black;
}

.drop-menu {
  max-width: 250px;
}

@media screen and (min-width: 768px) {
  p {
    margin-left: 20%;
    margin-right: 20%;
  }
}
</style>