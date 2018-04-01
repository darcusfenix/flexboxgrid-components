import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

export default function Responsive() {
    return (
        <React.Fragment>
            <Row>
                <Column xs={12} sm={3} md={2} lg={1}>
                    <Wrapper className="box" marginBottom={1} rem />
                </Column>

                <Column xs={6} sm={6} md={8} lg={10}>
                    <Wrapper className="box" marginBottom={1} rem />
                </Column>

                <Column xs={6} sm={3} md={2} lg={1}>
                    <Wrapper className="box" marginBottom={1} rem />
                </Column>
            </Row>

            <Row>
                <Column xs={12} sm={3} md={2} lg={1}>
                    <Wrapper className="box" marginBottom={1} rem />
                </Column>

                <Column xs={12} sm={9} md={10} lg={11}>
                    <Wrapper className="box" marginBottom={1} rem />
                </Column>
            </Row>

            <Row>
                <Column xs={10} sm={6} md={8} lg={10}>
                    <Wrapper className="box" marginBottom={1} rem />
                </Column>

                <Column xs={2} sm={6} md={4} lg={2}>
                    <Wrapper className="box" marginBottom={1} rem />
                </Column>
            </Row>
        </React.Fragment>
    )
}
