import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

/**
 * Last
 */
export default function Last() {
    return (
        <Row>
            <Column xs={12}>
                <Wrapper padding={1} rem>
                    <Row>
                        <Column xs={2} xsLast>
                            <Wrapper className="box" padding={1} rem>
                                1
                            </Wrapper>
                        </Column>

                        <Column xs={2}>
                            <Wrapper className="box" padding={1} rem>
                                2
                            </Wrapper>
                        </Column>

                        <Column xs={2}>
                            <Wrapper className="box" padding={1} rem>
                                3
                            </Wrapper>
                        </Column>

                        <Column xs={2}>
                            <Wrapper className="box" padding={1} rem>
                                4
                            </Wrapper>
                        </Column>

                        <Column xs={2}>
                            <Wrapper className="box" padding={1} rem>
                                5
                            </Wrapper>
                        </Column>

                        <Column xs={2}>
                            <Wrapper className="box" padding={1} rem>
                                6
                            </Wrapper>
                        </Column>
                    </Row>
                </Wrapper>
            </Column>
        </Row>
    )
}
