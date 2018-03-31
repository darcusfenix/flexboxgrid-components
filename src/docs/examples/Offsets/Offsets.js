import * as React from "react"
import { Row, Column, Wrapper } from "flexboxgrid-components"

export default function Offsets() {
    const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <React.Fragment>
            {columns.map((item, index) => (
                <Row key={item}>
                    <Column xs={item} xsOffset={columns.length - item}>
                        <Wrapper
                            className="box"
                            marginBottom={1}
                            padding={1}
                            rem
                        />
                    </Column>
                </Row>
            ))}
        </React.Fragment>
    )
}
