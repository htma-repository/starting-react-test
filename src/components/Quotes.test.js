import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Quotes from "./Quotes";

describe("Async Test", () => {
  test("Quotes show if button was clicked", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: () => ({
        _id: "1",
        content: "this is content",
        author: "this is author",
      }),
    });

    render(<Quotes />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const elementRender = await screen.findAllByRole("article");
    expect(elementRender).not.toHaveLength(0);
  });
});
