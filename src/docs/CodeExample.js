import React from "react"
import hljs from "highlight.js/lib/highlight"
import javascript from "highlight.js/lib/languages/javascript"

class CodeExample extends React.Component {
    componentDidMount() {
        hljs.registerLanguage("javascript", javascript)
        hljs.highlightBlock(this.element)
    }

    render() {
        return (
            <pre
                ref={(ref) => {
                    this.element = ref
                }}
            >
                <code>{this.props.children}</code>
            </pre>
        )
    }
}

export default CodeExample
