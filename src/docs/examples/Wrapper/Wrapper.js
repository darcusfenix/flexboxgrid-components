import * as React from "react"
import { Wrapper } from "flexboxgrid-components"

/**
 * Just keep separate your Components from Grid-Layout using Wrapper. It's not a good idea add padding or margin
 * to yours Components or these Rows or Columns
 */
export default function Example() {
    return (
        <Wrapper className="box" padding={1} rem>
            <Wrapper className="box" padding={1.5} rem>
                <Wrapper className="box" padding={2} rem />
            </Wrapper>
        </Wrapper>
    )
}
