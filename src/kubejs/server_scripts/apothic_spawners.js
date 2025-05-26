ServerEvents.recipes(event => {
  event.custom({
    "type": "apotheosis:spawner_modifier",
    "conditions": [{
      "type": "apotheosis:module",
      "module": "spawner"
    }],
    "mainhand": {
      "item": "minecraft:egg"
    },
    "stat_changes": [{
      "id": "baby",
      "value": true
    }]
  }).id("apotheosis:spawner/baby")

  event.custom({
    "type": "apotheosis:spawner_modifier",
    "conditions": [{
      "type": "apotheosis:module",
      "module": "spawner"
    }],
    "mainhand": {
      "item": "minecraft:egg"
    },
    "offhand": {
      "item": "minecraft:quartz"
    },
    "consumes_offhand": false,
    "stat_changes": [{
      "id": "baby",
      "value": false
    }]
  }).id("apotheosis:spawner/baby_inverted")
})
