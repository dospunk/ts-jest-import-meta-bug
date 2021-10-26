# ts-jest-import-meta-bug

Even though the tsconfig.json contains `"module": "esnext"`, running `npm test` will show the error 

```
 FAIL  ./script.test.ts
  ● Test suite failed to run

    script.ts:2:17 - error TS1343: The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'esnext', or 'system'.

    2     console.log(import.meta)
                      ~~~~~~~~~~~
```
