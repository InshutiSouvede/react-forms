export default function App() {
  return (
    <>
      <form action="#" className="flex flex-col w-3/5 p-10 gap-5 text-xl  my-10 border-2 rounded-xl m-auto border-violet-500">
        <caption className="font-bold text-violet-500">Sign up</caption>
        <input className="border-2 border-violet-200 h-14 rounded-md px-5" type="text" name="firstName" placeholder="Souvede" id="" />
        <input className="border-2 border-violet-200 h-14 rounded-md px-5" type="text" name="lastName" placeholder="Inshuti" id="" />
        <input className="border-2 border-violet-200 h-14 rounded-md px-5" type="email" name="email" placeholder="email@example.com" id="" />
        <input className="border-2 border-violet-200 h-14 rounded-md px-5" type="password" name="password" placeholder="password" id="" />
        <input className="border-2 border-violet-200 h-14 rounded-md px-5" type="password" name="confirmPassword" placeholder="confirm password" id="" />
        <span>Gender</span>
        <div className="flex gap-20">
          <div className="flex gap-5">
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
          </div>
          <div className="flex gap-5">
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <span className="">Address(province):</span>
            <select name="location" className="mr-10 bg-violet-200" id="">
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
              <input type="checkbox" name="cycling" id="cycling" />
              <label htmlFor="cycling">Cycling</label>
            </div>

            <div className="flex gap-5">
              <input type="checkbox" name="marathon" id="marathon" />
              <label htmlFor="marathon">Marathon/Running</label>
            </div>

            <div className="flex gap-5">
              <input type="checkbox" name="basketball" id="basketball" />
              <label htmlFor="basketball">Basketball</label>
            </div>
            <div className="flex gap-5">
              <input type="checkbox" name="football" id="football" />
              <label htmlFor="football">Football</label>
            </div>
          </div>
        </div>


        <button type="submit" className="bg-violet-500 px-5 py-2 rounded-xl w-max m-auto text-white">Submit</button>
      </form>
    </>
  )
}