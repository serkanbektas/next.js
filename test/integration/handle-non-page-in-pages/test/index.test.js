/* eslint-env jest */

import path from 'path'
import { nextBuild } from 'next-test-utils'

const appDir = path.join(__dirname, '..')

describe.skip('Handle non-page in pages when target: serverless', () => {
  it('Fails softly with descriptive error', async () => {
    const { stderr } = await nextBuild(appDir, [], { stderr: true })

    expect(stderr).toMatch(
      /found page without a React Component as default export in/
    )
    expect(stderr).toMatch(/pages\/invalid/)
  })
})
