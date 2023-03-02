export class Unit {
  constructor(data) {
    this.infantry = data.infantry
    this.specialForces = data.specialForces
    this.mechanized = data.mechanized
    this.ifv = data.ifv
    this.mbt = data.mbt
    this.artillery = data.artillery
    this.missileArtillery = data.missileArtillery
    this.antiAircraft = data.antiAircraft
    this.fighterAircraft = data.fighterAircraft
    this.cas = data.cas
    this.carrier = data.carrier
    this.cruiser = data.cruiser
    this.destroyer = data.destroyer
    this.cargoAircraft = data.cargoAircraft
    this.armiesDivisions = data.armiesDivisions
  }
}

export class Building {
  constructor(data) {
    this.airfield = data.airfield
    this.navalYard = data.navalYard
    this.factory = data.factory
    this.construction = data.construction
    this.fortification = data.fortification
  }
}

export class General {
  constructor(data) {
    this.resources = data.resources
    this.cities = data.cities
    this.pieces = data.pieces
    this.events = data.events
    this.items = data.items
  }
}

export class Combat {
  constructor(data) {
    this.naval = data.naval
    this.air = data.air
    this.ground = data.ground
    this.retreat = data.retreat
    this.attrition = data.attrition
  }
}