# props-to-styled

[![Build Status](https://travis-ci.com/docomodigital/props-to-styled.svg?branch=master)](https://travis-ci.com/docomodigital/props-to-styled)
[![Coverage Status](https://coveralls.io/repos/github/docomodigital/props-to-styled/badge.svg?branch=master)](https://coveralls.io/github/docomodigital/props-to-styled?branch=master)
[![npm version](https://badge.fury.io/js/%40docomodigital%2Fprops-to-styled.svg)](https://badge.fury.io/js/%40docomodigital%2Fprops-to-styled)
[![Greenkeeper badge](https://badges.greenkeeper.io/docomodigital/props-to-styled.svg)](https://greenkeeper.io/)

Transform custom props of your styled components to styles. 

## Usage

Using this:

```html
<CustomComponent fixed="top">
    Fixed to top of the page
</CustomComponent>

<CustomComponent fixed="bottom">
    Fixed to bottom of the page
</CustomComponent>
```

```javascript
import styled from 'styled-components';
import { fixed } from 'props-to-styled';

const CustomComponent = styled.div`
    ${fixed};
`
```

the result is similar to:

```html
<div style="position: fixed; top: 0; bottom: inherit; left: 0; right: 0;">
    Fixed to top of the page
</div>

<div style="position: fixed; top: inherit; bottom: 0; left: 0; right: 0;">
    Fixed to bottom of the page
</div>
```

you can use also propTypes:

```javascript
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fixed, fixedPropTypes } from 'props-to-styled';

const CustomComponent = styled.div`
    ${fixed};
`

CustomComponent.propTypes = {
    ...fixedPropTypes
}
```

## Available props

### ellipsis
*Truncate string with "..." for one or many rows*

**Type:** boolean || number

**Values:** true (1 row) || (number of rows) || false

**Default:** false

---

### filter
*Filter CSS attribute <br/> (https://www.w3schools.com/cssref/css3_pr_filter.asp)*

**Type:** string

**Values:** (value of CSS filter)

**Default:** ''

---

### fixed
*Fix to top/bottom of the page when user scrolls*

**Type:** string

**Values:** 'top' || 'bottom' || 'none'

**Default:** 'none'

---

### float
*Float an element to left or right*

**Type:** string

**Values:** 'left' || 'right' || 'none'

**Default:** 'none'

---

### linearGradient
*Add linear gradient as background of a component (only two values, top-to-down)*

**Type:** array (first value of the array is top color, second value is bottom color)

**Values:** (rgba or hex)

**Default:** []

**Example:**
```html
<CustomComponent linearGradient={['#FFFFFF', '#000000']} />
```

---

### shape
*Change shape of the component*

**Type:** string

**Values:** 'circle' || 'square' || 'none'

**Default:** 'none'

---

### swipe
*Make a component swipeable*

**Type:** boolean

**Values:** true || false

**Default:** false

---

### uppercase
*Apply uppercase to a string*

**Type:** boolean

**Values:** true || false

**Default:** false

## Installation

### NPM
```bash
npm install --save props-to-styled
```

## Documentation

To read documentation, go to:

[http://docomodigital.github.io/props-to-styled/latest](http://docomodigital.github.io/props-to-styled/latest)

or run the following command inside the props-to-styled folder: 
```bash
npm run doc:open
```