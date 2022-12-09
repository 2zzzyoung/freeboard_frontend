import { useAuth } from "../../../../src/components/commons/hooks/useAuth";
import ProductWrite from "../../../../src/components/units/products/write/write.container";

const DetailPage = () => {
  useAuth();
  return (
    <>
      <ProductWrite isEdit={true} />
    </>
  );
};

export default DetailPage;
