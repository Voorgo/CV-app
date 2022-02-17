export default function ExperiencePreview({cv}) {
  const {position, from, to, company, city} = cv;
  return (
    <div>
      <h4>{position}</h4> - <span>{from}</span> to <span>{to}</span>
      <div><h4>{company}</h4>, <span>{city}</span></div>
    </div>
  )
}