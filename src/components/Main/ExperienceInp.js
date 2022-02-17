import Input from "../Utiles/Input";

export default function ExperienceInp({experience, onChangeExp, onDelete}) {
  return (
    <>
      <Input type="text" placeholder="Position" name="position" value={experience.position} onChange={(e)=> onChangeExp(e, experience.id)}/>
      <Input type="text" placeholder="Company" name="company" value={experience.company} onChange={(e)=> onChangeExp(e, experience.id)}/>
      <Input type="text" placeholder="City" name="city" value={experience.city} onChange={(e)=> onChangeExp(e, experience.id)}/>
      <Input type="text" placeholder="From" name="from" value={experience.from} onChange={(e)=> onChangeExp(e, experience.id)}/>
      <Input type="text" placeholder="To" name="to" value={experience.to} onChange={(e)=> onChangeExp(e, experience.id)}/>
      <button onClick={()=> onDelete(experience.id)}>Delete</button>
    </>
  )
}