import c from './Delivery.module.scss';
import Basket from '../../components/Delivery/basket/Basket';
import Form from '../../components/Delivery/form/Form';

const Delivery = () => {
  return (
    <div className={c.content}>
      <Basket />
      <Form />
    </div>
  );
};
export default Delivery;
