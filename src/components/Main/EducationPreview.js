export default function EducationPreview({cv}) {
  const {degree, from, to, city, university} = cv;
  return (
    <div>
    <h4>{degree}</h4> - <span>{from}</span> to <span>{to}</span>
    <div><h4>{university}</h4>, <span>{city}</span></div>
  </div>
  )
}