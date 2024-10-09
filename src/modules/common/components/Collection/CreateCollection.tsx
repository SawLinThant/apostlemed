import React from "react";
import Input from "../input";
import { useForm } from "react-hook-form";
import TextArea from "../text-area/TextAreat";
import { useRouter } from "next/router";

interface ICollectionProps {
  username: string;
  phone: string;
  email: string;
  dateOfBirthOfBirth: string;
  highestEducationLevel: string;
  personalMedicalEducationLevel: number;
  ethicalLevel: number;
  clinicalKnowledgeAndSkill: number;
  numberOfPeopleGuide: number;
  morale: string;
}

const CreateCollection = () => {
  const { register, handleSubmit, setValue, getValues } =
    useForm<ICollectionProps>();
    const router=useRouter();
  return (
    <div className="flex w-full flex-col items-center px-[20px]">
      <div className="mt-[20px] flex w-full flex-col items-center border-[1px] border-black py-[20px] sm:w-[60vh]">
        <span>Create New Collection</span>
        <form className="flex w-full flex-col gap-y-2 px-[30px]">
          <Input
            label="Name"
            {...register("username", { required: "username required" })}
          />
          <Input
            label="Collection Data"
            {...register("phone", { required: "phone required" })}
          />
          <Input
            label="Collection Data"
            {...register("email", { required: "email required" })}
          />
          <TextArea
            label="Description"
            {...register("email", { required: "email required" })}
          />
          <div className="mt-[20px] flex w-full flex-col items-center gap-y-2">
            <button
              className="flex w-full items-center justify-center border-2 p-[10px] sm:w-[200px]"
              type="submit"
            >
              Create
            </button>
            <button
              className="underline"
              type="button"
              onClick={()=>router.push('/app/collection/list')}
            >
              View Collection List
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCollection;
