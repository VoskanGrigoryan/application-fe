import AdoptionDetail from "@/src/components/adoptions/AdoptionDetail";
import { BaseShell } from "@/src/layout/HomeLayout/Shell";
import { Anchor, Breadcrumbs, Text } from "@mantine/core";

const rawItems = [
  { title: "Inicio", href: "/" },
  { title: "Lista de adopciones", href: "/vistas/adopciones" },
  { title: "Detalle", href: `/vistas/adopciones/${"id"}` },
];

const items = rawItems.map((item, index) => {
  const isLast = index === rawItems.length - 1;
  return isLast ? (
    <Text key={index} c="dimmed">
      {item.title}
    </Text>
  ) : (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  );
});

export default function AdoptionDetailView() {
  return (
    <BaseShell>
      <Breadcrumbs style={{ marginBottom: 20 }}>{items}</Breadcrumbs>
      <AdoptionDetail />
    </BaseShell>
  );
}
