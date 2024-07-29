import { useState } from "react"

export default function App() {
  const [formData,setFormData] = useState({
    firstName:'',
    lastName:'',
    emai:'',
    password:'',
    confirmPassword:'',
    gender:'',
    location:'',
    sports:{
      basketball:false,
      football:false,
      marathon:false,
      cycling:false,
    }
  })
  function handleChange(event){
    console.log(event.target.name, event.target.type==='checkbox'?event.target.checked:event.target.value)
    const el = event.target 
    if(el.type==='checkbox'){
      setFormData(prev=>{
        return {...prev,sports:{...prev.sports,[el.name]: el.checked}}
      })
    }else{
      setFormData(prev=>{
        return {...prev,[el.name]:el.value}
      })
    }
  }
  return (
    <>
      <form action="#" className="flex flex-col w-3/5 p-10 gap-5 text-xl  my-10 border-2 rounded-xl m-auto border-violet-500">
        <h1 className="font-bold text-center text-violet-500">Sign up</h1>
        <input onChange={handleChange} className="border-2 border-violet-200 h-14 rounded-md px-5" value={formData.firstName} type="text" name="firstName" placeholder="Souvede"  />
        <input onChange={handleChange} className="border-2 border-violet-200 h-14 rounded-md px-5" value={formData.lastName} type="text" name="lastName" placeholder="Inshuti"/>
        <input onChange={handleChange} className="border-2 border-violet-200 h-14 rounded-md px-5" value={formData.email} type="email" name="email" placeholder="email@example.com" />
        <input onChange={handleChange} className="border-2 border-violet-200 h-14 rounded-md px-5" value={formData.password} type="password" name="password" placeholder="password" />
        <input onChange={handleChange} className="border-2 border-violet-200 h-14 rounded-md px-5" value={formData.confirmPassword} type="password" name="confirmPassword" placeholder="confirm password" />
        <span>Gender</span>
        <div className="flex gap-20">
          <div className="flex gap-5">
            <input onChange={handleChange} type="radio" value={"Male"} name="gender" id="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex gap-5">
            <input onChange={handleChange} type="radio" value={"Female"} name="gender" id="female"  />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <span className="">Location(province):</span>
            <select onChange={handleChange} name="location" className="mr-10 px-5 bg-violet-200" >
              <option value="">---Provinces---</option>
              <option value="kigali">Kigali</option>
              <option value="southern">Southern</option>
              <option value="northern">Northern</option>
              <option value="eastern">Eastern</option>
              <option value="western">Western</option>
            </select>
            
          </div>
          <div>
            <span className="">Favorite sports:</span>

            <div className="flex gap-5">
              <input onChange={handleChange} type="checkbox" name="cycling" id="cycling" checked={formData.sports.cycling}/>
              <label htmlFor="cycling">Cycling</label>
            </div>

            <div className="flex gap-5">
              <input onChange={handleChange} type="checkbox" name="marathon" id="marathon" checked = {formData.sports.marathon} />
              <label htmlFor="marathon">Marathon/Running</label>
            </div>

            <div className="flex gap-5">
              <input  onChange={handleChange} type="checkbox" name="basketball" id="basketball"  checked = {formData.sports.basketball}/>
              <label htmlFor="basketball">Basketball</label>
            </div>
            <div className="flex gap-5">
              <input  onChange={handleChange}type="checkbox" name="football" id="football" checked={formData.sports.football} />
              <label htmlFor="football">Football</label>
            </div>
          </div>
        </div>


        <button type="submit" className="bg-violet-500 px-5 py-2 rounded-xl w-max m-auto text-white">Submit</button>
      </form>
    </>
  )
}