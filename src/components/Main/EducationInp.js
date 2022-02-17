import Input from "../Utiles/Input"

export default function EducationInp({education, onDelete, onChangeEd}) {
  return (
    <>
      <Input type="text" placeholder="University name" name="university" value={education.university} onChange={(e) => onChangeEd(e, education.id)}/>
      <Input type="text" placeholder="City" name="city" value={education.city} onChange={(e) => onChangeEd(e, education.id)}/>
      <Input type="text" placeholder="Degree" name="degree" value={education.degree} onChange={(e) => onChangeEd(e, education.id)}/>
      <Input type="text" placeholder="From" name="from" value={education.from} onChange={(e) => onChangeEd(e, education.id)}/>
      <Input type="text" placeholder="To" name="to" value={education.to} onChange={(e) => onChangeEd(e, education.id)}/>
      <button onClick={() => onDelete(education.id)}>Delete</button>
    </>
  )
}