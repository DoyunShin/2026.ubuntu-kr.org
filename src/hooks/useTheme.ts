import { useSyncExternalStore } from "react";

const THEME_STORAGE_KEY = "theme";
const THEME_CHANGE_EVENT = "themechange";
const SYSTEM_DARK_THEME_QUERY = "(prefers-color-scheme: dark)";

const subscribe = (onStoreChange: () => void) => {
    const handleStorageChange = (event: StorageEvent) => {
        if (event.key === THEME_STORAGE_KEY || event.key === null) {
            onStoreChange();
        }
    };
    const systemTheme = window.matchMedia(SYSTEM_DARK_THEME_QUERY);

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
    systemTheme.addEventListener("change", onStoreChange);

    return () => {
        window.removeEventListener("storage", handleStorageChange);
        window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
        systemTheme.removeEventListener("change", onStoreChange);
    };
};

const getSnapshot = () => {
    const theme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (!theme || theme === "system") {
        return window.matchMedia(SYSTEM_DARK_THEME_QUERY).matches
            ? "dark"
            : "light";
    }

    return theme;
};

const getServerSnapshot = () => "";

const useTheme = () => {
    const theme = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot,
    );

    return { theme };
};

export default useTheme;
