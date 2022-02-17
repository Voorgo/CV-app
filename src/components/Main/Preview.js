import ExperiencePreview from "./ExperiencePreview";
import EducationPreview from "./EducationPreview";

export default function Preview({cv, img}) {
  const { fName, lName, address, phone, email, description } = cv.personal;
  const experienceItem = cv.experience.map((exp) => 
  <ExperiencePreview cv={exp} key={exp.id}/>
  );
  const educationItem = cv.education.map((ed) => 
  <EducationPreview cv={ed} key={ed.id} />
  );
    return (
      <section className="preview-section">
        <div className="preview-first">
          <h2>{fName} <span style={{color: "orange"}}>{lName}</span></h2>
          <img alt="profile" src={img === null ? "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" : img}/>
          <div className="preview-contact">
          <h3>Contact</h3>
          <div className="preview-contact-div">
            <div>
              <h4>Address:</h4>
              <p>{address}</p>
            </div>
            <div>
              <h4>Phone:</h4>
              <p>{phone}</p>
            </div>
            <div>
              <h4>Email:</h4>
              <p>{email}</p>
            </div>
          </div>
          </div>
        </div>
        <div className="preview-second">
          <div className="preview-second-summary">
            <h3>Summary</h3>
            <p>{description}</p>
          </div>
          <div className="preview-second-experience">
            <h3>Experience</h3>
            {experienceItem}
          </div>
          <div className="preview-second-education">
            <h3>Education</h3>
            {educationItem}
          </div>
        </div>
      </section>
    )
}