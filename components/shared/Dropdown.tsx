// INSTALLED FROM SHADECN SELECT npx shadcn-ui@latest add ALERT  npx shadcn-ui@latest add alert-dialog
// CODE COME FROM SHADECN FOR SELECTCONTENT AND ALERTDIALOG
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";
import { startTransition, useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";
import {
  createCategory,
  getAllCategories,
} from "@/lib/actions/category.actions";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  // FUNCTION TO ADD NEW CATEGORIES...
  const [categories, setCategories] = useState<ICategory[]>([]); // ICATEGORY IS BEING MADE IN CATEGORY.MODEL.TS IN LIB > DATABASE > MODELS
  const [newCategory, setNewCategory] = useState("");

  // THIS FUNC HELPS TO ADD NEW CATEGORY
  const handleAddCategory = () => {
    createCategory({
      categoryName: newCategory.trim(),// TRIM MEANS REMOVING SPACES TOO FROM STRING
    }).then((category) => {
      setCategories((prevState) => [...prevState, category]);
    });
  };

  // FETCH ALL CATEGORYLIST
  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();

      categoryList && setCategories(categoryList as ICategory[]);
    };
    getCategories();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent> 
        {/* HERE WE HAVE MADE OPTION TO MAKE OUR OWN CATEGORY DYNAMICALLY  RATHER THAN PREDEFINED CATEGORY */}
        {categories.length > 0 &&
          categories.map((category) => (
            <SelectItem
              key={category._id}
              value={category._id}
              className="select-item p-regular-14"
            >
              {/* SELECTED CATEGORY NAME */}
              {category.name}
            </SelectItem>
          ))}
        {/* ALERT DIAlOG CODE COPIED FROM SHADECN */}
        <AlertDialog>
          <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">
            Add new category
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>New Category</AlertDialogTitle>
              <AlertDialogDescription>
                {/* INPUT IS SHADECN COMPONENTS */}
                <Input
                  type="text"
                  placeholder="Category name"
                  className="input-field mt-3"
                  onChange={(e) => setNewCategory(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                // THIS FUNCN HANDLEADDCATEGORY WILL HELP TO ADD CATEGORY...
                onClick={() => startTransition(handleAddCategory)}
              >
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
