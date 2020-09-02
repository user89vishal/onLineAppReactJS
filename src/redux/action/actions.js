export function increment() {
  console.log("In actions");
  return { type: "increment" };
}

export function decrement() {
  return { type: "decrement" };
}

export function logout() {
  return { type: "logout" };
}

export function saveUser(user) {
  return { type: "saveUser", value: user };
}

export function saveOption(option) {
  return { type: "saveOption", value: option };
}
