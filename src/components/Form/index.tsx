import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  IsEmail,
  IsName,
  IsPhone,
  IsPin,
  IsRequired,
} from "../../utils/FormRegex";
import Toast from "../Toast";

export type TFormState = {
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  parentFirstName: string;
  parentLastName: string;
  email: string;
  pin: string;
  country: string;
  timeZone: string;
  phone: string;
};

type htmlFormProps = {
  values?: TFormState;
  onSubmitFunc: (values: TFormState) => string;
};

export default function Form({
  values: valuesProp,
  onSubmitFunc,
}: htmlFormProps) {
  const [inputType, setInputType] = useState("text");
  const defaultValues = valuesProp ?? {
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "",
    parentFirstName: "",
    parentLastName: "",
    email: "",
    pin: "",
    country: "",
    timeZone: "",
    phone: "",
  };

  const {
    register,
    handleSubmit,
    // getValues,
    // watch,
    setError,
    formState: {
      // touchedFields,
      errors,
    },
  } = useForm<TFormState>({
    defaultValues,
  });

  const [isToastOpen, setIsToastOpen] = useState(false);

  const openToast = () => setIsToastOpen(true);
  const closeToast = () => setIsToastOpen(false);

  type FieldErr = {
    required?: string;
    isName?: string;
    isEmail?: string;
    isPin?: string;
    isPhone?: string;
  };

  type FieldErrs = {
    firstName: FieldErr;
    lastName: FieldErr;
    gender: FieldErr;
    birthday: FieldErr;
    parentFirstName: FieldErr;
    parentLastName: FieldErr;
    email: FieldErr;
    pin: FieldErr;
    country: FieldErr;
    timeZone: FieldErr;
    phone: FieldErr;
  };

  const fieldErr: FieldErrs = {
    firstName: {
      required: "Required",
      isName:
        "Invalid First Name. The First Name contains only uppercase and lowercase letters",
    },

    lastName: {
      isName:
        "Invalid Last Name.The Last Name contains only uppercase and lowercase letters",
    },

    gender: {
      required: "Required",
    },

    birthday: {
      required: "Required",
    },

    parentFirstName: {
      required: "Required",
      isName:
        "Invalid First Name. The First Name contains only uppercase and lowercase letters",
    },

    parentLastName: {
      isName:
        "Invalid Last Name. The First Name contains only uppercase and lowercase letters",
    },

    email: {
      required: "Required",
      isEmail: "Invalid Email. Please enter again (example@example.com)",
    },

    pin: {
      required: "Required",
      isPin: "Invalid Pin Code. Pin code contains 6 digits",
    },

    country: {
      required: "Required",
    },

    timeZone: {
      required: "Required",
    },

    phone: {
      required: "Required",
      isPhone:
        "Invalid Phone Number. Phone number includes country code and total number is 6-14 digits",
    },
  };

  function ValidateField(fieldName: keyof FieldErrs, value: string) {
    const error = fieldErr[fieldName];
    if (error) {
      if (error.required !== undefined) {
        if (!IsRequired(value)) {
          throw new Error(error.required);
        }
      }

      if (error.isName !== undefined) {
        if (!IsName(value)) {
          throw new Error(error.isName);
        }
      }

      if (error.isEmail !== undefined) {
        if (!IsEmail(value)) {
          throw new Error(error.isEmail);
        }
      }

      if (error.isPin !== undefined) {
        if (!IsPin(value)) {
          throw new Error(error.isPin);
        }
      }

      if (error.isPhone !== undefined) {
        if (!IsPhone(value)) {
          throw new Error(error.isPhone);
        }
      }
    }
  }

  const onSubmit = (value: TFormState) => {
    let hasError = false;

    Object.keys(value).forEach((key) => {
      try {
        ValidateField(key as keyof FieldErrs, value[key as keyof TFormState]);
      } catch (error) {
        if (error instanceof Error) {
          hasError = true;
          setError(key as keyof TFormState, {
            type: "manual",
            message: error.message,
          });
          return null;
        } else {
          console.log("An unknown error occurred");
        }
      }
    });
    if (!hasError) {
      console.log(onSubmitFunc(defaultValues)); // ----> Add or Update Function 
      openToast();
    }
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
            {" "}
            {errors.firstName?.message || ""}
          </div>
        </div>

        <div className="last-name flex flex-col items-start">
          <div className="label">Last Name</div>
          {InputTemplate("lastName", "Enter your Last Name")}
          <div className="last__name__err error">
            {" "}
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
            {" "}
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
            {" "}
            {errors.birthday?.message || ""}
          </div>
        </div>

        <div className="parent-first-name flex flex-col items-start">
          <div className="label">Mother/Father's First Name*</div>
          {InputTemplate("parentFirstName", "Enter First Name")}
          <div className="parent__first__name__err error">
            {" "}
            {errors.parentFirstName?.message || ""}
          </div>
        </div>

        <div className="parent-last-name flex flex-col items-start">
          <div className="label">Last Name</div>
          {InputTemplate("parentLastName", "Enter Last Name")}

          <div className="parent__last__name__err error">
            {" "}
            {errors.parentLastName?.message || ""}
          </div>
        </div>

        <div className="email-grid col-span-2 grid grid-cols-subgrid">
          <div className="email col-start-1 flex flex-col items-start">
            <div className="label">Email Address*</div>
            {InputTemplate("email", "Enter your Email Address")}
            <div className="email__err error">
              {" "}
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
            <option value="AmeriCan">American</option>
            <option value="Japan">Japan</option>
          </select>
          <div className="country__err error">
            {" "}
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
            {" "}
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
