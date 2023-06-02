import { Todo } from '../todos'

export const makeTodo = (override?: Partial<Todo>): Todo => ({
  id: 234567,
  title: 'Sweep the garage',
  ...override,
})
