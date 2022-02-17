import Form from "./Form";
import Preview from "./Preview";
import {useState} from "react";
import {v4 as uuidv4} from "uuid";

const Main = () => {
  const [info, setInfo] = useState({
    personal: {
      fName: "",
      lName: "",
      address: "",
      phone: "",
      email: "",
      description: ""
    },
    experience: [{
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: ""
    }],
    education: [{
      id: uuidv4(),
      university: "",
      city: "",
      degree: "",
      from: "",
      to: ""
    }]
  })

  const [image, setImage] = useState(null);

  function changePersonal(e) {
      const { name, value } = e.target;
      setInfo((prev) => ({
        ...prev,
        personal: {
          ...prev.personal,
          [name] : value
        }
      }))
  }

  function changeExperience(e, id) {
    const {name, value} = e.target;
    setInfo((prev) => {
      const newExperience = prev.experience.map((exp) => {
        if(exp.id === id) {
          return {...exp, [name]: value}
        }
        return exp;
      })
      return {...prev, experience: [...newExperience]}
    })
  }

  function addExperience() {
    setInfo((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: ""
        }
      ]
    }))
  }

    function deleteExperience(id) {
      setInfo((prev) => {
        const newExperience = prev.experience.filter(
          (exp) => exp.id !== id
        )
        return {...prev, experience: [...newExperience]}
      })
    }

  function onImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }

  function changeEducation(e, id) {
    const {name, value} = e.target;
    setInfo((prev) => {
      const newEducation = prev.education.map((ed) => {
        if(ed.id === id) {
          return {...ed, [name] : value}
        }
        return ed
      })
      return {...prev, education: [...newEducation]}
    })
  }

  function addEducation() {
    setInfo((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: uuidv4(),
          university: "",
          city: "",
          degree: "",
          from: "",
          to: ""
        }
      ]
    }))
  }

  function deleteEducation(id) {
    setInfo((prev) => {
      const newEducation = prev.education.filter((ed) =>
      ed.id !== id
      )
      return {...prev, education: [...newEducation]}
    })
  }

  return (
    <main className="main-content">
    <Form data={info}
    changePersonal={changePersonal} 
    onChangeImage={onImageChange}
    changeExperience={changeExperience}
    addExperience={addExperience}
    delExperience={deleteExperience}
    changeEducation={changeEducation}
    addEducation={addEducation}
    deleteEducation={deleteEducation}
    />
    <Preview cv={info} img={image} onChangeImage={onImageChange}/>
    </main>
  )
}

export default Main;