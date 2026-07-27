# React Component Library

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Coverage](https://img.shields.io/badge/coverage-83%25-yellow)

A React component library built as a hands-on showcase of common React design patterns, written in TypeScript with Storybook and Jest.

## Quick Start

```bash
git clone https://github.com/olga-ovseychik/react-component-library.git
cd react-component-library
npm install
```

```bash
npm test           # run tests
npm run storybook  # browse components in Storybook
npm run rollup     # build dist/ (cjs + esm + .d.ts)
```

## Stack

React · TypeScript · Storybook · Jest · React Testing Library · Rollup

## Installation

```bash
npm install react-c-lib-mv
```

**Peer dependencies:** `react ^19.2.4`, `react-dom ^19.2.4`

## Components

| Component | Pattern | Description |
|---|---|---|
| `Tabs` | Compound Components | Tab switcher with shared state via Context |
| `Accordion` | Compound Components | Collapsible sections with single/multiple mode and controlled/uncontrolled support |
| `Toggle` | Render Props | Headless boolean toggle — you provide the markup |

## Wiki

Full documentation is in the [project wiki](https://github.com/olga-ovseychik/react-component-library/wiki):

- [Architecture](https://github.com/olga-ovseychik/react-component-library/wiki/Architecture)
- [Application Flows](https://github.com/olga-ovseychik/react-component-library/wiki/Application-Flows)
- [Implementation Decisions](https://github.com/olga-ovseychik/react-component-library/wiki/Implementation-Decisions)
- [Testing](https://github.com/olga-ovseychik/react-component-library/wiki/Testing)
- [Roadmap](https://github.com/olga-ovseychik/react-component-library/wiki/Roadmap)

## Status

In active development. `Tabs`, `Accordion`, and `Toggle` are complete. `Combobox` and `Toast` are next.

## License
See the [LICENSE](./LICENSE.md)
