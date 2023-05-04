const Operation = ({id,handleClick,inner}) => {
  return (
    <div>
      <button className={`h-[60px] w-[70px] m-[1px] cursor-pointer text-2xl text-white bg-[#353b48] rounded-sm active:bg-[#272b36]`} id={id} onClick={handleClick}>{inner}</button>
    </div>
  )
}

export default Operation
