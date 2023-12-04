import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";
import Home from "../pages/index";
import React from "react";

const setup = () => {
  return render(Home);
};

// beforeAll(() => {
//   Object.defineProperty(global, 'document', {});
// })
// test.only("pos", async () => {
//   setup()
//   // render();
//   await screen.findByRole("menu");
//   // jest.spyOn(console, "error").mockImplementation(() => {});
//   // await screen.findByRole('contact')
//   // const useEffectMock = jest.fn();
//   // jest.spyOn(React,'useEffect').mockImplementation(useEffectMock)

//   console.log("rr", screen.getByRole("menu"));

//   // ASSERT
//   expect(screen.getByRole("menu")).toHaveTextContent("Menu");
// });

test("Texte Menu et Contact", async () => {
  const useEffectMock = jest.fn();
  jest.spyOn(console, "warn").mockImplementation(() => {});

  jest.spyOn(React,'useEffect').mockImplementation(useEffectMock)
  // ARRANGE
  render(<Home />);

  // ACT
  //   await userEvent.click(screen.getByText('Load Greeting'))
  await screen.findByRole("menu");
  await screen.findByRole("contact");

  // ASSERT
  expect(screen.getByRole("menu")).toHaveTextContent("Menu");
  expect(screen.getByRole("contact")).toHaveTextContent("Contact");
  //   expect(screen.getByRole('button')).toBeDisabled()
});
