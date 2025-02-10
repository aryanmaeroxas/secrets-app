import { Card, CardBody } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "@/components/ui/skeleton";

const PokemonCardSkeleton = () => {
  return (
    <Card.Root width="320px">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText noOfLines={1} />
      </CardBody>
    </Card.Root>
  );
};

export default PokemonCardSkeleton;
