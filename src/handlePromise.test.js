import handlePromise from "./handlePromise";


describe("handlePromise", () => {
  it("receives a promise", () => {

  });

  it("returns a promise", () => {
    
  });

  describe("received promise is rejected", () => {
    it("returns a promise that resolves to an array of length 2", async () => {
      expect((await handlePromise(Promise.reject({
        error: "error"
      }))).length).toEqual(2);
    });

    it("returns a promise that resolves to an array with first cell containing 'undefined'", async () => {
      expect((await handlePromise(Promise.reject({
        error: "error"
      })))[0]).not.toBeDefined();
    });

    it("returns a promise that resolves to an array with second cell containing the error", async () => {
      expect((await handlePromise(Promise.reject({
        error: "error"
      })))[1]).toEqual({
        error: "error"
      });
    });
  });

  describe("received promise is resolved", () => {
    it("returns a promise that resolves to an array of length 2", async () => {
      expect((await handlePromise(Promise.resolve({
        json: () => Promise.resolve(() => ({
          a: "a",
          b: "b"
        }))
      }))).length).toEqual(2);
    });

    it("returns a promise that resolves to an array with first cell containing the data", async () => {
      expect((await handlePromise(Promise.resolve({
        a: "a",
        b: "b"
      })))[0]).toEqual({
        a: "a",
        b: "b"
      });
    });

    it("returns a promise that resolves to an array with second cell containing 'undefined'", async () => {
      expect((await handlePromise(Promise.resolve({
        a: "a",
        b: "b"
      })))[1]).not.toBeDefined();
    });
  });
});