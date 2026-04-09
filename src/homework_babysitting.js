export async function fetchWorkers(){
    try{
         const res=await fetch("https://wewmzmizeoxntuunlbzb.supabase.co/rest/v1/worker_service?select=workers(name,image,phone_number,email),services(service_name)&service_id=eq.2&apikey=sb_publishable_e1tEPV0MAR3j4vE_OadWJA_DTk4qfE_");
         if(!res.ok){
            throw new Error('Nätverkfel')
         }
         const data =await res.json();
    
        renderWorkers(data)
      
        }
    catch (error){
        console.error(error)
        throw error
        }

    }

    export function renderWorkers(data){
    const container=document.querySelector('.container');
    for(const element of data){
        const list=document.createElement('li');

         
        const name=document.createElement('p')
        name.textContent=`${element.workers.name}`;
     
        const image=document.createElement('img');
        image.src=`${element.workers.image}`;
        image.alt=`${element.workers.name}`;
        const telefonNumber=document.createElement('p');
        telefonNumber.textContent=`${element.workers.phone_number}`;
        const email=document.createElement('p');
        email.textContent=`${element.workers.email}`
        list.append(image,name,telefonNumber,email);
        container.appendChild(list)
    
    const buttons=document.createElement('div');
    buttons.className='Buttons';

    const bookButton=document.createElement('button');
    bookButton.className='book';
    bookButton.textContent='Boka';

    const contactButton=document.createElement('button');
    
    contactButton.className='contact';
    contactButton.textContent='Kontakt';

    buttons.append(bookButton,contactButton);
    list.append(buttons)
    }
   }