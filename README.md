# React Accessible `<Details>` / `<Summary>`

The little runt brother of [React Accessible Accordion](https://www.npmjs.com/package/react-accessible-accordion) which is probably what you want instead of this.

But if you do want HTML5 [`<details>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) and [`<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) tags in React with managed state and a few accessibility improvements then this is it.

## Install

```
yarn add react-accessible-details
```

or

```
npm i react-accessible-details
```

## Stale?

Often projects on NPM are considered stale if they're not under active development, but that's a problem for software that does one thing and that may not need further development (unless Issues are raised). So this project is deemed **stable and complete** unless Github Issues are raised, so please don't be scared off by the fact that this project isn't under active development.

## Usage

```jsx
import { Details, Summary } from "react-accessible-details";

export default () => (
  <Details>
    <Summary>FAQ: Why Is New Zealand Missing From Maps?</Summary>
    Shush, don't tell anyone.
  </Details>
);
```

- `Details` takes optional props of `isOpen` (boolean to force open/closed), `isOpenDefault` (boolean to set initial value), and `className` (string).
- `Summary` takes an optional prop of `className` (string).

## Features

Accessibility fixes like `role="button"` on the `<summary>`, setting an appropriate `tabindex`, and using `aria-expanded` to help screen readers know whether it's open or not.

As it's a React component it integrates better with a React state manager, and it implements `<details><summary>` in browsers that don't support it, like IE11.

It works without JavaScript (ie, server-side rendered React when browsers have JavaScript disabled) providing that [browsers natively support `<details>` and `<summary>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#Browser_compatibility).

It's 2KB.

## Requirements

No dependencies except peer dependencies on React 16.8 or later as it uses useState and the new context API.

## Styling

This component doesn't include any styling, and although it will work in IE11 you may need to provide some default styles for that browser such as `display:block` on the `<summary>` tag.

Because both components support `className` props they're compatible with Styled Components.

## Credit

Matthew Holloway at https://springload.co.nz/
