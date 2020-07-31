function alarmClock(setTime, timeToSet) {

  const setHH = parseInt(setTime.split(':')[0])
  const alarmHH = parseInt(timeToSet.split(':')[0])
  const setMM = parseInt(setTime.split(':')[1])
  const alarmMM = parseInt(timeToSet.split(':')[1])

  return shiftHH(setHH, alarmHH) + shiftMM(setMM, alarmMM)
}

function shiftHH(setHH, alarmHH) {

  if (Math.abs(setHH - alarmHH) > 12 && setHH < alarmHH) {

    let hhShift = Math.abs(setHH + (24 - alarmHH))
    return hhShift
  } else if (Math.abs(setHH - alarmHH) > 12 && setHH > alarmHH) {
    let hhShift = Math.abs(alarmHH + (24 - setHH))
    return hhShift
  } else if (setHH === alarmHH) {
    return 0
  }
  hhShift = Math.abs(setHH - alarmHH)
  return hhShift
}

function shiftMM(setMM, alarmMM) {
  if (Math.abs(setMM - alarmMM) > 30 && setMM < alarmMM) {
    let mmShift = Math.abs(setMM + (60 - alarmMM))
    return mmShift
  } else if (Math.abs(setMM - alarmMM) > 30 && setMM > alarmMM) {
    let mmShift = Math.abs(alarmMM + (60 - setMM))
    return mmShift
  } else if (setMM === alarmMM) {
    return 0
  }
  mmShift = Math.abs(setMM - alarmMM)
  return mmShift
}

console.log(alarmClock('23:50', '3:22'))

module.exports = {
  alarmClock
};
