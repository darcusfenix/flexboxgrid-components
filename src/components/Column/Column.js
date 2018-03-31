// @flow
import * as React from "react"

import classNames from "classnames"
import {
    prefixColumn,
    xsConst,
    smConst,
    mdConst,
    lgConst,
    prefixOffset,
    reorderingFirst,
    reorderingLast
} from "../constants"

type Props = {
    xsAuto?: boolean,
    smAuto?: boolean,
    mdAuto?: boolean,
    lgAuto?: boolean,
    /** Any value of 1,2,3,4,5,6,7,8,9,10,11,12*/
    xsOffset?: number | string,
    /** Any value of 1,2,3,4,5,6,7,8,9,10,11,12*/
    smOffset?: number | string,
    /** Any value of 1,2,3,4,5,6,7,8,9,10,11,12*/
    mdOffset?: number | string,
    /** Any value of 1,2,3,4,5,6,7,8,9,10,11,12*/
    lgOffset?: number | string,
    /** Any value of 1,2,3,4,5,6,7,8,9,10,11,12*/
    xs?: number | string,
    /** Any value of 1,2,3,4,5,6,7,8,9,10,11,12*/
    sm?: number | string,
    /** Any value of 1,2,3,4,5,6,7,8,9,10,11,12*/
    md?: number | string,
    /** Any value of 1,2,3,4,5,6,7,8,9,10,11,12*/
    lg?: number | string,
    xsFirst?: boolean,
    smFirst?: boolean,
    mdFirst?: boolean,
    lgFirst?: boolean,
    xsLast?: boolean,
    smLast?: boolean,
    mdLast?: boolean,
    lgLast?: boolean,
    children?: any
}

function Column({
    xsOffset,
    smOffset,
    mdOffset,
    lgOffset,
    xs,
    sm,
    md,
    lg,
    xsAuto,
    smAuto,
    mdAuto,
    lgAuto,
    xsFirst,
    smFirst,
    mdFirst,
    lgFirst,
    xsLast,
    smLast,
    mdLast,
    lgLast,
    children
}: Props) {
    const columnClass = classNames(
        xsAuto && `${prefixColumn}-${xsConst}`,
        smAuto && `${prefixColumn}-${smConst}`,
        mdAuto && `${prefixColumn}-${mdConst}`,
        lgAuto && `${prefixColumn}-${lgConst}`,
        xsOffset && `${prefixColumn}-${xsConst}-${prefixOffset}-${xsOffset}`,
        smOffset && `${prefixColumn}-${smConst}-${prefixOffset}-${smOffset}`,
        mdOffset && `${prefixColumn}-${mdConst}-${prefixOffset}-${mdOffset}`,
        lgOffset && `${prefixColumn}-${lgConst}-${prefixOffset}-${lgOffset}`,
        xs && `${prefixColumn}-${xsConst}-${xs}`,
        sm && `${prefixColumn}-${smConst}-${sm}`,
        md && `${prefixColumn}-${mdConst}-${md}`,
        lg && `${prefixColumn}-${lgConst}-${lg}`,
        xsFirst && `${reorderingFirst}-${xsConst}`,
        smFirst && `${reorderingFirst}-${smConst}`,
        mdFirst && `${reorderingFirst}-${mdConst}`,
        lgFirst && `${reorderingFirst}-${lgConst}`,
        xsLast && `${reorderingLast}-${xsConst}`,
        smLast && `${reorderingLast}-${smConst}`,
        mdLast && `${reorderingLast}-${mdConst}`,
        lgLast && `${reorderingLast}-${lgConst}`
    )

    return <div className={columnClass}>{children}</div>
}

Column.defaultProps = {
    xsAuto: false,
    smAuto: false,
    mdAuto: false,
    lgAuto: false,
    xsFirst: false,
    smFirst: false,
    mdFirst: false,
    lgFirst: false,
    xsLast: false,
    smLast: false,
    mdLast: false,
    lgLast: false
}

export default Column
