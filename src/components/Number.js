const Number = ({id,inner,handleClick}) => {
  return (
    <div>
      <button className={`h-[60px] ${id === "zero" ? "w-[142px]" : "w-[70px]"} m-[1px] cursor-pointer text-2xl text-white bg-[#a4b0be] rounded-sm active:bg-[#747d8c]`} id={id} onClick={handleClick}>{inner}</button>
    </div>
  )
}

export default Number
