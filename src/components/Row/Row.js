// @flow
import * as React from "react"
import classNames from "classnames"
import {
    prefixRow,
    lgConst,
    mdConst,
    smConst,
    xsConst,
    distributionAround,
    distributionBetween,
    alignmentBottom,
    alignmentCenter,
    alignmentEnd,
    alignmentMiddle,
    alignmentStart,
    alignmentTop,
    reversing
} from "../constants"

type Props = {
    /** Align elements to the Start of a column only at xs viewport width 2*/
    xsStart?: boolean,
    /** Align elements to the Start of a column only at sm viewport width*/
    smStart?: boolean,
    /** Align elements to the Start of a column only at md viewport width*/
    mdStart?: boolean,
    /** Align elements to the Start of a column only at lg viewport width*/
    lgStart?: boolean,
    /** Align elements to the Center of a column only at xs viewport width*/
    xsCenter?: boolean,
    /** Align elements to the Center of a column only at sm viewport width*/
    smCenter?: boolean,
    /** Align elements to the Center of a column only at md viewport width*/
    mdCenter?: boolean,
    /** Align elements to the Center of a column only at lg viewport width*/
    lgCenter?: boolean,
    /** Align elements to the End of a column only at xs viewport width*/
    xsEnd?: boolean,
    /** Align elements to the End of a column only at sm viewport width*/
    smEnd?: boolean,
    /** Align elements to the End of a column only at md viewport width*/
    mdEnd?: boolean,
    /** Align elements to the End of a column only at lg viewport width*/
    lgEnd?: boolean,
    /** Align elements to the Top of a column only at xs viewport width*/
    xsTop?: boolean,
    /** Align elements to the Top of a column only sm xs viewport width*/
    smTop?: boolean,
    /** Align elements to the Top of a column only md xs viewport width*/
    mdTop?: boolean,
    /** Align elements to the Top of a column only at lg viewport width*/
    lgTop?: boolean,
    /** Align elements to the Middle of a column only at xs viewport width*/
    xsMiddle?: boolean,
    /** Align elements to the Middle of a column only at sm viewport width*/
    smMiddle?: boolean,
    /** Align elements to the Middle of a column only at md viewport width*/
    mdMiddle?: boolean,
    /** Align elements to the Middle of a column only at lg viewport width*/
    lgMiddle?: boolean,
    /** Align elements to the Bottom of a column only at xs viewport width*/
    xsBottom?: boolean,
    /** Align elements to the Bottom of a column only at sm viewport width*/
    smBottom?: boolean,
    /** Align elements to the Bottom of a column only at md viewport width*/
    mdBottom?: boolean,
    /** Align elements to the Bottom of a column only at lg viewport width*/
    lgBottom?: boolean,
    /** Align elements to the Around of a column only at xs viewport width*/
    xsAround?: boolean,
    /** Align elements to the Around of a column only at sm viewport width*/
    smAround?: boolean,
    /** Align elements to the Around of a column only at md viewport width*/
    mdAround?: boolean,
    /** Align elements to the Around of a column only at lg viewport width*/
    lgAround?: boolean,
    /** Align elements to the Between of a column only at xs viewport width*/
    xsBetween?: boolean,
    /** Align elements to the Between of a column only at sm viewport width*/
    smBetween?: boolean,
    /** Align elements to the Between of a column only at md viewport width*/
    mdBetween?: boolean,
    /** Align elements to the Between of a column only at lg viewport width*/
    lgBetween?: boolean,
    /** Align elements reversing of a column*/
    reverse?: boolean,
    /** Any component that you want*/
    children?: any
}

function Row(props: Props) {
    const {
        xsStart,
        smStart,
        mdStart,
        lgStart,
        xsCenter,
        smCenter,
        mdCenter,
        lgCenter,
        xsEnd,
        smEnd,
        mdEnd,
        lgEnd,
        xsTop,
        smTop,
        mdTop,
        lgTop,
        xsMiddle,
        smMiddle,
        mdMiddle,
        lgMiddle,
        xsBottom,
        smBottom,
        mdBottom,
        lgBottom,
        xsAround,
        smAround,
        mdAround,
        lgAround,
        xsBetween,
        smBetween,
        mdBetween,
        lgBetween,
        reverse,
        children
    } = props

    const rowClass = classNames(
        prefixRow,
        reverse && reversing,
        xsStart && `${alignmentStart}-${xsConst}`,
        smStart && `${alignmentStart}-${smConst}`,
        mdStart && `${alignmentStart}-${mdConst}`,
        lgStart && `${alignmentStart}-${lgConst}`,
        xsCenter && `${alignmentCenter}-${xsConst}`,
        smCenter && `${alignmentCenter}-${smConst}`,
        mdCenter && `${alignmentCenter}-${mdConst}`,
        lgCenter && `${alignmentCenter}-${lgConst}`,
        xsEnd && `${alignmentEnd}-${xsConst}`,
        smEnd && `${alignmentEnd}-${smConst}`,
        mdEnd && `${alignmentEnd}-${mdConst}`,
        lgEnd && `${alignmentEnd}-${lgConst}`,
        xsTop && `${alignmentTop}-${xsConst}`,
        smTop && `${alignmentTop}-${smConst}`,
        mdTop && `${alignmentTop}-${mdConst}`,
        lgTop && `${alignmentTop}-${lgConst}`,
        xsMiddle && `${alignmentMiddle}-${xsConst}`,
        smMiddle && `${alignmentMiddle}-${smConst}`,
        mdMiddle && `${alignmentMiddle}-${mdConst}`,
        lgMiddle && `${alignmentMiddle}-${lgConst}`,
        xsBottom && `${alignmentBottom}-${xsConst}`,
        smBottom && `${alignmentBottom}-${smConst}`,
        mdBottom && `${alignmentBottom}-${mdConst}`,
        lgBottom && `${alignmentBottom}-${lgConst}`,
        xsAround && `${distributionAround}-${xsConst}`,
        smAround && `${distributionAround}-${smConst}`,
        mdAround && `${distributionAround}-${mdConst}`,
        lgAround && `${distributionAround}-${lgConst}`,
        xsBetween && `${distributionBetween}-${xsConst}`,
        smBetween && `${distributionBetween}-${smConst}`,
        mdBetween && `${distributionBetween}-${mdConst}`,
        lgBetween && `${distributionBetween}-${lgConst}`
    )
    return <div className={rowClass}>{children}</div>
}

Row.defaultProps = {
    xsStart: false,
    smStart: false,
    mdStart: false,
    lgStart: false,
    xsCenter: false,
    smCenter: false,
    mdCenter: false,
    lgCenter: false,
    xsEnd: false,
    smEnd: false,
    mdEnd: false,
    lgEnd: false,
    xsTop: false,
    smTop: false,
    mdTop: false,
    lgTop: false,
    xsMiddle: false,
    smMiddle: false,
    mdMiddle: false,
    lgMiddle: false,
    xsBottom: false,
    smBottom: false,
    mdBottom: false,
    lgBottom: false,
    xsAround: false,
    smAround: false,
    mdAround: false,
    lgAround: false,
    xsBetween: false,
    smBetween: false,
    mdBetween: false,
    lgBetween: false,
    reverse: false
}

export default Row
