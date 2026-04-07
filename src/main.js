import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
const supabaseUrl = 'https://wewmzmizeoxntuunlbzb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indld216bWl6ZW94bnR1dW5sYnpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NTc2ODIsImV4cCI6MjA5MDUzMzY4Mn0.B6ZVnHqsHGCTFwRrZpFsITFJvci7U_5OAL6537cLc7c'
const supabaseClient = createClient(supabaseUrl, supabaseKey);
export const SERVICE_WORKERS = {
  MOVING_WORKER_SERVICE_ID: 1,
  HOMEWORK_WORKER_SERVICE_ID: 2,
  PET_WORKER_SERVICE_ID: 3,
  GROCERY_WORKER_SERVICE_ID: 4,
}

export async function loadWorkerImages() {
    try {
        const { data: movingWorker } = await supabaseClient
            .from('worker_service')
            .select('workers(image, name)')
            .eq('service_id', SERVICE_WORKERS.MOVING_WORKER_SERVICE_ID)
            .limit(1)
            .maybeSingle();

        if (movingWorker?.workers) {
            document.getElementById('moving-worker-img').src = movingWorker.workers.image;
            document.getElementById('moving-worker-img').alt = movingWorker.workers.name;
            document.getElementById('moving-worker-name').textContent = movingWorker.workers.name;
        }

        const { data: groceryWorker } = await supabaseClient
            .from('worker_service')
            .select('workers(image, name)')
            .eq('service_id', SERVICE_WORKERS.GROCERY_WORKER_SERVICE_ID)
            .limit(1)
            .maybeSingle();

        if (groceryWorker?.workers) {
            document.getElementById('grocery-shopping-worker-img').src = groceryWorker.workers.image;
            document.getElementById('grocery-shopping-worker-img').alt = groceryWorker.workers.name;
            document.getElementById('grocery-shopping-worker-name').textContent = groceryWorker.workers.name
        }

        const { data: homeworkWorker } = await supabaseClient
            .from('worker_service')
            .select('workers(image, name)')
            .eq('service_id', SERVICE_WORKERS.HOMEWORK_WORKER_SERVICE_ID)
            .limit(1)
            .maybeSingle();

        if (homeworkWorker?.workers) {
            document.getElementById('homework-childcare-worker-img').src = homeworkWorker.workers.image;
            document.getElementById('homework-childcare-worker-img').alt = homeworkWorker.workers.name;
            document.getElementById('homework-childcare-worker-name').textContent = homeworkWorker.workers.name
        }

        const { data: petWorker } = await supabaseClient
            .from('worker_service')
            .select('workers(image, name)')
            .eq('service_id', SERVICE_WORKERS.PET_WORKER_SERVICE_ID)
            .limit(1)
            .maybeSingle();

        if (petWorker?.workers) {
            document.getElementById('pet-house-sitting-worker-img').src = petWorker.workers.image;
            document.getElementById('pet-house-sitting-worker-img').alt = petWorker.workers.name;
            document.getElementById('pet-house-sitting-worker-name').textContent = petWorker.workers.name
        }
    } catch (error) {
        console.error('Error loading workers', error);
    }
}

document.addEventListener('DOMContentLoaded', loadWorkerImages);