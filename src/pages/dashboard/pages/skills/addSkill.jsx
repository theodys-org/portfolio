import { useForm } from "react-hook-form";
import { apiAddSkill } from "../../../../services/skills";
import { toast } from "react-toastify";
import { useState } from "react";
import Loader from "../../../../components/Loader";

const AddSkill = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiAddSkill({
        name: data.name,
        levelOfProficiency: data.proficiency.toLowerCase(),
      });
      console.log(res.data);
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-1/2">
        <div className="flex flex-col w-full space-y-1">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <input
            id="name"
            type="name"
            {...register("name", { required: "name is required" })}
            placeholder="Enter your name"
            className=" border-2 p-2 rounded-md"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col w-full space-y-1">
          <label htmlFor="proficiency" className="font-semibold">
            Proficiency
          </label>
          <input
            id="proficiency"
            type="proficiency"
            {...register("proficiency", {
              required: "proficiency is required",
            })}
            placeholder="Enter your proficiency"
            className="border-2 p-2 rounded-md"
          />
          {errors.proficiency && (
            <p className="text-red-500">{errors.proficiency.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-pink text-white w-full p-2 rounded-md font-semibold flex justify-center"
        >
          {isSubmitting ? <Loader /> : "Add Skill"}
        </button>
      </form>
    </div>
  );
};

export default AddSkill;
