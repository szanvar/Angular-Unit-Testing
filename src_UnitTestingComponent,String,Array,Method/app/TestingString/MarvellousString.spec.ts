
// Import requred funnction from .ts file
import {Display} from './MarvellousString';

// Write test suit
describe('Display', ()=>{

    it('should return name of student is', ()=>{
        expect(Display('Seema')).toContain('Seema welcome to Marvellous Infosystems');
        //        expect(Display('Seema')).toEqual('Seema welcome to Marvellous Infosystems');
    })
})