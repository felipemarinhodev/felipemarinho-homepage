import { customRender } from "@felipemarinho/test-commons/react-testing-library";
import { HomeScreen } from ".";
const render = customRender();

describe("<HomeScreen />", () => {
  it("should render the component correctly", () => {
    const { container } = render(<HomeScreen />);
    expect(container).toMatchSnapshot();
  });
});
