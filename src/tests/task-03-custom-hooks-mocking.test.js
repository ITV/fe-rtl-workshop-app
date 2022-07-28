import axios from "axios";
import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useFetchNext from "../hooks/useFetchNext";

let mockConsoleError;
const mockData = {
  data: { test: "test" },
};

describe("given useFetchNext hook", () => {
  it("should fetch data from provided URL", () => {});

  describe("when the API returns an error", () => {
    it("should handle error properly", () => {});
  });

  describe("when the fetchNext function is called", () => {
    it("should re-fetch data from provided URL", () => {});
  });
});
