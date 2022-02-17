import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

export default function Form({data, changePersonal, onChangeImage, changeExperience, addExperience, delExperience, changeEducation, deleteEducation, addEducation}) {
  const pers = data.personal;
  return (
    <section className="form-section">
      <Personal personalData={pers} changePersonal={changePersonal} onChangeImage={onChangeImage}/>
      <Experience experience={data.experience} onChangeExp={changeExperience} onAdd={addExperience} onDelete={delExperience}/>
      <Education education={data.education} onChangeEd={changeEducation} onAdd={addEducation} onDelete={deleteEducation}/>
    </section>
  )
}