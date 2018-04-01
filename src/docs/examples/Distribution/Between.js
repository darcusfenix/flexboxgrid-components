import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

/**
 * Between
 */
export default function Between() {
    return (
        <Row>
            <Column xs={12}>
                <Wrapper className="box" padding={0.5} rem>
                    <Row xsBetween>
                        <Column xs={2}>
                            <Wrapper className="box" rem />
                        </Column>

                        <Column xs={2}>
                            <Wrapper className="box" rem />
                        </Column>

                        <Column xs={2}>
                            <Wrapper className="box" rem />
                        </Column>
                    </Row>
                </Wrapper>
            </Column>
        </Row>
    )
}
