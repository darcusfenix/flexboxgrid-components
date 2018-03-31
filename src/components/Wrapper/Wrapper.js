// @flow
import * as React from "react"
import { remConst, pxConst } from "../constants"

type Props = {
    margin?: number,
    padding?: number,
    paddingTop?: number,
    paddingBottom?: number,
    paddingLeft?: number,
    paddingRight?: number,
    marginTop?: number,
    marginBottom?: number,
    marginLeft?: number,
    marginRight?: number,
    px?: boolean,
    rem?: boolean,
    className?: string,
    children?: any
}

function Wrapper({
    margin,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    px,
    rem,
    className,
    children
}: Props) {
    const style = {
        margin: `${margin}${rem ? remConst : pxConst}`,
        padding: `${padding}${rem ? remConst : pxConst}`,
        paddingTop: `${paddingTop}${rem ? remConst : pxConst}`,
        paddingBottom: `${paddingBottom}${rem ? remConst : pxConst}`,
        paddingLeft: `${paddingLeft}${rem ? remConst : pxConst}`,
        paddingRight: `${paddingRight}${rem ? remConst : pxConst}`,
        marginTop: `${marginTop}${rem ? remConst : pxConst}`,
        marginBottom: `${marginBottom}${rem ? remConst : pxConst}`,
        marginLeft: `${marginLeft}${rem ? remConst : pxConst}`,
        marginRight: `${marginRight}${rem ? remConst : pxConst}`
    }

    return (
        <div className={className} style={style}>
            {children}
        </div>
    )
}

Wrapper.defaultProps = {
    px: true,
    rem: false,
    margin: 0,
    padding: 0
}

export default Wrapper
