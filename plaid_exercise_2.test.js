const exercise = require("./plaid_exercise_2.js")


test("alarm clock. later setTime", () => {
  expect(exercise.alarmClock('23:50', '3:22')).toBe(32)
})

test("alarm clock. later alarmTime ", () => {
  expect(exercise.alarmClock('2:00', '2:54')).toBe(6)
})

test("alarm clock. same hour ", () => {
  expect(exercise.alarmClock('22:44', '22:44')).toBe(0)
})

