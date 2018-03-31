import React from "react"
import { Wrapper } from "flexboxgrid-components"
import HTMLExample from "./HTMLExample"
import CodeExample from "./CodeExample"

class Example extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showCode: false, showHTML: false }
    }

    toggleCode = (event) => {
        event.preventDefault()
        this.setState((prevState) => {
            return { showCode: !prevState.showCode }
        })
    }

    toggleHTML = (event) => {
        event.preventDefault()
        this.setState((prevState) => {
            return { showHTML: !prevState.showHTML }
        })
    }

    render() {
        const { showCode, showHTML } = this.state
        const { exampleName } = this.props
        const { code, description, name, html } = this.props.example
        // Must use CommonJS require to dynamically require because ES Modules must be statically analyzable.
        const ExampleComponent = require(`./examples/${exampleName}/${name}.js`)
            .default

        return (
            <Wrapper paddingBottom={1.6} paddingTop={1.6} rem>
                {description && <h3>* {description}</h3>}

                <ExampleComponent />

                <a href="" onClick={this.toggleCode}>
                    {showCode ? "Hide" : "Show"} Code
                </a>

                {showCode && <CodeExample>{code}</CodeExample>}
                <br />
                <a href="" onClick={this.toggleHTML}>
                    {showHTML ? "Hide" : "Show"} HTML
                </a>

                {showHTML && <HTMLExample>{html.code}</HTMLExample>}
            </Wrapper>
        )
    }
}

export default Example
