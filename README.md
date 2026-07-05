# ioBroker.becker-centronic-usb

[![NPM version](https://img.shields.io/npm/v/iobroker.becker-centronic-usb.svg)](https://www.npmjs.com/package/iobroker.becker-centronic-usb)
[![Downloads](https://img.shields.io/npm/dm/iobroker.becker-centronic-usb.svg)](https://www.npmjs.com/package/iobroker.becker-centronic-usb)
[![License](https://img.shields.io/github/license/Apfelwurm1/ioBroker.becker-centronic-usb.svg)](LICENSE)

Local and cloud-free control of Becker Centronic RF roller shutters and motors using a compatible Becker USB serial stick (868.3 MHz).

---

## Configuration

### 1. Serial Port
Enter the path to the serial interface of your Becker USB stick (e.g., `COM3` under Windows or `/dev/ttyUSB0` under Linux).

### 2. Remotes (Units)
Define your virtual remotes (Units) in the table:
- **Name**: A freely selectable name (e.g., "Living Room Left")
- **Unit ID**: A unique 5-digit hex code (e.g., `1737b`). This code serves as the ID of the virtual remote.
- **Increment**: The current counter value for the rolling code (default `0`).

---

## States

For each configured Unit (e.g., `1737b`), the adapter automatically creates channels `ch1` to `ch7` with the following states:

- `up` (Button): Move shutter up
- `down` (Button): Move shutter down
- `halt` (Button): Stop movement
- `pair` (Button): Pair virtual channel with the shutter motor
- `up_ip` (Button): Drive to upper intermediate position
- `down_ip` (Button): Drive to lower intermediate position (sun protection)
- `level` (Number, 0-100%): Position control:
  - `100` = Drive UP
  - `0` = Drive DOWN
  - `1-99` = Drive to sun protection position (DOWN_IP)

---

## Pairing Instructions

1. Put the Becker shutter motor into **pairing mode** by pressing the programming button on the back of your *already paired physical original remote* for 3 seconds until the motor clicks briefly.
2. In ioBroker, set the state `becker-centronic-usb.0.units.<id>.ch<channel>.pair` to `true`.
3. The motor confirms successful pairing with a double click. The virtual channel is now paired.

---

## Changelog

### 1.0.7 (2026-07-05)
- (Apfelwurm1) Add test:package script to package.json to resolve Github Action check-and-lint CI failure

### 1.0.6 (2026-07-05)
- (Apfelwurm1) Optimise dependabot configuration, add automerge-dependabot workflow, remove eslint from devDependencies, and add prettier.config.mjs and settings.json

### 1.0.5 (2026-07-05)
- (Apfelwurm1) Include eslint and @types/node explicitly in devDependencies to resolve Peer Dependency conflicts in GitHub Actions

### 1.0.4 (2026-07-05)
- (Apfelwurm1) Address ESLint JSDoc warnings, resolving Github Action CI checks to trigger automatic release deployment

### 1.0.3 (2026-07-05)
- (Apfelwurm1) Address final validation checks, update CI workflow for Node 24 and OS matrix, migrate to shared ESLint configuration and TSConfig, and commit package-lock.json

### 1.0.2 (2026-07-05)
- (Apfelwurm1) Fix configuration schema errors, resize adapter logo, translate README to English, and add CI workflow

### 1.0.1 (2026-06-14)
- (Apfelwurm1) Include MIT LICENSE file in package

### 1.0.0 (2026-06-14)
- (Apfelwurm1) Initial stable production release

---

## License
Copyright (c) 2026 Apfelwurm1 <Apfelwurm1@users.noreply.github.com>

MIT License. See [LICENSE](LICENSE) for more details.
