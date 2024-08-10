import Portal from "../Portal";

type ToastProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Toast({ isOpen, onClose }: ToastProps) {
  if (!isOpen) return null;

  return (
    <Portal>
      <div className="z-1000 bg-custom-bg fixed bottom-0 left-0 right-0 top-0">
        <form
          action=""
          className="absolute left-[50%] top-[30%] flex h-[300px] w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col justify-between rounded-[10px] border-[3px] border-solid border-green-400 bg-white p-[20px] text-black"
        >
          <div className="flex flex-col gap-[15px]">
            <h1 className="border-b-[5px] border-solid border-green-400 py-[5px]">
              SUCCESS
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Obcaecati a placeat provident asperiores aperiam, sunt maiores,
              iusto accusamus nisi recusandae facere. Similique nulla at
              laboriosam minima nostrum repudiandae distinctio natus?
            </p>
          </div>

          <div className="flex justify-end gap-[10px]">
            <button
              onClick={onClose}
              className="rounded-[5px] bg-red-500 px-[20px] py-[10px] text-white hover:bg-red-800"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="rounded-[5px] bg-green-500 px-[20px] py-[10px] text-white hover:bg-green-800"
            >
              Cancel but Green
            </button>
          </div>
        </form>
      </div>
      ,
    </Portal>
  );
}
