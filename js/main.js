//call variables
const jobNumber = document.getElementById("job-number");
const jobVeiw = document.getElementById("job-view");
// console.log(jobVeiw);

// console.log(jobNumber);
//fetch data
fetch("https://gdsc-job-app.herokuapp.com/api/jobs")
  .then((res) => res.json())
  .then((data) => {
    jobNumber.innerHTML = `<p class="header-p" >${data.meta.total} Jobs listed</p>`;
    
    data.data.forEach((job) => {
      jobVeiw.innerHTML += `


      <li id="list">
      <div class="job-data">
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
        
        <div class="job-container-right">
          <div class="job-action">
            <div class="job-like-container">
              <img src="./images/Vector.png" alt="" class="job-like" />
            </div>
            <a href="#" class="jobBtn">Apply Now</a>
          </div>
          <p class="job-date">${job.created_at}</p>
        </div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="model-button">Show Details</button>
      </div>
      </li>
     ` 
    });
  });
