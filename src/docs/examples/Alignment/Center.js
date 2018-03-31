import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

/**
 * Center
 */
export default function AlignmentCenter() {
    return (
        <Row>
            <Column xs={12}>
                <Wrapper className="box" padding={1} rem>
                    <Row xsCenter>
                        <Column xs={6}>
                            <Wrapper className="box" padding={1} rem />
                        </Column>
                    </Row>
                </Wrapper>
            </Column>
        </Row>
    )
}
