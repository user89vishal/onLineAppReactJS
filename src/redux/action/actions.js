export function initilizeTime(time) {
  return { type: "initilizeTime", value: time };
}

export function increment() {
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

export function setSkillLevel(skill) {
  return { type: "setSkillLevel", value: skill };
}

export function summry() {
  return { type: "summry" };
}
