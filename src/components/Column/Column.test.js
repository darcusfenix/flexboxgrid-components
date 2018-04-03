import React from "react"
import { shallow } from "enzyme"

import Column from "./Column"
import {
    PROPS_VIEWPORT_WIDTH,
    PROPS_VIEWPORT_WIDTH_AUTO,
    PROPS_VIEWPORT_WIDTH_FIRST,
    PROPS_VIEWPORT_WIDTH_LAST,
    PROPS_VIEWPORT_WIDTH_OFFSET
} from "./constants"

describe("<Column />", () => {
    it("should render correctly", () => {
        const tree = shallow(<Column />)
        expect(tree).toMatchSnapshot()
    })

    it("should render correctly with all props of viewport width", () => {
        const tree = shallow(<Column {...PROPS_VIEWPORT_WIDTH} />)
        expect(tree).toMatchSnapshot()
    })

    it("should render correctly with all props of viewport width Auto", () => {
        const tree = shallow(<Column {...PROPS_VIEWPORT_WIDTH_AUTO} />)
        expect(tree).toMatchSnapshot()
    })

    it("should render correctly with all props of viewport width Offset", () => {
        const tree = shallow(<Column {...PROPS_VIEWPORT_WIDTH_OFFSET} />)
        expect(tree).toMatchSnapshot()
    })

    it("should render correctly with all props of viewport width First", () => {
        const tree = shallow(<Column {...PROPS_VIEWPORT_WIDTH_FIRST} />)
        expect(tree).toMatchSnapshot()
    })

    it("should render correctly with all props of viewport width Last", () => {
        const tree = shallow(<Column {...PROPS_VIEWPORT_WIDTH_LAST} />)
        expect(tree).toMatchSnapshot()
    })
})
