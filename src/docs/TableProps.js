//@flow
import * as React from "react"

type Props = {
    properties: {}
}

class TableProps extends React.PureComponent<Props> {
    render() {
        const { properties } = this.props

        return (
            <table className="props">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    {Object.keys(properties).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>
                                {properties[key].flowType &&
                                    (properties[key].flowType.raw ||
                                        properties[key].flowType.name)}
                            </td>
                            <td>
                                {properties[key].defaultValue &&
                                    properties[key].defaultValue.value}
                            </td>
                            <td>{properties[key].required && "X"}</td>
                            <td>{properties[key].description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default TableProps
