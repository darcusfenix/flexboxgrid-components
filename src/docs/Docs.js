import React from "react"
import { Container } from "flexboxgrid-components"
import Props from "./Props"
import Example from "./Example"
import components from "../../config/componentData"
import examples from "../../config/componentDataExamples"

export default class Docs extends React.Component {
    constructor(props) {
        super(props)
        this.pages = [
            {
                id: "Responsive",
                title: "Responsive",
                examples: []
            },
            {
                id: "Fluid",
                title: "Fluid",
                examples: []
            },
            {
                id: "Offsets",
                title: "Offsets",
                examples: []
            },
            {
                id: "AutoWidth",
                title: "Auto Width",
                examples: []
            },
            {
                id: "NestedGrids",
                title: "Nested Grids",
                examples: []
            },
            {
                id: "Alignment",
                title: "Alignment",
                examples: []
            },
            {
                id: "Distribution",
                title: "Distribution",
                examples: []
            },
            {
                id: "Reordering",
                title: "Reordering",
                examples: []
            },
            {
                id: "Reversing",
                title: "Reversing",
                examples: []
            },
            {
                id: "Wrapper",
                title: "Wrapper",
                examples: []
            }
        ]
        this.pages = this.pages.map((page) => ({
            ...page,
            examples: examples.reduce((a, b, c) => {
                const filtered = b.filter((example) => example.id === page.id)
                if (filtered.length) {
                    return filtered
                }
                return a
            }, [])
        }))
    }

    render() {
        return (
            <Container>
                <h1>flexboxgrid-components</h1>
                <p>
                    by
                    <a
                        href="https://github.com/darcusfenix"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @Juan Crisóstomo
                    </a>. Full documentation about styles in
                    http://flexboxgrid.com/
                </p>

                {this.pages.map((page, index) => (
                    <React.Fragment key={"example-" + index}>
                        <h2>{page.title}</h2>
                        {page.examples.map((example) => (
                            <Example
                                key={"example-" + example.name + index}
                                example={example}
                                exampleName={example.id}
                            />
                        ))}
                    </React.Fragment>
                ))}

                {components.map((component, index) => (
                    <React.Fragment key={"props-" + index}>
                        <h2>{component.name} Properties </h2>
                        <Props props={component.props} />
                    </React.Fragment>
                ))}
            </Container>
        )
    }
}
/**
 {componentData.map((component) => (
                 <ComponentPage component={component} examples={examples} />
             ))}
*/
