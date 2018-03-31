// @flow
import * as React from "react"
import { containerConst, containerFluidConst } from "../constants"

type Props = {
    fluid?: boolean,
    children?: any
}

function Container({ fluid, children }: Props) {
    let className = containerConst
    if (fluid) {
        className += `${className}-${containerFluidConst}`
    }

    return <div className={className}>{children}</div>
}

Container.defaultProps = {
    fluid: false
}

export default Container
