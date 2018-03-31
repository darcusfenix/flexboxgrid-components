import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

/**
 * Start
 */
export default function AlignmentStart() {
    return (
        <Row>
            <Column xs={12}>
                <Wrapper className="box" padding={1} rem>
                    <Row xsStart>
                        <Column xs={6}>
                            <Wrapper className="box" padding={1} rem />
                        </Column>
                    </Row>
                </Wrapper>
            </Column>
        </Row>
    )
}
