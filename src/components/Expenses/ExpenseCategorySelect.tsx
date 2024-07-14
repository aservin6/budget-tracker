import { categories } from "@/utils";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "../ui/select";

interface SelectProps {
  onSelectChange: (category: string) => void;
}

export default function ExpenseCategorySelect({ onSelectChange }: SelectProps) {
  return (
    <Select name="categoryName" onValueChange={onSelectChange} required>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Expense category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map((obj) => {
            return (
              <SelectItem key={obj.category} value={obj.category}>
                {obj.text}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
