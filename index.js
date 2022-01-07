/*
|----------------------------------
| Map Example
|----------------------------------
*/

const numbers = [1, 2, 3, 4]

const doubledNumbers = []

numbers.forEach(number => {
  doubledNumbers.push(number * 2)
})

console.log(doubledNumbers)

console.log(numbers.map(number => number * 2))


/*
|----------------------------------
| Map Example 2
|----------------------------------
*/

const todos = [
  { id: 1, isComplete: true, title: 'Go to Store'},
  { id: 2, isComplete: false, title: 'Finish Screencast'},
  { id: 3, isComplete: false, title: 'Take over world'},
]

const todoTitles = []

todos.forEach(todo => {
  todoTitles.push(todo.title)
})

console.log(todos.map(todo => {
  return { title: todo.title }
}))

/*
|----------------------------------
| Filter Examples
|----------------------------------
*/

const todosFiltered = []

todos.forEach(todo => {
  if (!todo.isComplete) {
    todosFiltered.push(todo)
  }
})

console.log(todosFiltered)

console.log(todos.filter(todo => !todo.isComplete))


/*
|----------------------------------
| Reduce Example
|----------------------------------
*/

const people = [
  { id: 1, name: "Bob", age: 14, },
  { id: 2, name: "John", age: 36, },
  { id: 3, name: "Sally", age: 26, },
  { id: 4, name: "Mary", age: 54, }
]

const totalYears = people.reduce((prev, person) =>  prev + person.age, 0)

const oldestPerson = people.reduce((oldest, person) => oldest?.age > person.age ? oldest : person, {})

console.log(totalYears)
console.log(oldestPerson)

/*
|----------------------------------
| Combining/Chaining Them
|----------------------------------
*/

const overThirty = people
  .filter(person => person.age >= 30)
  .map(person => {
    return {
      name: person.name,
      age: person.age,
    }
  })

  console.log(overThirty)
