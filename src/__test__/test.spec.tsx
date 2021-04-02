import { shallow } from "enzyme";

describe("test", () => {
  const container = shallow(<div></div>);
  it("it is a div", () => {
    expect(container.find("div").length).toEqual(1);
  });
});
