import { describe,test,expect,beforeEach} from  "vitest";
import { renderWorkers } from "../../src/homework_babysitting.js";

describe('renderWorkers',()=>{
    beforeEach(()=>{
        //create faked container in the dom
        document.body.innerHTML='<ul class="container"></ul>'
    })
    test('should render worker name and image',()=>{
        const data=[
            {workers:{name:'Alice',image:'Alice.png'}},{workers:{name:'John',image:'John.png'}}];
   
    renderWorkers(data);

    const items=document.querySelectorAll('.container li')
    expect(items.length).toBe(2);
    expect(items[0].querySelector('p').textContent).toBe('Alice');
    expect(items[0].querySelector('img').src).toContain('Alice.png')
    })
})