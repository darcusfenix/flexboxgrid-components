module.exports = /* eslint-disable */ [[{"name":"Bottom","description":"Bottom","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\n/**\n * Bottom\n */\nexport default function AlignmentBottom() {\n    return (\n        <Row xsBottom>\n            <Column xs={6}>\n                <Wrapper className=\"box\" padding={8} rem />\n            </Column>\n            <Column xs={6}>\n                <Wrapper className=\"box\" padding={1} rem />\n            </Column>\n        </Row>\n    )\n}\n","id":"Alignment","html":{"name":"Alignment","id":"Alignment","code":"<div class=\"row bottom-xs\">\n    <div class=\"col-xs-6\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 8rem;\"></div>\n    </div>\n    <div class=\"col-xs-6\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n</div>"}},{"name":"Center","description":"Center","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\n/**\n * Center\n */\nexport default function AlignmentCenter() {\n    return (\n        <Row>\n            <Column xs={12}>\n                <Wrapper className=\"box\" padding={1} rem>\n                    <Row xsCenter>\n                        <Column xs={6}>\n                            <Wrapper className=\"box\" padding={1} rem />\n                        </Column>\n                    </Row>\n                </Wrapper>\n            </Column>\n        </Row>\n    )\n}\n","id":"Alignment","html":{"name":"Alignment","id":"Alignment","code":"<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">\n            <div class=\"row center-xs\">\n                <div class=\"col-xs-6\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"}},{"name":"End","description":"End","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\n/**\n * End\n */\nexport default function AlignmentEnd() {\n    return (\n        <Row>\n            <Column xs={12}>\n                <Wrapper className=\"box\" padding={1} rem>\n                    <Row xsEnd>\n                        <Column xs={6}>\n                            <Wrapper className=\"box\" padding={1} rem />\n                        </Column>\n                    </Row>\n                </Wrapper>\n            </Column>\n        </Row>\n    )\n}\n","id":"Alignment","html":{"name":"Alignment","id":"Alignment","code":"<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">\n            <div class=\"row end-xs\">\n                <div class=\"col-xs-6\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"}},{"name":"Middle","description":"Middle","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\n/**\n * Middle\n */\nexport default function AlignmentMiddle() {\n    return (\n        <Row xsMiddle>\n            <Column xs={6}>\n                <Wrapper className=\"box\" padding={8} rem />\n            </Column>\n            <Column xs={6}>\n                <Wrapper className=\"box\" padding={1} rem />\n            </Column>\n        </Row>\n    )\n}\n","id":"Alignment","html":{"name":"Alignment","id":"Alignment","code":"<div class=\"row middle-xs\">\n    <div class=\"col-xs-6\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 8rem;\"></div>\n    </div>\n    <div class=\"col-xs-6\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n</div>"}},{"name":"Start","description":"Start","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\n/**\n * Start\n */\nexport default function AlignmentStart() {\n    return (\n        <Row>\n            <Column xs={12}>\n                <Wrapper className=\"box\" padding={1} rem>\n                    <Row xsStart>\n                        <Column xs={6}>\n                            <Wrapper className=\"box\" padding={1} rem />\n                        </Column>\n                    </Row>\n                </Wrapper>\n            </Column>\n        </Row>\n    )\n}\n","id":"Alignment","html":{"name":"Alignment","id":"Alignment","code":"<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">\n            <div class=\"row start-xs\">\n                <div class=\"col-xs-6\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"}},{"name":"Top","description":"Top","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\n/**\n * Top\n */\nexport default function AlignmentTop() {\n    return (\n        <Row xsTop>\n            <Column xs={6}>\n                <Wrapper className=\"box\" padding={8} rem />\n            </Column>\n            <Column xs={6}>\n                <Wrapper className=\"box\" padding={1} rem />\n            </Column>\n        </Row>\n    )\n}\n","id":"Alignment","html":{"name":"Alignment","id":"Alignment","code":"<div class=\"row top-xs\">\n    <div class=\"col-xs-6\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 8rem;\"></div>\n    </div>\n    <div class=\"col-xs-6\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n</div>"}}],[{"name":"AutoWidth","description":"","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\nexport default function AutoWidth() {\n    return (\n        <React.Fragment>\n            <Row>\n                <Column xsAuto>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n\n                <Column xsAuto>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n            </Row>\n\n            <Row>\n                <Column xsAuto>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n\n                <Column xsAuto>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n\n                <Column xsAuto>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n            </Row>\n        </React.Fragment>\n    )\n}\n","id":"AutoWidth","html":{"name":"AutoWidth","id":"AutoWidth","code":"<div class=\"row\">\n    <div class=\"col-xs\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>"}}],[{"name":"Around","description":"Around","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\n/**\n * Around\n */\nexport default function Around() {\n    return (\n        <Row>\n            <Column xs={12}>\n                <Wrapper className=\"box\" padding={1} rem>\n                    <Row xsAround>\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem />\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem />\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem />\n                        </Column>\n                    </Row>\n                </Wrapper>\n            </Column>\n        </Row>\n    )\n}\n","id":"Distribution","html":{"name":"Distribution","id":"Distribution","code":"<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">\n            <div class=\"row around-xs\">\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"}},{"name":"Between","description":"Between","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\n/**\n * Between\n */\nexport default function Between() {\n    return (\n        <Row>\n            <Column xs={12}>\n                <Wrapper className=\"box\" padding={1} rem>\n                    <Row xsBetween>\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem />\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem />\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem />\n                        </Column>\n                    </Row>\n                </Wrapper>\n            </Column>\n        </Row>\n    )\n}\n","id":"Distribution","html":{"name":"Distribution","id":"Distribution","code":"<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">\n            <div class=\"row between-xs\">\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"}}],[{"name":"Fluid","description":"","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\nexport default function Fluid() {\n    const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\n\n    return (\n        <React.Fragment>\n            {columns.map((item, index) => (\n                <Row key={item}>\n                    <Column xs={item}>\n                        <Wrapper className=\"box\" padding={1} rem />\n                    </Column>\n                    {item < columns.length && (\n                        <Column xs={columns.length - item}>\n                            <Wrapper\n                                className=\"box\"\n                                marginBottom={1}\n                                padding={1}\n                                rem\n                            />\n                        </Column>\n                    )}\n                </Row>\n            ))}\n        </React.Fragment>\n    )\n}\n","id":"Fluid","html":{"name":"Fluid","id":"Fluid","code":"<div class=\"row\">\n    <div class=\"col-xs-1\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-11\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-2\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-10\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-3\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-9\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-4\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-8\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-5\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-7\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-6\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-6\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-7\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-5\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-8\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-4\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-9\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-3\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-10\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-2\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-11\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-1\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n    </div>\n</div>"}}],[{"name":"NestedGrids","description":"","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\nexport default function NestedGrids() {\n    return (\n        <Row>\n            <Column xs={7}>\n                <Wrapper className=\"box\" marginBottom={1} padding={1} rem>\n                    <Row>\n                        <Column xs={9}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                <Row>\n                                    <Column xs={4}>\n                                        <Wrapper\n                                            className=\"box\"\n                                            padding={1}\n                                            rem\n                                        />\n                                    </Column>\n                                    <Column xs={8}>\n                                        <Wrapper\n                                            className=\"box\"\n                                            padding={1}\n                                            rem\n                                        />\n                                    </Column>\n                                </Row>\n                            </Wrapper>\n                        </Column>\n                        <Column xs={3}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                <Row>\n                                    <Column xsAuto>\n                                        <Wrapper\n                                            className=\"box\"\n                                            padding={1}\n                                            rem\n                                        />\n                                    </Column>\n                                </Row>\n                            </Wrapper>\n                        </Column>\n                    </Row>\n                </Wrapper>\n            </Column>\n\n            <Column xs={5}>\n                <Wrapper className=\"box\" marginBottom={1} padding={1} rem>\n                    <Row>\n                        <Column xs={12}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                <Row>\n                                    <Column xs={6}>\n                                        <Wrapper\n                                            className=\"box\"\n                                            padding={1}\n                                            rem\n                                        />\n                                    </Column>\n                                    <Column xs={6}>\n                                        <Wrapper\n                                            className=\"box\"\n                                            padding={1}\n                                            rem\n                                        />\n                                    </Column>\n                                </Row>\n                            </Wrapper>\n                        </Column>\n                    </Row>\n                </Wrapper>\n            </Column>\n        </Row>\n    )\n}\n","id":"NestedGrids","html":{"name":"NestedGrids","id":"NestedGrids","code":"<div class=\"row\">\n    <div class=\"col-xs-7\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\">\n            <div class=\"row\">\n                <div class=\"col-xs-9\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-4\">\n                                <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                            </div>\n                            <div class=\"col-xs-8\">\n                                <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-xs-3\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">\n                        <div class=\"row\">\n                            <div class=\"col-xs\">\n                                <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-xs-5\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-6\">\n                                <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                            </div>\n                            <div class=\"col-xs-6\">\n                                <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\"></div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"}}],[{"name":"Offsets","description":"","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\nexport default function Offsets() {\n    const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]\n\n    return (\n        <React.Fragment>\n            {columns.map((item, index) => (\n                <Row key={item}>\n                    <Column xs={item} xsOffset={columns.length - item}>\n                        <Wrapper\n                            className=\"box\"\n                            marginBottom={1}\n                            padding={1}\n                            rem\n                        />\n                    </Column>\n                </Row>\n            ))}\n        </React.Fragment>\n    )\n}\n","id":"Offsets","html":{"name":"Offsets","id":"Offsets","code":"<div class=\"row\">\n    <div class=\"col-xs-offset-11 col-xs-1\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-offset-10 col-xs-2\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-offset-9 col-xs-3\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-offset-8 col-xs-4\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-offset-7 col-xs-5\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-offset-6 col-xs-6\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-offset-5 col-xs-7\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-offset-4 col-xs-8\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-offset-3 col-xs-9\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-offset-2 col-xs-10\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-offset-1 col-xs-11\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n"}}],[{"name":"First","description":"First","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\n/**\n * First\n */\nexport default function First() {\n    return (\n        <Row>\n            <Column xs={12}>\n                <Wrapper padding={1} rem>\n                    <Row>\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                1\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                2\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                3\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                4\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                5\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2} xsFirst>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                6\n                            </Wrapper>\n                        </Column>\n                    </Row>\n                </Wrapper>\n            </Column>\n        </Row>\n    )\n}\n","id":"Reordering","html":{"name":"Reordering","id":"Reordering","code":"<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div style=\"margin: 0rem; padding: 1rem;\">\n            <div class=\"row\">\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">1</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">2</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">3</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">4</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">5</div>\n                </div>\n                <div class=\"col-xs-2 first-xs\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">6</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"}},{"name":"Last","description":"Last","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\n/**\n * Last\n */\nexport default function Last() {\n    return (\n        <Row>\n            <Column xs={12}>\n                <Wrapper padding={1} rem>\n                    <Row>\n                        <Column xs={2} xsLast>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                1\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                2\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                3\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                4\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                5\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                6\n                            </Wrapper>\n                        </Column>\n                    </Row>\n                </Wrapper>\n            </Column>\n        </Row>\n    )\n}\n","id":"Reordering","html":{"name":"Reordering","id":"Reordering","code":"<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div style=\"margin: 0rem; padding: 1rem;\">\n            <div class=\"row\">\n                <div class=\"col-xs-2 last-xs\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">1</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">2</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">3</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">4</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">5</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">6</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"}}],[{"name":"Responsive","description":"","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\nexport default function Responsive() {\n    return (\n        <React.Fragment>\n            <Row>\n                <Column xs={12} sm={3} md={2} lg={1}>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n\n                <Column xs={6} sm={6} md={8} lg={10}>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n\n                <Column xs={6} sm={3} md={2} lg={1}>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n            </Row>\n\n            <Row>\n                <Column xs={12} sm={3} md={2} lg={1}>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n\n                <Column xs={6} sm={9} md={10} lg={11}>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n            </Row>\n\n            <Row>\n                <Column xs={10} sm={6} md={8} lg={10}>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n\n                <Column xs={2} sm={6} md={4} lg={2}>\n                    <Wrapper className=\"box\" marginBottom={1} padding={1} rem />\n                </Column>\n            </Row>\n        </React.Fragment>\n    )\n}\n","id":"Responsive","html":{"name":"Responsive","id":"Responsive","code":"<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-1\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-6 col-sm-6 col-md-8 col-lg-10\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-6 col-sm-3 col-md-2 col-lg-1\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-3 col-md-2 col-lg-1\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-6 col-sm-9 col-md-10 col-lg-11\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-xs-10 col-sm-6 col-md-8 col-lg-10\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n    <div class=\"col-xs-2 col-sm-6 col-md-4 col-lg-2\">\n        <div class=\"box\" style=\"margin: 0rem 0rem 1rem; padding: 1rem;\"></div>\n    </div>\n</div>\n\n"}}],[{"name":"Reversing","description":"","code":"import * as React from \"react\"\nimport { Row, Column, Wrapper } from \"flexboxgrid-components\"\n\nexport default function Reversing() {\n    return (\n        <Row>\n            <Column xs={12}>\n                <Wrapper padding={1} rem>\n                    <Row reverse>\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                1\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                2\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                3\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                4\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                5\n                            </Wrapper>\n                        </Column>\n\n                        <Column xs={2}>\n                            <Wrapper className=\"box\" padding={1} rem>\n                                6\n                            </Wrapper>\n                        </Column>\n                    </Row>\n                </Wrapper>\n            </Column>\n        </Row>\n    )\n}\n","id":"Reversing","html":{"name":"Reversing","id":"Reversing","code":"<div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div style=\"margin: 0rem; padding: 1rem;\">\n            <div class=\"row reverse\">\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">1</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">2</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">3</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">4</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">5</div>\n                </div>\n                <div class=\"col-xs-2\">\n                    <div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">6</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"}}],[{"name":"Wrapper","description":"Just keep separate your Components from Grid-Layout using Wrapper. It's not a good idea add padding or margin\nto yours Components or these Rows or Columns","code":"import * as React from \"react\"\nimport { Wrapper } from \"flexboxgrid-components\"\n\n/**\n * Just keep separate your Components from Grid-Layout using Wrapper. It's not a good idea add padding or margin\n * to yours Components or these Rows or Columns\n */\nexport default function Example() {\n    return (\n        <Wrapper className=\"box\" padding={1} rem>\n            <Wrapper className=\"box\" padding={1.5} rem>\n                <Wrapper className=\"box\" padding={2} rem />\n            </Wrapper>\n        </Wrapper>\n    )\n}\n","id":"Wrapper","html":{"name":"Wrapper","id":"Wrapper","code":"<div class=\"box\" style=\"margin: 0rem; padding: 1rem;\">\n    <div class=\"box\" style=\"margin: 0rem; padding: 1.5rem;\">\n        <div class=\"box\" style=\"margin: 0rem; padding: 2rem;\"></div>\n    </div>\n</div>"}}]]