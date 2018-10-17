import { evolve, always, lensProp, set } from "ramda";

export function setPropValue(state, prop, value) {
  return set(lensProp(prop), value, state);
}

export function setDataValue(state, prop, value) {
  return evolve({
    error: always(false),
    loading: always(false),
    [prop]: always(value)
  }, state);
}
