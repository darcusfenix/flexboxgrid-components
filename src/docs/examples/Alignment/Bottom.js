import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

/**
 * Bottom
 */
export default function AlignmentBottom() {
    return (
        <Row xsBottom>
            <Column xs={6}>
                <Wrapper className="box" padding={8} rem />
            </Column>
            <Column xs={6}>
                <Wrapper className="box" padding={1} rem />
            </Column>
        </Row>
    )
}
