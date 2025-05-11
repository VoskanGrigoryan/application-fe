import MyPaper from "@/src/components/generic/paper";
import { BaseShell } from "@/src/layout/HomeLayout/Shell";
import { Anchor, Breadcrumbs } from "@mantine/core";

const items = [
  { title: "Inicio", href: "/" },
  { title: "Lista de adopciones", href: "/vistas/adopciones" },
  { title: "Detalle", href: `/vistas/adopciones/${"id"}` },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export default function AdoptionDetail() {
  return (
    <BaseShell>
      <Breadcrumbs style={{marginBottom: 20}}>{items}</Breadcrumbs>
      <MyPaper>
        detalle
      </MyPaper>
    </BaseShell>
  );
}
