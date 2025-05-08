import { Loader } from "@mantine/core";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Loader color="blue" size="xl" />
    </div>
  );
}
