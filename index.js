/**
 * Optional chaining operator
 */
const people = {
  name: 'Seongeun Park',
  data: {
    first: {
      second: null
    }
  }
}
// const people = {
//   name: 'Seongeun Park',
//   data: {
//     first: {
//       second: {
//         third: 'hello'
//       }
//     }
//   }
// }

const third = people?.data?.first?.second?.third

/**
 * Nullish coalescing operator
 */
// Conditional operator
let result_first = people ? people : 'No people'

// Nullish coalescing operator
let result_second = people ?? 'No people'

// OR 
const _people = people || 'No people'

// Optional chaning + Nullish coalescing operator
const name = people?.name ?? 'No name'
console.log(`name`, name)

