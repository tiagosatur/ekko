import { useDate } from ".";

export default function populateFavoriteForm(favoriteCharacter, setValue) {
  favoriteCharacter &&
    Object.entries(favoriteCharacter).map(([key, val]) => {
      if (typeof val === "object" && val !== null && !Array.isArray(val)) {
        Object.entries(val).map(([subKey, subVal]) => {
          const camelCaseSubKey = `${key}${
            subKey.charAt(0).toUpperCase() + subKey.slice(1)
          } `.replace(/\s/g, "");

          return setValue(camelCaseSubKey, subVal);
        });
      }

      if (key === "created") return setValue(key, useDate.format.iso.date(val));
      return setValue(key, val);
    });
}
