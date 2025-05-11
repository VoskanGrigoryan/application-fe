"use client";

import AdoptionCard from "@/src/components/Adoptions/AdoptionCard";
import AdoptionFilters from "@/src/components/Adoptions/AdoptionFilters";
import { BaseShell } from "@/src/layout/HomeLayout/Shell";
import { useMediaQuery } from "@mantine/hooks";

export default function AdoptionsPage() {

  const isMobile = useMediaQuery("(max-width: 768px)");
  
  return ( 
    <BaseShell>
      {isMobile ? null : <AdoptionFilters />}
      <AdoptionCard />
    </BaseShell>
  );
}
