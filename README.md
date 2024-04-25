# React Simple! UI Library
Basic user interface hooks/components for React application development.
Uses **styled-components** and **storybook** to review the components.

# Usage

## Installation
npm -i @react-simple/react-simple-ui

## Build
npm run build

## Run Storybook
npm run storybook

## Import
import { ... } from "@react-simple/react-simple-ui";

# Configuration
## REACT_SIMPLE_UI

Members in the REACT_SIMPLE_UI object can be set to update the behavior of the provided functions.

### REACT_SIMPLE_UI.FLEX
- **DEFAULT_GAP**: The default gap value for flex layout components (Flex, Stack, Cluster)

# Package content

## Content

- **ObjectRenderer**: Renders the members of the passed object hierarchically for development/testing purposes. Recognizes primitive types, arrays, objects and infinite loops in the hierarchy.

## Layout
### Flex

Flex layout components.

- **Flex**: Renders children into an HTML flex layout. Simplifies the usage of some parameters (direction, gap, nowrap, distributeEvenly)
- **Stack**: Special case of the flex layout when items are rendered into a column below each other.
- **Cluster**: Special case of the flex layout when items are rendered into a row next to each other.
