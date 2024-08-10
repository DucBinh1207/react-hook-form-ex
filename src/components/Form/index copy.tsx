// import { InputHTMLAttributes } from "react";

// export default function Form() {
//   return (
//     <div className="mx-auto flex w-[900px] flex-col items-center">
//       <form className="grid w-[100%] grid-cols-form grid-rows-form gap-x-[70px] gap-y-[40px]">
//         <div className="first__name">
//           <div className="label">First Name*</div>
//           <input
//             type="text"
//             id="first__name"
//             className="info__input"
//             placeholder="Enter your First Name"
//           />
//           <div className="first__name__err error"></div>
//         </div>

//         <div className="last__name">
//           <div className="label">Last Name</div>
//           <input
//             type="text"
//             id="last__name"
//             className="info__input"
//             placeholder="Enter your Last Name"
//           />
//           <div className="last__name__err error"></div>
//         </div>

//         <div className="gender">
//           <div className="label">Gender*</div>
//           <select name="gender" id="gender">
//             <option value="" disabled selected hidden>
//               Select
//             </option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//           <div className="gender__err error"></div>
//         </div>

//         <div className="birthday">
//           <div className="label">Date of Birth*</div>
//           <input
//             type="text"
//             id="birthday"
//             className="info__input"
//             placeholder="Enter your Date of Birth"
//             onFocus={(e) => {
//               e.type = "date";
//             }}
//             onBlur={(e) => {
//               e.type = "text";
//             }}
//           />
//           <div className="birthday__err error"></div>
//         </div>

//         <div className="parent__first__name">
//           <div className="label">Mother/Father's First Name*</div>
//           <input
//             type="text"
//             id="parent__first__name"
//             className="info__input"
//             placeholder="Enter First Name"
//           />
//           <div className="parent__first__name__err error"></div>
//         </div>

//         <div className="parent__last__name">
//           <div className="label">Last Name</div>
//           <input
//             type="text"
//             id="parent__last__name"
//             className="info__input"
//             placeholder="Enter Last Name"
//           />
//           <div className="parent__last__name__err error"></div>
//         </div>

//         <div className="email-grid col-span-2 grid grid-cols-subgrid">
//           <div className="email col-start-1">
//             <div className="label">Email Address*</div>
//             <input
//               type="text"
//               id="email"
//               className="info__input"
//               placeholder="Enter your Email Address"
//             />
//             <div className="email__err error"></div>
//           </div>
//         </div>

//         <div className="pin">
//           <div className="label">Pin Code*</div>
//           <input
//             type="text"
//             id="pin"
//             className="info__input"
//             placeholder="Enter your area's Pin Code"
//           />
//           <div className="pin__err error"></div>
//         </div>

//         <div className="country">
//           <div className="label">Country*</div>
//           <select name="country" id="country">
//             <option value="" disabled selected hidden>
//               Select
//             </option>
//             <option value="vietnam">Viet Nam</option>
//             <option value="american">American</option>
//             <option value="japan">Japan</option>
//           </select>
//           <div className="country__err error"></div>
//         </div>

//         <div className="time__zone">
//           <div className="label">Time Zone*</div>
//           <select name="time__zone" id="time__zone">
//             <option value="" disabled selected hidden>
//               Select
//             </option>
//             <option value="UTC-12:00">UTC-12:00</option>
//             <option value="UTC-11:00">UTC-11:00</option>
//             <option value="UTC-10:00">UTC-10:00</option>
//             <option value="UTC-09:00">UTC-09:00</option>
//             <option value="UTC-08:00">UTC-08:00</option>
//             <option value="UTC-07:00">UTC-07:00</option>
//             <option value="UTC-06:00">UTC-06:00</option>
//             <option value="UTC-05:00">UTC-05:00</option>
//             <option value="UTC-04:00">UTC-04:00</option>
//             <option value="UTC-03:00">UTC-03:00</option>
//             <option value="UTC-02:00">UTC-02:00</option>
//             <option value="UTC-01:00">UTC-01:00</option>
//             <option value="UTC+00:00">UTC+00:00</option>
//             <option value="UTC+01:00">UTC+01:00</option>
//             <option value="UTC+02:00">UTC+02:00</option>
//             <option value="UTC+03:00">UTC+03:00</option>
//             <option value="UTC+04:00">UTC+04:00</option>
//             <option value="UTC+05:00">UTC+05:00</option>
//             <option value="UTC+06:00">UTC+06:00</option>
//             <option value="UTC+07:00">UTC+07:00</option>
//             <option value="UTC+08:00">UTC+08:00</option>
//             <option value="UTC+09:00">UTC+09:00</option>
//             <option value="UTC+10:00">UTC+10:00</option>
//             <option value="UTC+11:00">UTC+11:00</option>
//             <option value="UTC+12:00">UTC+12:00</option>
//             <option value="UTC+13:00">UTC+13:00</option>
//             <option value="UTC+14:00">UTC+14:00</option>
//           </select>
//           <div className="time__zone__err error"></div>
//         </div>

//         <div className="phone">
//           <div className="label">Phone Number (include country code)*</div>
//           <input
//             type="text"
//             id="phone"
//             className="info__input"
//             placeholder="Enter your Phone Number"
//           />
//           <div className="phone__err error"></div>
//         </div>
//       </form>
//       <button className="next__btn">Next</button>
//     </div>
//   );
// }

// function InputTemplate(placeholder: string) {
//   return (
//     <>
//       <input
//         type="text"
//         placeholder={placeholder}
//         className="mt-[5px] h-[60%] w-[100%] rounded-[8px] border-[2px] border-solid border-[#bbbbbb] px-[20px] text-[17px] font-semibold text-[#4b4b4b] outline-none"
//       />
//     </>
//   );
// }
