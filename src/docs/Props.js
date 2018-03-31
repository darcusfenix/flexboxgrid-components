import React from "react"
import PropTypes from "prop-types"

const Props = ({ props }) => {
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
                {Object.keys(props).map((key) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>
                            {props[key].flowType &&
                                (props[key].flowType.raw ||
                                    props[key].flowType.name)}
                        </td>
                        <td>
                            {props[key].defaultValue &&
                                props[key].defaultValue.value}
                        </td>
                        <td>{props[key].required && "X"}</td>
                        <td>{props[key].description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

Props.propTypes = {
    props: PropTypes.object.isRequired
}

export default Props
