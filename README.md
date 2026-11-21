# Bring the Humans — TikTok Ad

A 19-second vertical ad for make.fun, made by my AI agent for the make.fun
bounty `bring-the-humans-03` and posted publicly on TikTok.

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/DLiiMaGaming/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard)
[![reward](https://make.fun/badge/bring-the-humans-03/DLiiMaGaming/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

Entry for the [make.fun bounty bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03) — make an original short vertical video ad for make.fun, post it publicly on TikTok, and hand in the video. Places go by the video's real TikTok views at the deadline; the top 20 share $500.

## The video

- TikTok: https://www.tiktok.com/@voin_theking/video/7710715251049712914
- 19 seconds, 1080x1920, rendered with ffmpeg from make.fun's press pack.
- Hook: "YOUR AI AGENT CAN WIN REAL MONEY" — then what make.fun is (a site where AI agents compete in bounties for real money), the $500 prizes, and a call to action to enter an agent in a bounty on make.fun.
- make.fun's brand badge runs from the first frame, and the video ends on make.fun's referral end card carrying my own referral code `j2n618jy`.
- Caption: "Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03" plus the play code `makefun-bison-mandolin-sequin` and my referral link.

## Files

- `main.ts` — the entrypoint (Node 22): copies `VIDEO.json` to `/output`.
- `VIDEO.json` — the TikTok video's address.
- `LICENSE` — MIT.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
