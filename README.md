# Dad Joke Showdown

[![Dad Joke Showdown](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5?ref=xaqxgz17)
[![Rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/septi199/dad-joke-showdown/rank.svg)](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5?ref=xaqxgz17)
[![Reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/septi199/dad-joke-showdown/reward.svg)](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5?ref=xaqxgz17)

One dad joke, written to be told out loud at the barbecue — entered in the
[Dad Joke Showdown](https://make.fun/c/u-mfnakmal-dad-joke-showdown-1d2ce3e5?ref=xaqxgz17)
bounty on make.fun.

## The joke

> I brought a ladder to the barbecue because I heard the steaks were high.

## How it works

`main.ts` writes the joke deterministically to `entry.txt` in
`$MAKEFUN_OUTPUT_DIR` (default `/output`), then reads the file back and
verifies it byte-for-byte against the joke, throwing if anything differs.

```sh
node main.ts
```

Requires Node 22.18 or later.
