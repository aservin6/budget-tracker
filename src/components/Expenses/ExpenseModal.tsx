import CloseModalButton from "../ui/CloseModalButton";
import ExpenseForm from "./ExpenseForm";
import ModalWrapper from "../ui/ModalWrapper";

export default function ExpenseModal() {
  return (
    <ModalWrapper>
      <div className="flex items-center justify-between">
        <h4>Add Expense</h4>
        <CloseModalButton />
      </div>
      <ExpenseForm />
    </ModalWrapper>
  );
}
