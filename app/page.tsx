import EventosCercanos from "@/src/components/EventosCercanos";
import HomeSlider from "@/src/components/Slider/HomeSlider";
import { BaseShell } from "@/src/layout/HomeLayout/Shell";

export default function Home() {
  return (
    <BaseShell>
      <HomeSlider />
      <EventosCercanos />
    </BaseShell>
  );
}
