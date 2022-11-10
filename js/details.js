//call variables

const jobVeiw = document.getElementById("job-details-view");
 console.log(jobVeiw);

// console.log(jobNumber);
//fetch data
fetch("https://gdsc-job-app.herokuapp.com/api/jobs")
  .then((res) => res.json())
  .then((data) => {
    data.data.forEach((job) => {
      jobVeiw.innerHTML = `
      <li>
      <div class="job-container-left">
          <div class="job-img-container">
              <img class="job-img" src=${job.company_logo} alt="" />
          </div>
          <div class="job-details">
              <h4 class="job-name">${job.title}</h4>
              <div class="job-details-sub">
                  <p class="job-company">${job.company_name}</p>
                  <p class="job-address">${job.location}</p>
                  <p class="job-time">full-time</p>
              </div>
          </div>
      </div>
  </li>
      `
    
    })
    
    })
