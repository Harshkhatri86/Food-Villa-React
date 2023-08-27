function filterData(sText , rest ){
    return rest.filter((res) => res.data?.name?.toLowerCase().includes(sText.toLowerCase()))
} 

export {filterData} ; 