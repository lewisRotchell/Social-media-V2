export const loadUserState = () => {
  try {
    const serializedState = localStorage.getItem("token");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
