import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

export default function AutoWidth() {
    return (
        <React.Fragment>
            <Row>
                <Column xsAuto>
                    <Wrapper className="box" marginBottom={1} padding={1} rem />
                </Column>

                <Column xsAuto>
                    <Wrapper className="box" marginBottom={1} padding={1} rem />
                </Column>
            </Row>

            <Row>
                <Column xsAuto>
                    <Wrapper className="box" marginBottom={1} padding={1} rem />
                </Column>

                <Column xsAuto>
                    <Wrapper className="box" marginBottom={1} padding={1} rem />
                </Column>

                <Column xsAuto>
                    <Wrapper className="box" marginBottom={1} padding={1} rem />
                </Column>
            </Row>
        </React.Fragment>
    )
}
