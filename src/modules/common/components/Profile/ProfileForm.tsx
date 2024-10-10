import React, { useState } from "react";
import Input from "../input";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "~/components/ui/calendar";
import { cn } from "~/lib/utils";
import { format } from "date-fns";
import { useRouter } from "next/router";

interface IProfileProps {
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

const ProfileForm = () => {
  const router=useRouter()
  const { register, handleSubmit, setValue, getValues } =
    useForm<IProfileProps>();
  const submit = handleSubmit(async (credentials) => {
    console.log(credentials);
  });
  const [currentMorale, setCurrentMorale] = useState<string>(
    getValues("morale"),
  );
  const handleMorale = (value: string) => {
    console.log(value);
    setCurrentMorale(value);
    setValue("morale", value);
  };
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const onDateChange = (date: Date | undefined) => {
    setDateOfBirth(date);
    setValue("dateOfBirthOfBirth", date ? date?.toString() : "");
  };
  return (
    <div className="flex w-full flex-col items-center sm:p-[50px] p-[30px]">
      <span className="font-bold text-lg">Additonal Data</span>
      <form
        onSubmit={submit}
        className="mt-[20px] flex w-full flex-col items-center gap-y-5"
      >
        <div className="flex w-full flex-col items-center justify-center gap-x-2 gap-y-2 sm:flex-row">
          <div className="flex w-full flex-col gap-x-2 gap-y-2 sm:w-[400px]">
            <Input
              label="Name"
              {...register("username", { required: "username required" })}
            />
            <Input
              label="Phone"
              {...register("phone", { required: "phone required" })}
            />
            <Input
              label="Email"
              {...register("email", { required: "email required" })}
            />
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className={cn(
                    "flex h-[50px] w-full items-center justify-start rounded-[5px] border-[1px] border-black p-[10px] text-left font-normal sm:w-[400px]",
                    !dateOfBirth && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateOfBirth ? (
                    format(dateOfBirth, "PPP")
                  ) : (
                    <span>Date of birth</span>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateOfBirth}
                  onSelect={(date) => onDateChange(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Input
              label="Highest Education Level"
              {...register("highestEducationLevel", {
                required: "highestEducationLevel required",
              })}
            />
          </div>
          <div className="flex w-full flex-col gap-x-2 gap-y-2 sm:w-[400px]">
            <Input
              label="Personal Medical Education Level(0 to 100)"
              type="number"
              {...register("personalMedicalEducationLevel", {
                required: "personalMedicalEducationLeve required",
              })}
            />
            <Input
              label="Ethical Level(0 to 100)"
              type="number"
              {...register("ethicalLevel", {
                required: "ethicalLevel required",
              })}
            />
            <Input
              label="Clinical Knowledge and Skills Level(0 to 100)"
              type="number"
              {...register("clinicalKnowledgeAndSkill", {
                required: "clinicalKnowledgeAndSkill required",
              })}
            />
            <Input
              label="Number of People Guided"
              type="number"
              {...register("numberOfPeopleGuide", {
                required: "numberOfPeopleGuide required",
              })}
            />
            <Select
              onValueChange={(value) => handleMorale(value)}
              value={currentMorale}
            >
              <SelectTrigger className="h-[50px] w-full border-[1px] border-black">
                <SelectValue placeholder="Morale" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="primary" value="Low">Low</SelectItem>
                <SelectItem value="Normal">Normal</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button
            type="submit"
            className="w-[200px] rounded-[5px] border-[1px] bg-theme hover:bg-primary p-[10px] text-white"
          >
            Submit
          </button>
          <div>
            <button className="underline" type="button" onClick={()=>router.push('/app/profile')}>
                Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
