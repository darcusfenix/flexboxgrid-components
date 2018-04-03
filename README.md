# [flexboxgrid-components](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/darcusfenix/flexboxgrid-components/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/flexboxgrid-components.svg?style=flat)](https://www.npmjs.com/package/flexboxgrid-components) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

flexboxgrid-components is a library of React components that add classes of flexboxgrid to div tags. More info about styles and grid in https://github.com/kristoferjoseph/flexboxgrid

Demo and full documentation in https://darcusfenix.github.io/flexboxgrid-components/

Check if you can use flexbox for your project. https://caniuse.com/#search=flex

## Motivation
Do you think this code looks ugly when you are coding your layouts or components ? 

```html
<div class="container-fluid">
  <div class="row">
      <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1">
          <div class="box" style="margin: 0rem 0rem 1rem; padding: 1rem;"></div>
      </div>
      <div class="col-xs-6 col-sm-6 col-md-8 col-lg-10">
          <div class="box" style="margin: 0rem 0rem 1rem; padding: 1rem;"></div>
      </div>
      <div class="col-xs-6 col-sm-3 col-md-2 col-lg-1">
          <div class="box" style="margin: 0rem 0rem 1rem; padding: 1rem;"></div>
      </div>
  </div>
  <div class="row">
      <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1">
          <div class="box" style="margin: 0rem 0rem 1rem; padding: 1rem;"></div>
      </div>
      <div class="col-xs-6 col-sm-9 col-md-10 col-lg-11">
          <div class="box" style="margin: 0rem 0rem 1rem; padding: 1rem;"></div>
      </div>
  </div>  
<div>
```

So. This library helps you to manage this classes of grid on just simple components
```jsx
<Container fluid>
  <Row>
      <Column xs={12} sm={3} md={2} lg={1}>
          <Wrapper className="box" marginBottom={1} padding={1} rem />
      </Column>

      <Column xs={6} sm={6} md={8} lg={10}>
          <Wrapper className="box" marginBottom={1} padding={1} rem />
      </Column>

      <Column xs={6} sm={3} md={2} lg={1}>
          <Wrapper className="box" marginBottom={1} padding={1} rem />
      </Column>
  </Row>

  <Row>
      <Column xs={12} sm={3} md={2} lg={1}>
          <Wrapper className="box" marginBottom={1} padding={1} rem />
      </Column>

      <Column xs={6} sm={9} md={10} lg={11}>
          <Wrapper className="box" marginBottom={1} padding={1} rem />
      </Column>
  </Row>
</Container>
```

* **Container:** Component that add clases container and container-fluid.
* **Row:** Component that adds classes such row.
* **Column:** Component that adds classes such as col and wiew ports xs, sm, md, lg.
* **Wrapper:** Component that add styles for padding and margin.

## Install
```
$ npm install flexboxgrid flexboxgrid-components
```

## Add styles of flexboxgrid to your project in main file

```es6
import React from "react"
import ReactDOM from "react-dom"
import "flexboxgrid"
import "./myStyles"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"))
```

Thanks

* Thank you to kristoferjoseph for sharing flexboxgrid library.
* And thank you to coryhouse for sharing his course of how do this project.
