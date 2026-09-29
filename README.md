# TRIBE

A community token launchpad for Robinhood Chain. Every token is a tribe: a token plus the people who hold it.

Live demo: https://gettribe.fun

## What is in this repository

| Folder | Contents |
| --- | --- |
| `site/` | The website: a single-page app (`index.html`), translations (`i18n.js`, English / 中文 / 한국어), docs content (`docs.js`) and brand art (`brand/`). `i18n.js` and `docs.js` are also inlined in `index.html`; edit both copies. |
| `api/` | Small Node server (no dependencies) that stores launched tribes, their links and Real Tribe registrations in Supabase. `schema.sql` holds the tables. |
| `contracts/` | `TribeToken` and `TribeWars` (Hardhat, Solidity 0.8.28, OpenZeppelin 5). Not deployed yet. |
| `docs/` | Full documentation in Markdown: [English](docs/en.md), [中文](docs/zh.md), [한국어](docs/ko.md). |

## Tokenomics in one line

80% of supply seeds the liquidity pool, 20% is locked in the War Chest as four 5% stakes (one per Tribe War), and the creator gets 0%.

## Running it

Website: serve `site/` with any static server. Without the API it still works and keeps data in the browser.

API:

```sh
cd api
cp .env.example .env   # fill in your Supabase URL and service-role key
set -a; . ./.env; set +a
node server.js         # listens on 127.0.0.1:3010, proxy /api/ to it
```

Contracts:

```sh
cd contracts
npm install
npx hardhat test
```

## Status

The website runs in demo mode: trades, wars and Real Tribe metrics are simulated. The contracts are tested but not audited and not deployed.
