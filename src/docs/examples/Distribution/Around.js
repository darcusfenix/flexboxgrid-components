import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

/**
 * Around
 */
export default function Around() {
    return (
        <Row>
            <Column xs={12}>
                <Wrapper className="box" padding={1} rem>
                    <Row xsAround>
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
