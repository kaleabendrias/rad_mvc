import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import Signin from "./Signin";

jest.mock("axios");

describe("Signin Component", () => {
  it("renders the Signin form", () => {
    const { getByText, getByLabelText } = render(<Signin />);
    expect(getByText("Sign in to your account")).toBeInTheDocument();
    expect(getByLabelText("Email address")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    const { getByLabelText, getByText } = render(<Signin />);
    const emailInput = getByLabelText("Email address");
    const passwordInput = getByLabelText("Password");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    axios.post.mockResolvedValue({ status: 200 || 400 });

    fireEvent.click(getByText("Get started"));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("http://localhost:3000/signin", {
        email: "kal@gmail.com",
        password: "123456",
      });
    });
  });

  it("displays an error message for invalid data", async () => {
    const { getByLabelText, getByText } = render(<Signin />);
    const emailInput = getByLabelText("Email address");
    const passwordInput = getByLabelText("Password");

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(passwordInput, { target: { value: "short" } });

    axios.post.mockRejectedValue({
      response: { data: { message: "User credentials are not correct" } },
    });

    fireEvent.click(getByText("Get started"));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith("http://localhost:3000/signin", {
        email: "invalid-email",
        password: "short",
      });
      expect(getByText("User credentials are not correct")).toBeInTheDocument();
    });
  });
});
