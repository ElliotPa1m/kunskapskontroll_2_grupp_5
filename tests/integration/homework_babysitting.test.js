import { describe,test,vi,expect } from "vitest";
import { fetchWorkers } from "../../src/homework_babysitting";



describe('fetchWorkers integration with renderWorkers',()=>{
    test('should fetch workers and display their names and images',async()=>{
        //Stub global fetch
        vi.stubGlobal('fetch',vi.fn());
        //Mock fetch response
        fetch.mockResolvedValue({
            ok:true,
            json:async()=>(
               [{workers:{name:'Alice',image:'Alice.png'}},{workers:{name:'John',image:'John.png'}}]
            )
        })
        //Prepare dom container
         document.body.innerHTML='<ul class="container"></ul>';
        //Run function
        await fetchWorkers();
        //Assert dom content
        const container=document.querySelector('.container');
        //Check that names are rendered
        expect(container.textContent).toContain('Alice');
        expect(container.textContent).toContain('John');
        //Check that images are rendered
        const images=document.querySelectorAll('img');
        expect(images[0].src).toContain('Alice.png');
        expect(images[1].src).toContain('John.png');
       
    })
})