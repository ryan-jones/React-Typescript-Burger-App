
export const updateState = (oldState: object, updatedProps: object) => {
  return {
    ...oldState,
    ...updatedProps
  }
}