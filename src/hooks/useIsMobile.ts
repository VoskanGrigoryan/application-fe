import { useMediaQuery } from "@mantine/hooks";

export default function useIsMobile() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile;
}
