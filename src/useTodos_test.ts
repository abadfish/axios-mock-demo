import { renderHook, waitFor } from '@testing-library/react'
import { makeTodo } from './test/factories'
import { mockHttpClient } from './test/mockHttpClient'
import { useTodos } from './useTodos'

describe('useTodos', () => {
  const mockTodo = makeTodo({ title: 'Do the dishes' })
  beforeEach(() => {
    mockHttpClient.onGet('/todos').replyOnce(200, [mockTodo])
  })
  it('starts empty on load and has data when fetch complete', async () => {
    const { result } = renderHook(() => useTodos())
    expect(result.current.todos).toEqual([])
    await waitFor(() =>
      expect(result.current.todos[0].title).toEqual('Do the dishes'),
    )
    console.log(result.current.todos)
  })
})

describe('create a new todo', () => {
  beforeEach(() => {
    mockHttpClient.onPost('/todos', { title: 'Wash the car' }).replyOnce(200)
  })
  it('adds the created todo to the todos array', async () => {
    const { result } = renderHook(() => useTodos())
    await result.current.createTodo('Wash the car')
    await waitFor(() => expect(result.current.todos.length).toBeGreaterThan(0))
  })
})
