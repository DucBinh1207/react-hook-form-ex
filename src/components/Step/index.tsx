export default function Step() {
  return (
    <div className="">
      <h1 className="text-[40px] font-semibold">Let's get you started</h1>
      <h4 className="text-[20px] font-semibold text-[#767676]">
        Enter the details to get going
      </h4>
      <div className="register__process__section mx-auto my-[50px] flex w-[900px] justify-between">
        <div className="step">
          <div className="step-number step border-[#5826ae] text-[#5826ae]">
            1
          </div>
          <div className="step-name !text-[#5826ae]">General Details</div>
        </div>
        <div className="step relative before:absolute before:left-[-130px] before:w-[100px] before:border-y before:border-solid before:border-[#bbbbbb] before:content-[''] after:absolute after:right-[-130px] after:w-[100px] after:border-y after:border-solid after:border-[#bbbbbb] after:content-['']">
          <div className="step-number step">2</div>
          <div className="step-name">Event Details</div>
        </div>
        <div className="step">
          <div className="step-number step">3</div>
          <div className="step-name">Pricing and Submit</div>
        </div>
      </div>
    </div>
  );
}
