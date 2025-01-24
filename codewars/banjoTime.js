function areYouPlayingBanjo(name) {
  let phraseYeah = " plays banjo";
  let phraseNoah = " does not play banjo";
  if (name.charAt(0) === 'r' || name.charAt(0) === 'R') {
    return name + phraseYeah;
  } else {
    return name + phraseNoah;
  }
}

console.log(areYouPlayingBanjo("puma"));