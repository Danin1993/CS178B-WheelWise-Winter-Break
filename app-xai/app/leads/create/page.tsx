"use client";

import React, { useState } from "react";
import { Flex, TextField, Button, Callout } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLeadSchema } from "@/app/validationSchema";
import { z } from "zod";

type LeadForm = z.infer<typeof createLeadSchema>;

const CreateNewLead = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadForm>({
    resolver: zodResolver(createLeadSchema),
  });
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/leads", data);
          router.push("/leads");
        } catch (error) {
          setError("Error. form does not work ... [ Change Later ]");
        }
      })}
    >
      <Flex direction="column" gap="3">
        {error && (
          <Callout.Root color="red" role="alert">
            <Callout.Text>{error}</Callout.Text>
          </Callout.Root>
        )}

        <TextField.Root>
          <TextField.Input placeholder="Title ... " {...register("title")} />
        </TextField.Root>

        {errors.title && (
          <Callout.Root color="red" role="alert">
            <Callout.Text>{errors.title?.message}</Callout.Text>
          </Callout.Root>
        )}

        <TextField.Root>
          <TextField.Input
            placeholder="Description ..."
            {...register("description")}
          />
        </TextField.Root>

        {errors.description && (
          <Callout.Root color="red" role="alert">
            <Callout.Text>{errors.description.message}</Callout.Text>
          </Callout.Root>
        )}

        <Button>Create Lead</Button>
      </Flex>
    </form>
  );
};

export default CreateNewLead;
