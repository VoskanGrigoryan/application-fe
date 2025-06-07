"use client";

import AdoptionCard from "@/src/components/adoptions/AdoptionCard";
import AdoptionFilters from "@/src/components/adoptions/AdoptionFilters";
import useIsMobile from "@/src/hooks/useIsMobile";
import { BaseShell } from "@/src/layout/HomeLayout/Shell";
import { Button } from "@mantine/core";

export default function AdoptionsPage() {
  const isMobile = useIsMobile();

  return (
    <BaseShell>
    <Button>
      asdad
    </Button>
      {isMobile ? null : <AdoptionFilters />}
      <AdoptionCard />
    </BaseShell>
  );
}
