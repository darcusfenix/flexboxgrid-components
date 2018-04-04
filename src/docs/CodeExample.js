//@flow
import * as React from "react"
import "../libs/prism/prism"
import { PrismCode } from "react-prism"
import "prismjs/themes/prism-okaidia.css"

type Props = {
    children: any
}

class CodeExample extends React.PureComponent<Props> {
    element: ?HTMLPreElement

    render() {
        return (
            <pre
                ref={(ref) => {
                    this.element = ref
                }}
            >
                <PrismCode className="language-jsx">
                    {this.props.children}
                </PrismCode>
            </pre>
        )
    }
}

export default CodeExample
