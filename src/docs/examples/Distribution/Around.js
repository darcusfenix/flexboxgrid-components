import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

/**
 * Around
 */
export default function Around() {
    return (
        <Row>
            <Column xs={12}>
                <Wrapper className="box" padding={0.5} rem>
                    <Row xsAround>
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
