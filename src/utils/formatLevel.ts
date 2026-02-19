export function formatLevel(level: string) {
  return level.toLowerCase().replace(/\s+/g, "-");
}

export function reformatLevel(formattedLevel: string) {
  let result: string;
  
  if (formattedLevel.includes("jlpt")) {
    result = formattedLevel.toUpperCase();
  } else {
    result = formattedLevel.charAt(0).toUpperCase() + formattedLevel.slice(1)
  }

  result = result.replace("-", " ")
  return result;
}
