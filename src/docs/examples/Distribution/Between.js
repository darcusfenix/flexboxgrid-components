import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

/**
 * Between
 */
export default function Between() {
    return (
        <Row>
            <Column xs={12}>
                <Wrapper className="box" padding={1} rem>
                    <Row xsBetween>
                        <Column xs={2}>
                            <Wrapper className="box" padding={1} rem />
                        </Column>

                        <Column xs={2}>
                            <Wrapper className="box" padding={1} rem />
                        </Column>

                        <Column xs={2}>
                            <Wrapper className="box" padding={1} rem />
                        </Column>
                    </Row>
                </Wrapper>
            </Column>
        </Row>
    )
}
