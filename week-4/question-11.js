// Author: hamidullah hamidi
// Date: 2025/03/11

// Question:  String Rotation Check

// Description: Check if one string is rotation of another.
// Example:
// "waterbottle", "erbottlewat" → True

export const isRotated = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const sumStr = str1 + str1;
  // waterwater <-> terwa

  for (let i = 0; i < str2.length; i++) {
    let match = true;

    for (let j = 0; k < str2.length; j++) {
      if (sumStr[i + j] !== str2[j]) {
        match = false;
        break;
      }
    }

    if (match) return true;
  }

  return false;
};

console.log(isRotated('water', 'terwa'));

// short way:
// const sumStr = str1 + str1;
// if (sumStr.includes(str2)) return true;
