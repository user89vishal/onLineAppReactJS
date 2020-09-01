export function increment() {
  console.log("In actions");
  return { type: "increment" };
}

export function decrement() {
  return { type: "decrement" };
}

export function login() {
  return { type: "login" };
}

export function saveUser(user) {
  return { type: "saveUser", value: user };
}
