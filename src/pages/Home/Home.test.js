/* eslint-env jest */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import { renderWithProviders as render, testId } from "../../utils";

import Home from "./Home";

describe("Home component", () => {
  beforeEach(() => {
    cleanup();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment(<Home />)).toMatchSnapshot();
  });

  // it("renders", () => {
  //   const { queryByTestId } = render(<Home />);

  //   expect(queryByTestId(testId.home.homepage)) ;
  // });
});
