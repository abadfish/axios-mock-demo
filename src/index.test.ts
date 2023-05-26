import { client } from './client'
import MockAdapter from 'axios-mock-adapter'
import { cleanup } from '@testing-library/react'

const mockHttp = new MockAdapter(client, { onNoMatch: "throwException" })

beforeAll(() => {
  mockHttp.reset()
})

afterEach(cleanup)