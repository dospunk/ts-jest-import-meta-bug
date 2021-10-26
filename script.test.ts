import { printMeta } from "./script"

test('printMeta doesn\'t error', ()=>{
    expect(()=>printMeta()).not.toThrowError()
})