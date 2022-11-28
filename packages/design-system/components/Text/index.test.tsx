import { Text } from "./index";
import { customRender } from "@felipemarinho/test-commons/react-testing-library";

const render = customRender();

describe("<Textv />", () => {
  it("render h1 tag", () => {
    const { container } = render(<Text tag="h1">Simple Text</Text>);

    expect(container).toMatchSnapshot();
  });
});
