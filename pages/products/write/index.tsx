import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductWrite from "../../../src/components/units/products/write/write.container";

const ProductWritePage = () => {
  return <ProductWrite isEdit={false} />;
};

export default withAuth(ProductWritePage);
