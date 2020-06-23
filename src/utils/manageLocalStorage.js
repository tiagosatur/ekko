function loadState(localStorageName) {
  try {
    const serializedState = localStorage.getItem(localStorageName);

    if (serializedState === null) {
      return undefined;
    }

    return { favorites: JSON.parse(serializedState) };
  } catch (err) {
    return undefined;
  }
}

function saveState(state, localStorageName = "appState") {
  try {
    const serializedState = JSON.stringify(state.favorites);
    localStorage.setItem(localStorageName, serializedState);
  } catch (e) {
    console.log("sessionStorage error", e);
  }
}

export function manageLocalStorage(localStorageName) {
  return {
    saveState: (state) => saveState(state, localStorageName),
    loadState: () => loadState(localStorageName),
  };
}
