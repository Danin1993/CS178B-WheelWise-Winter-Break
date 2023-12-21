import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const LeadPage = () => {
  return (
    <>
      <Button>
        <Link href="/leads/create">Create</Link>
      </Button>
      <div>This Is Lead Page</div>
    </>
  );
};

export default LeadPage;
