import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

export default function NestedGrids() {
    return (
        <Row>
            <Column xs={7}>
                <Wrapper className="box" marginBottom={1} padding={1} rem>
                    <Row>
                        <Column xs={9}>
                            <Wrapper className="box" padding={1} rem>
                                <Row>
                                    <Column xs={4}>
                                        <Wrapper
                                            className="box"
                                            padding={1}
                                            rem
                                        />
                                    </Column>
                                    <Column xs={8}>
                                        <Wrapper
                                            className="box"
                                            padding={1}
                                            rem
                                        />
                                    </Column>
                                </Row>
                            </Wrapper>
                        </Column>
                        <Column xs={3}>
                            <Wrapper className="box" padding={1} rem>
                                <Row>
                                    <Column xsAuto>
                                        <Wrapper
                                            className="box"
                                            padding={1}
                                            rem
                                        />
                                    </Column>
                                </Row>
                            </Wrapper>
                        </Column>
                    </Row>
                </Wrapper>
            </Column>

            <Column xs={5}>
                <Wrapper className="box" marginBottom={1} padding={1} rem>
                    <Row>
                        <Column xs={12}>
                            <Wrapper className="box" padding={1} rem>
                                <Row>
                                    <Column xs={6}>
                                        <Wrapper
                                            className="box"
                                            padding={1}
                                            rem
                                        />
                                    </Column>
                                    <Column xs={6}>
                                        <Wrapper
                                            className="box"
                                            padding={1}
                                            rem
                                        />
                                    </Column>
                                </Row>
                            </Wrapper>
                        </Column>
                    </Row>
                </Wrapper>
            </Column>
        </Row>
    )
}
