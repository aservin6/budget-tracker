import { ExpensesContext } from "../../context/expenses-context";
import { ModalContext } from "../../context/modal-context";
import CloseModalButton from "../ui/CloseModalButton";
import ModalWrapper from "../ui/ModalWrapper";
import { useContext, useState } from "react";
import { FormEvent } from "react";

export default function IncomeModal() {
  const { saveIncome } = useContext(ExpensesContext);
  const { closeModal } = useContext(ModalContext);
  const [userInput, setUserInput] = useState(0);

  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setUserInput(parseFloat(value));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveIncome(userInput);
    closeModal();
  };

  return (
    <ModalWrapper>
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <h4>Adjust Monthly Income</h4>
          <CloseModalButton />
        </div>
        <form onSubmit={handleFormSubmit} className="flex flex-col space-y-3">
          <div className="flex w-full text-2xl">
            <span className="select-none rounded-l-lg bg-zinc-700 px-3 py-2">
              $
            </span>
            <input
              onChange={handleChange}
              type="number"
              step={0.01}
              className="w-full rounded-r-lg bg-zinc-700 py-2 pr-3  outline-none"
              placeholder={"4250"}
              defaultValue={undefined}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 py-1.5 text-zinc-200 transition-all duration-300 hover:bg-opacity-75"
          >
            Save
          </button>
        </form>
      </div>
    </ModalWrapper>
  );
}
