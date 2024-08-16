import React from "react";

const Filter = (props) => {
    const filterData = props.filterData;
    const category = props.category;
    const setCategory = props.setCategory;

    function filterHandler(title) {
            setCategory(title)
    }

    return (
        <div className="w-11/12 flex flex-wrap justify-center gap-y-4 space-x-4 py-4 mx-auto max-w-max">

            {
                filterData.map((data) => {
                   return  <button className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black
                   hover:bg-opacity-50 border-2 transition-all duration-300
                   ${category === data.title ? "opacity-80 border-white" : "opacity-6   0 border-transparent"}`}
                   key={data.id} onClick={() => filterHandler(data.title)}>{data.title}</button>
                })
            }

        </div>
    )
}

export default Filter;