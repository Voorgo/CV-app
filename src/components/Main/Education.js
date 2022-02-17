import EducationInp from "./EducationInp";

const Education = ({education, onChangeEd, onAdd, onDelete}) => {
  const educationItem = education.map((ed) => 
  <EducationInp education={ed} key={ed.id} onChangeEd={onChangeEd} onDelete={onDelete}/>
  )
  return (
    <section className="main-section">
      <h2>Education</h2>
      {educationItem}
      <button onClick={onAdd}>Add</button>
    </section>
  )
};

export default Education;