# VE Voyager

A Value Engineering learning game. Fly a ship to client-type worlds; each district has Beginner, Intermediate and Advanced tiers with briefings, a midpoint check and a mission.

## Files

| File | What it holds |
|---|---|
| `index.html` | Engine: overworld, tiers, unlocks, quizzes, scoring |
| `content-core.js` | VE Command, Bridges, ITS, Safety |
| `content-program.js` | Program & Requirements (B/I/A) |
| `content-roads.js` | Roadways (B/I/A) |
| `content-worlds.js` | World map; which districts belong to each world (loaded last) |

To change one district, edit only its content file and commit it. Nothing else needs rebuilding.

## Notes

- Progress is saved in each player's own browser (localStorage). It does not sync between people or devices.
- Fonts load from Google Fonts; without them the text falls back to system fonts.
- Content references Caltrans and federal documents current as of November 2026. Verify policy items (for example the BUILD America 250 Act status) before relying on them.
