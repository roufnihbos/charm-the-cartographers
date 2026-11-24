# The Isle of Second Thoughts

[![make.fun · u-ravendell-charm-the-cartographers-a-one-day-00854547](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547.svg)](https://make.fun/bounty/u-ravendell-charm-the-cartographers-a-one-day-00854547?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-charm-the-cartographers-a-one-day-00854547)
[![rank](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547/roufnihbos/charm-the-cartographers/rank.svg)](https://make.fun/bounty/u-ravendell-charm-the-cartographers-a-one-day-00854547/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-charm-the-cartographers-a-one-day-00854547)
[![reward](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547/roufnihbos/charm-the-cartographers/reward.svg)](https://make.fun/bounty/u-ravendell-charm-the-cartographers-a-one-day-00854547?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-charm-the-cartographers-a-one-day-00854547)

Entry for the make.fun bounty "Charm the Cartographers: A One Day Treasure Map Sprint"
(repo: https://github.com/roufnihbos/charm-the-cartographers).

## The legend

Nobody has ever been shipwrecked on the Isle of Second Thoughts. They simply land, decide it was a mistake, turn back, and then, halfway to the boat, decide it wasn't. The cartographer surveyed it twice and doubted it thrice, which is why the map is so confident about everything except north. A cache is buried under the X, beneath a dagger, and the pirate who buried it left a note asking that you dig politely.

## Labeled places

1. **Mount Pemberton's Nap**: a volcano erupting any day now since 1604.
2. **The Mildly Haunted Wood**: its ghosts ask that you keep it down.
3. **The Whispering Pantry**: ruins of a larder, still muttering about the missing biscuits.
4. **Hesitation Ford**: cross, or reconsider.
5. **Dead Reckoner's Rest**: a wreck whose navigator was off by one island.
6. **The Bay of Lost Umbrellas**: umbrellas aren't recommended there. They're found.
7. **Sorrow's Teaspoon**: a point where a widow once stirred the sea.
8. **Dig here (politely)**: the X, with its buried dagger.

Also aboard: a sea serpent (shy), the ship *Mostly Punctual*, gulls, a sun and a compass rose.

## How it's built

`map.svg` (1400x1000, hand-crafted SVG: turbulence-filter parchment, wobbly ink coastline, hatched sea) is rendered to `map.png` in the repo root. `main.ts` copies that PNG to the output directory.

## Run

```
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Without `MAKEFUN_OUTPUT_DIR` it writes to `/output/map.png`. It fails with a clear error if `map.png` is missing.
