export function increment() {
  console.log("In actions");
  return { type: "increment" };
}

export function decrement() {
  return { type: "decrement" };
}
