import React from "react"
import { Container, Row, Column, Wrapper } from "flexboxgrid-components"
import TableProps from "./TableProps"
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
                <Row>
                    <Column xs={12}>
                        <Wrapper className="text-center">
                            <h1>flexboxgrid-components</h1>
                        </Wrapper>
                    </Column>
                </Row>
                <Row>
                    <Column xsAuto>
                        <Wrapper
                            className="text-center"
                            marginBottom={1}
                            padding={1}
                            rem
                        >
                            <p>
                                Full documentation about styles in{" "}
                                <a
                                    href="http://flexboxgrid.com/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    flexboxgrid
                                </a>
                            </p>
                        </Wrapper>
                    </Column>

                    <Column xsAuto>
                        <Wrapper
                            className="text-center"
                            marginBottom={1}
                            padding={1}
                            rem
                        >
                            <a
                                href="https://github.com/darcusfenix/flexboxgrid-components"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                github
                            </a>
                        </Wrapper>
                    </Column>
                </Row>

                {this.pages.map((page, index) => (
                    <Row key={"example-" + index}>
                        <Column xs={12}>
                            <h2>{page.title}</h2>
                            {page.examples.map((example) => (
                                <Example
                                    key={"example-" + example.name + index}
                                    example={example}
                                    exampleName={example.id}
                                />
                            ))}
                        </Column>
                    </Row>
                ))}

                {components.map((component, index) => (
                    <Row key={"props-" + index}>
                        <Column xs={12}>
                            <h2>{component.name} Properties </h2>
                            <TableProps properties={component.props} />
                        </Column>
                    </Row>
                ))}

                <Row>
                    <Column xs={12}>
                        <h3>Thanks</h3>

                        <p>
                            * Thank you to kristoferjoseph for sharing
                            flexboxgrid library.
                        </p>
                        <p>
                            * And thank you to coryhouse for sharing his course
                            of how do this kind of projects.
                        </p>
                    </Column>
                </Row>
            </Container>
        )
    }
}
