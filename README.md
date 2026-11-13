# VE Voyager

A Value Engineering learning game. Fly a ship to worlds; each district has Beginner, Intermediate and Advanced tiers with briefings, a midpoint check and a mission. Start at VE Command.

## Worlds

- **VE Command** (start here): VMA Track, CVS Track, Risk Training, Cost Estimating Training.
- **Contract Types**: Design-Bid-Build, CM/GC (including heavy civil GC/CM), Design-Build, Progressive Design-Build, across Caltrans/FHWA, Sound Transit/FTA, USACE and NAVFAC.
- **DOT Infrastructure** (Caltrans): Program & Requirements, Bridges, Roadways, ITS, Safety.
- Buildings, Choosing By Advantages and Design Charrettes are planned.

## Files

| File | What it holds |
|---|---|
| `index.html` | Engine: overworld, tiers, unlocks, quizzes, scoring |
| `command-vma.js`, `command-cvs.js`, `command-risk.js`, `command-cost.js` | VE Command tracks |
| `contracts-dbb.js`, `contracts-cmgc.js`, `contracts-db.js`, `contracts-pdb.js` | Contract Types districts |
| `content-program.js` | Program & Requirements (B/I/A) |
| `content-roads.js` | Roadways (B/I/A) |
| `content-core.js` | Bridges, ITS, Safety |
| `content-worlds.js` | World map; which districts belong to each world (loaded last) |

To change one district, edit only its content file and commit it. Nothing needs building. A new content file also needs a `<script>` tag in `index.html` before `content-worlds.js`.

## Notes

- Progress is saved in each player's own browser (localStorage). It does not sync between people or devices.
- Fonts load from Google Fonts; without them the text falls back to system fonts.
- The VMA and CVS tracks follow the SAVE International Core Competencies (effective 1 October 2025) and the Certification Program Manual, 19th Edition. Their wording has not yet been checked against the SAVE VM Guide. This is study support, not SAVE exam material.
- Policy content is current as of November 2026. Verify items such as the BUILD America 250 Act status before relying on them.
