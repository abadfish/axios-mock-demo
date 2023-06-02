import MockAdapter from 'axios-mock-adapter'
import { client } from '../client'

export const mockHttpClient = new MockAdapter(client, {
  onNoMatch: 'throwException',
})
afterEach(() => mockHttpClient.reset())
