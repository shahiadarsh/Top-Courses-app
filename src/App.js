import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";

import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourse(output.data);

    }
    catch (error) {
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">

      <div>
        <Navbar />
      </div>    

      <div className="bg-bgDark2 min-h-[100vh]">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>

        <div className="max-w-[1200px] w-11/12 mx-auto flex flex-wrap justify-center ">
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>

    </div>
  )
};

export default App;
