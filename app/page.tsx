import EventosCercanos from "@/src/components/events/EventosCercanos";
import HomeSlider from "@/src/components/slider/HomeSlider";
import { BaseShell } from "@/src/layout/HomeLayout/Shell";

export default function Home() {
  return (
    <BaseShell>
      <HomeSlider />
      <EventosCercanos />
    </BaseShell>
  );
}
