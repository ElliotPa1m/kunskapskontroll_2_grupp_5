

export async function getMovers() {
  try {
    const response = await fetch("https://wewmzmizeoxntuunlbzb.supabase.co/rest/v1/worker_service?select=workers!inner(name,image,phone_number,email),services!inner(service_name)&service_id=eq.1&apikey=sb_publishable_e1tEPV0MAR3j4vE_OadWJA_DTk4qfE_");

    if (!response.ok) {

        throw new Error();

    }

    return await response.json();

}

   catch {
    throw new Error("API Error");
   }

}