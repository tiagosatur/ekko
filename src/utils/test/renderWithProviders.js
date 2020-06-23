import React from "react";
import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import reduxStore from "../../store";
import initial from "../../store/initial";

export default function renderWithProviders(
  component,
  { initialState = initial, store = reduxStore, ...renderOptions } = {}
) {
  function Wrapper({ children }) {
    return <ReduxProvider store={store}>{children}</ReduxProvider>;
  }
  return render(component, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";

export { renderWithProviders as render };
