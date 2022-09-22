import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greetings from "./Greetings";

describe("Greetings Components", () => {
  test("Render Hello Hutama", () => {
    render(<Greetings />);

    const elementRender = screen.getByText(/hello hutama/i);
    expect(elementRender).toBeInTheDocument();
  });

  test("Render lorem ipsum", () => {
    render(<Greetings />);

    const elementRender = screen.getByText(/lorem ipsum/i);
    expect(elementRender).toBeInTheDocument();
  });

  test("Render 'My name is Hutama' if button was clicked", () => {
    render(<Greetings />);

    const buttonElement = screen.getByText(/view text/i);
    userEvent.click(buttonElement);

    const elementRender = screen.getByText(/my name is hutama/i);
    expect(elementRender).toBeInTheDocument();
  });

  test("Render 'I love frontend dev' if button NOT clicked", () => {
    render(<Greetings />);

    const elementRender = screen.getByText(/I love frontend dev/i);
    expect(elementRender).toBeInTheDocument();
  });

  test("Not Render 'I love frontend dev' if button was clicked", () => {
    render(<Greetings />);

    const buttonElement = screen.getByText(/view text/i);
    userEvent.click(buttonElement);

    const elementRender = screen.queryByText(/I love frontend dev/i);
    expect(elementRender).toBeNull();
  });

  test("Render number 3 if button Click 3 times", () => {
    render(<Greetings />);

    const buttonElement = screen.getByText(/count/i);
    userEvent.click(buttonElement);
    userEvent.click(buttonElement);
    userEvent.click(buttonElement);

    const elementRender = screen.getByText(3);
    expect(elementRender).toBeInTheDocument();
  });
});
