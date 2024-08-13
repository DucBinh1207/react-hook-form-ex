import { useState } from "react";
import { useForm } from "react-hook-form";
import Toast from "../Toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type htmlFormProps = {
  values?: TFormState;
  onSubmitFunc: (values: TFormState) => string;
};

const schema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(255)
    .regex(/^(?:[a-zA-z]*)$/, {
      message:
        "Invalid First Name. The First Name contains only uppercase and lowercase letters",
    }),
  lastName: z
    .string()
    .min(1)
    .max(255)
    .regex(/^(?:[a-zA-z]*)$/, {
      message:
        "Invalid Last Name. The First Name contains only uppercase and lowercase letters",
    }),
  gender: z.enum(["Male", "Female"], { message: "Invalid Gender." }),
  birthday: z.coerce.date(),
  parentFirstName: z
    .string()
    .min(1)
    .max(255)
    .regex(/^(?:[a-zA-z]*)$/, {
      message:
        "Invalid First Name. The First Name contains only uppercase and lowercase letters",
    }),
  parentLastName: z
    .string()
    .min(1)
    .max(255)
    .regex(/^(?:[a-zA-z\s]*)$/, {
      message:
        "Invalid Last Name. The First Name contains only uppercase and lowercase letters",
    }),
  email: z.string().email({
    message: "Invalid Email. Please enter again (example@example.com)",
  }),
  pin: z
    .string()
    .regex(/^\d{6}$/, "Invalid Pin Code. Pin code contains 6 digits.")
    .transform((value) => parseInt(value, 10)),
  country: z.enum(["Viet Nam", "American", "Japan"], {
    message: "Invalid Country.",
  }),
  timeZone: z.enum(
    [
      "UTC-12:00",
      "UTC-11:00",
      "UTC-10:00",
      "UTC-09:00",
      "UTC-08:00",
      "UTC-07:00",
      "UTC-06:00",
      "UTC-05:00",
      "UTC-04:00",
      "UTC-03:00",
      "UTC-02:00",
      "UTC-01:00",
      "UTC+00:00",
      "UTC+01:00",
      "UTC+02:00",
      "UTC+03:00",
      "UTC+04:00",
      "UTC+05:00",
      "UTC+06:00",
      "UTC+07:00",
      "UTC+08:00",
      "UTC+09:00",
      "UTC+10:00",
      "UTC+11:00",
      "UTC+12:00",
      "UTC+13:00",
      "UTC+14:00",
    ],
    {
      message: "Invalid Time Zone.",
    },
  ),
  phone: z.string().regex(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
    message:
      "Invalid Phone Number. Phone number includes country code and total number is 6-14 digits",
  }),
});

type TFormState = z.infer<typeof schema>;

export default function Form({
  values: valuesProp,
  onSubmitFunc,
}: htmlFormProps) {
  const [inputType, setInputType] = useState("text");
  const defaultValues = valuesProp ?? {
    firstName: "",
    lastName: "",
    gender: undefined,
    birthday: undefined,
    parentFirstName: "",
    parentLastName: "",
    email: "",
    pin: undefined,
    country: undefined,
    timeZone: undefined,
    phone: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormState>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const [isToastOpen, setIsToastOpen] = useState(false);
  const openToast = () => setIsToastOpen(true);
  const closeToast = () => setIsToastOpen(false);

  const onSubmit = (value: TFormState) => {
    console.log(onSubmitFunc(value)); // ----> Add or Update Function
    openToast();
  };

  function InputTemplate(keyName: keyof TFormState, placeholder: string) {
    return (
      <>
        <input
          type="text"
          placeholder={placeholder}
          className={`${errors[keyName] ? "border-red-500" : "border-[#bbbbbb]"} mt-[5px] h-[50px] w-[100%] rounded-[8px] border-[2px] border-solid px-[20px] text-[17px] font-semibold text-[#4b4b4b] outline-none`}
          {...register(keyName)}
        />
      </>
    );
  }

  return (
    <div className="mx-auto mb-[100px] flex w-[900px] flex-col items-center">
      <form
        className="grid w-[100%] grid-cols-form grid-rows-form gap-x-[70px] gap-y-[40px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="first-name flex flex-col items-start">
          <div className="label">First Name*</div>
          {InputTemplate("firstName", "Enter your First Name")}
          <div className="first__name__err error">
            {errors.firstName?.message || ""}
          </div>
        </div>

        <div className="last-name flex flex-col items-start">
          <div className="label">Last Name</div>
          {InputTemplate("lastName", "Enter your Last Name")}
          <div className="last__name__err error">
            {errors.lastName?.message || ""}
          </div>
        </div>

        <div className="gender flex flex-col items-start">
          <div className="label">Gender*</div>
          <select
            id="gender"
            className={`${errors.gender ? "border-red-500" : "border-[#bbbbbb]"} mt-[5px] h-[50px] w-[100%] rounded-[8px] border-[2px] border-solid px-[20px] text-[17px] font-semibold text-[#4b4b4b] outline-none`}
            {...register("gender")}
          >
            <option value="" disabled selected hidden>
              Select
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div className="gender__err error">
            {errors.gender?.message || ""}
          </div>
        </div>

        <div className="birthday flex flex-col items-start">
          <div className="label">Date of Birth*</div>

          <input
            type={inputType}
            id="birthday"
            className={`${errors.birthday ? "border-red-500" : "border-[#bbbbbb]"} mt-[5px] h-[50px] w-[100%] rounded-[8px] border-[2px] border-solid px-[20px] text-[17px] font-semibold text-[#4b4b4b] outline-none`}
            placeholder="Enter your Date of Birth"
            {...register("birthday")}
            onFocus={() => {
              setInputType("date");
            }}
            onBlur={() => {
              setInputType("text");
            }}
          />
          <div className="birthday__err error">
            {errors.birthday?.message || ""}
          </div>
        </div>

        <div className="parent-first-name flex flex-col items-start">
          <div className="label">Mother/Father's First Name*</div>
          {InputTemplate("parentFirstName", "Enter First Name")}
          <div className="parent__first__name__err error">
            {errors.parentFirstName?.message || ""}
          </div>
        </div>

        <div className="parent-last-name flex flex-col items-start">
          <div className="label">Last Name</div>
          {InputTemplate("parentLastName", "Enter Last Name")}

          <div className="parent__last__name__err error">
            {errors.parentLastName?.message || ""}
          </div>
        </div>

        <div className="email-grid col-span-2 grid grid-cols-subgrid">
          <div className="email col-start-1 flex flex-col items-start">
            <div className="label">Email Address*</div>
            {InputTemplate("email", "Enter your Email Address")}
            <div className="email__err error">
              {errors.email?.message || ""}
            </div>
          </div>
        </div>

        <div className="pin flex flex-col items-start">
          <div className="label">Pin Code*</div>
          {InputTemplate("pin", "Enter your area's Pin Code")}
          <div className="pin__err error"> {errors.pin?.message || ""}</div>
        </div>

        <div className="country flex flex-col items-start">
          <div className="label">Country*</div>
          <select
            id="country"
            className={`${errors.country ? "border-red-500" : "border-[#bbbbbb]"} mt-[5px] h-[50px] w-[100%] rounded-[8px] border-[2px] border-solid px-[20px] text-[17px] font-semibold text-[#4b4b4b] outline-none`}
            {...register("country")}
          >
            <option value="" disabled selected hidden>
              Select
            </option>
            <option value="Viet Nam">Viet Nam</option>
            <option value="American">American</option>
            <option value="Japan">Japan</option>
          </select>
          <div className="country__err error">
            {errors.country?.message || ""}
          </div>
        </div>

        <div className="time-zone flex flex-col items-start">
          <div className="label">Time Zone*</div>
          <select
            id="time__zone"
            className={`${errors.timeZone ? "border-red-500" : "border-[#bbbbbb]"} mt-[5px] h-[50px] w-[100%] rounded-[8px] border-[2px] border-solid px-[20px] text-[17px] font-semibold text-[#4b4b4b] outline-none`}
            {...register("timeZone")}
          >
            <option value="" disabled selected hidden>
              Select
            </option>
            <option value="UTC-12:00">UTC-12:00</option>
            <option value="UTC-11:00">UTC-11:00</option>
            <option value="UTC-10:00">UTC-10:00</option>
            <option value="UTC-09:00">UTC-09:00</option>
            <option value="UTC-08:00">UTC-08:00</option>
            <option value="UTC-07:00">UTC-07:00</option>
            <option value="UTC-06:00">UTC-06:00</option>
            <option value="UTC-05:00">UTC-05:00</option>
            <option value="UTC-04:00">UTC-04:00</option>
            <option value="UTC-03:00">UTC-03:00</option>
            <option value="UTC-02:00">UTC-02:00</option>
            <option value="UTC-01:00">UTC-01:00</option>
            <option value="UTC+00:00">UTC+00:00</option>
            <option value="UTC+01:00">UTC+01:00</option>
            <option value="UTC+02:00">UTC+02:00</option>
            <option value="UTC+03:00">UTC+03:00</option>
            <option value="UTC+04:00">UTC+04:00</option>
            <option value="UTC+05:00">UTC+05:00</option>
            <option value="UTC+06:00">UTC+06:00</option>
            <option value="UTC+07:00">UTC+07:00</option>
            <option value="UTC+08:00">UTC+08:00</option>
            <option value="UTC+09:00">UTC+09:00</option>
            <option value="UTC+10:00">UTC+10:00</option>
            <option value="UTC+11:00">UTC+11:00</option>
            <option value="UTC+12:00">UTC+12:00</option>
            <option value="UTC+13:00">UTC+13:00</option>
            <option value="UTC+14:00">UTC+14:00</option>
          </select>
          <div className="time__zone__err error">
            {errors.timeZone?.message || ""}
          </div>
        </div>

        <div className="phone flex flex-col items-start">
          <div className="label">Phone Number (include country code)*</div>
          {InputTemplate("phone", "Enter your Phone Number")}
          <div className="phone__err error"> {errors.phone?.message || ""}</div>
        </div>
        <button
          type="submit"
          className="hover: absolute bottom-[-80px] left-[50%] mt-[50px] translate-x-[-50%] rounded-[8px] border border-solid border-[#4602ae] bg-transparent px-[35px] py-[15px] text-[14px] font-semibold text-[#4602ae] outline-none transition-all duration-300 ease-in-out hover:bg-[#4602ae] hover:text-white hover:transition-all hover:duration-300 hover:ease-in-out"
        >
          Next
        </button>
        <Toast isOpen={isToastOpen} onClose={closeToast}></Toast>
      </form>
    </div>
  );
}
