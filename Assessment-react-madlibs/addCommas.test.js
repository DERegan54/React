const addCommas = require("./addCommas");

describe("#addCommas", () => {
  
  test("it is a function", () => {
  expect(typeof addCommas).toBe("function");
  });

  test("it works with one-digit positive integers", () => {
    const response = addCommas(6)
    expect(response).toEqual('6');
  });

  test("it works with four-digit positive numbers", () => {
    response = addCommas(1234);
    expect(response).toEqual('1,234');
  });
    
  test("it works with ten-digit positive numbers", () => {
    response = addCommas(9876543210);
    expect(response).toEqual('9,876,543,210');
  });

  test("it works with two-digit negative integers", () => {
    const response = addCommas(-10);
    expect(response).toEqual('-10');
  });

  test("it works with four-digit negative integers", () => {
    const response = addCommas(-5678);
    expect(response).toEqual('-5,678');
  });

});
