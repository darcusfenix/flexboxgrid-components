import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

/**
 * End
 */
export default function AlignmentEnd() {
    return (
        <Row>
            <Column xs={12}>
                <Wrapper className="box" padding={1} rem>
                    <Row xsEnd>
                        <Column xs={6}>
                            <Wrapper className="box" padding={1} rem />
                        </Column>
                    </Row>
                </Wrapper>
            </Column>
        </Row>
    )
}
