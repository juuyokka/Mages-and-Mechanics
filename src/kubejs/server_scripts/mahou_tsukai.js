ServerEvents.recipes(event => {
  event.shaped(
    "mahoutsukai:pestle",
    [
      "  B",
      "D/ ",
      "*D "
    ],
    {
      "/": "minecraft:blaze_rod",
      "B": "minecraft:nether_brick",
      "D": "minecraft:diamond",
      "*": "minecraft:nether_star"
    }
  ).id("mahoutsukai:pestle")

  event.shaped(
    "mahoutsukai:mortar",
    [
      "B B",
      " D "
    ],
    {
      "B": "minecraft:nether_brick",
      "D": "minecraft:diamond"
    }
  ).id("mahoutsukai:mortar")
})
