"use client";

import React from "react";
import { Flex, TextField, TextArea, Button } from "@radix-ui/themes";

const CreateNewLead = () => {
  return (
    <Flex direction="column" gap="3">
      <TextField.Root>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
      <TextArea size="1" placeholder="Just for text, Replace Later ..." />
      <Button>Create Lead</Button>
    </Flex>
  );
};

export default CreateNewLead;
