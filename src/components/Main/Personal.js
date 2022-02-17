import Input from "../Utiles/Input";
import Area from "../Utiles/Area";

const Personal = ({personalData, changePersonal, onChangeImage}) => {
  const { fName, lName, address, phone, email, description } = personalData;
  
  return (
    <section className="main-section">
      <h2>Personal Information</h2>
      <Input type="text" placeholder="First name" name="fName" onChange={changePersonal} value={fName}/>
      <Input type="text" placeholder="Last name" name="lName" onChange={changePersonal} value={lName}/>
      <label className="main-section-label">
        Photo
        <Input type="file" onChange={onChangeImage}/>
      </label>
      <Input type="text" placeholder="Address" name="address" onChange={changePersonal} value={address}/>
      <Input type="text" placeholder="Phone number" name="phone" onChange={changePersonal} value={phone}/>
      <Input type="text" placeholder="Email" name="email" onChange={changePersonal} value={email}/>
      <Area placeholder="Description" value={description} onChange={changePersonal} name="description"/>
    </section>
  )
}

export default Personal;