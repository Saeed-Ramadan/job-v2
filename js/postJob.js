
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();


const API_ROOT = "https://gdsc-job-app.herokuapp.com/api";
const form = document.getElementById("job-create");
form.addEventListener("submit", async (e) => {
    // console.log(e);
    e.preventDefault();

    const formData = new FormData(form);
    // console.log(formData.get("job_title"));
    const data = Object.fromEntries(formData)
    console.log(data);
    //  const logoFormData = new formData();
    //  logoFormData.set("logo" , formData.get("logo").files[0]);

    const res = fetch(`${API_ROOT}/jobs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            "company_email": formData.get("company_email"),
            "company_logo": "https://ucarecdn.com/3ec2e65c-b1a5-4961-8dbd-c921572e4a95/",
            "company_name": formData.get("company_name"),
            "created_at": formData.get("created_date"),
            "description": "<h1>test</h1><p>test</p>&lt;div&gt;test&lt;/div&gt;",
            "id": 4,
            "location": formData.get("location"),
            "salary": formData.get("salary"),
            "title": formData.get("job_title"),
            "type": 1,
            "vacancy": 3
        }),
        
    });

     const datares = await res.json();
     if(!res.ok) return alert(datares.message);
     alert(`job ${datares.data.title} created successfully`);
})