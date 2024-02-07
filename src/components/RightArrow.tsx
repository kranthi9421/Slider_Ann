
const RightArrow = ({onClick}:any) => {
  return (
    <>
      <button onClick={onClick} type="button" className="RightArrowBtn absolute z-10 right-0 md:right-6 top-[50%] -translate-y-[50%] rotate-[180deg]">
      <svg width="57px" height="57px" viewBox="0 0 56 57" version="1.1"  xmlns="http://www.w3.org/2000/svg"><desc>Created with Lunacy</desc><defs><filter filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" id="filter_1"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx="0" dy="0"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5019608 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect0_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect0_dropShadow" result="shape"></feBlend></filter></defs><g id="FlÃ¨che-Slide-Copy-2" transform="matrix(1 8.742278E-08 8.742278E-08 -1 8 48.00001)"><g filter="url(#filter_1)"><path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" id="Oval" fill="#FFFFFF" stroke="none"></path></g><path d="M16.0796 8.21338L8.06982 0L0 8.21338" transform="matrix(-4.371139E-08 -1 1 -4.371139E-08 17 30.07959)" id="Path-3" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round"></path></g></svg>
      </button>
    </>
  )
}

export default RightArrow
