import { PropertyType, createActor } from "@/backend";
import type { InquiryFormData } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation } from "@tanstack/react-query";

function mapPropertyType(value: string): PropertyType {
  switch (value) {
    case "Commercial":
      return PropertyType.Commercial;
    case "Retail":
      return PropertyType.Retail;
    case "Investment":
      return PropertyType.Investment;
    default:
      return PropertyType.Residential;
  }
}

export function useInquiry() {
  const { actor, isFetching } = useActor(createActor);

  const mutation = useMutation({
    mutationFn: async (data: InquiryFormData) => {
      if (!actor) throw new Error("Backend not ready");
      return actor.submitInquiry(
        data.fullName,
        data.email,
        data.phone,
        mapPropertyType(data.propertyType),
        data.message,
      );
    },
  });

  return {
    submitInquiry: mutation.mutate,
    isLoading: mutation.isPending || isFetching,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
