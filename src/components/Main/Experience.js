import ExperienceInp from "./ExperienceInp";

const Experience = ({experience, onChangeExp, onAdd, onDelete}) => {
  const experienceList = experience.map((experienceItem) => 
  <ExperienceInp experience={experienceItem} key={experienceItem.id} onChangeExp={onChangeExp} onDelete={onDelete}/>
  )
  return (
    <section className="main-section">
      <h2>Experience</h2>
      {experienceList}
      <button onClick={onAdd}>Add</button>
    </section>
  )
};

export default Experience;