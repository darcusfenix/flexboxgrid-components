//@flow
import * as React from "react"
import { Wrapper } from "flexboxgrid-components"
import CodeExample from "./CodeExample"

type Props = {
    exampleName: string,
    example: {
        code: string,
        description: string,
        name: string,
        html: {
            code: string
        }
    }
}

type State = {
    showCode: boolean,
    showHTML: boolean
}

class Example extends React.PureComponent<Props, State> {
    state = { showCode: false, showHTML: false }

    toggleCode = (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault()
        this.setState((prevState) => {
            return { showCode: !prevState.showCode }
        })
    }

    toggleHTML = (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault()
        this.setState((prevState) => {
            return { showHTML: !prevState.showHTML }
        })
    }

    render() {
        const { showCode, showHTML } = this.state
        const { exampleName } = this.props
        const { code, description, name, html } = this.props.example

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

                {showHTML && <CodeExample>{html.code}</CodeExample>}
            </Wrapper>
        )
    }
}

export default Example
