import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

/**
 * Top
 */
export default function AlignmentTop() {
    return (
        <Row xsTop>
            <Column xs={6}>
                <Wrapper className="box" padding={4} rem />
            </Column>
            <Column xs={6}>
                <Wrapper className="box" padding={1} rem />
            </Column>
        </Row>
    )
}
