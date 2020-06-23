export const loadState = (localStorageName) => {
  const serializedState = localStorage.getItem(localStorageName);
  return serializedState ? { favorites: JSON.parse(serializedState) } : {};
};

export const saveState = (state, localStorageName = "appState") => {
  try {
    const serializedState = JSON.stringify(state.favorites);
    localStorage.setItem(localStorageName, serializedState);
  } catch (e) {
    console.log("sessionStorage error", e);
  }
};

export const manageLocalStorage = (localStorageName) => {
  return {
    saveState: (state) => saveState(state, localStorageName),
    loadState: () => loadState(localStorageName),
  };
};
