import { OptionService } from "../index";
import useDummyService from "./useDummyService";

export const useOptionsServices = (): OptionService[] => {
  const services: OptionService[] = [];
  const serviceDummy = useDummyService();
  services.push(serviceDummy);
  return services;
};
