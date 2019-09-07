import getData from "./getData";
import handlePromise from "./handlePromise";


let fetchSpy;

describe("getData", () => {
  describe("tries to fetch data", () => {
    beforeEach(() => {
      fetchSpy = jest.spyOn(window, "fetch");
    });

    describe("fetch data fails", () => {
      beforeEach(() => {
        fetchSpy
          .mockReturnValueOnce(
            Promise.reject({
              error: "error"
            })
          )
      });

      describe("fetch info fails", () => {
        beforeEach(() => {
          fetchSpy
            .mockReturnValueOnce(
              Promise.reject({
                error: "error"
              })
            )
        });

        it("throws an error", async () => {
          const [data, dataErr] = await handlePromise(getData());

          expect(dataErr).not.toBeNull();
        });
      });

      describe("fetch info succeeds", () => {
        beforeEach(() => {
          fetchSpy
            .mockReturnValueOnce(
              Promise.resolve({
                json: () => Promise.resolve(() => ({
                  a: "a",
                  b: "b"
                }))
              })
            );
        });

        it("receives data", async () => {
          expect(await getData()).toBeDefined();
        });
      });
    });

    describe("fetch data succeeds", () => {
      beforeEach(() => {
        fetchSpy
          .mockReturnValueOnce(
            Promise.resolve({
              json: () => Promise.resolve(() => ({
                a: "a",
                b: "b"
              }))
            })
          );
      });
  
      it("receives data", async () => {
        expect(await getData()).toBeDefined();
      });
    });
  });
});