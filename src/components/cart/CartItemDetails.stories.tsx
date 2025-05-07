import { Meta, Story } from '@storybook/react';
import CartItemDetails from './CartItemDetails';
import { Product } from '../../store/types';
import { CartItem } from '../../store/reducers/cartReducer';

export default {
    title: 'Components/Cart/CartItemDetails',
    component: CartItemDetails,
    argTypes: {
      item: { control: 'object' },
    },
  } as Meta<typeof CartItemDetails>; // Usa Meta en lugar de ComponentMeta
  
  const Template: Story<typeof CartItemDetails> = (args: any) => <CartItemDetails item={args.item} />;

const sampleProduct: Product = {
  id: 'sample-123',
  name: 'Producto de Ejemplo',
  imageUrl: 'https://via.placeholder.com/60',
  price: 19.99,
};

const sampleCartItem: CartItem = {
  product: sampleProduct,
  quantity: 2,
};

export const Default = Template.bind({});
Default.args = {
  item: sampleCartItem,
};

export const AnotherItem = Template.bind({});
AnotherItem.args = {
  item: {
    product: {
      id: 'another-456',
      name: 'Otro Producto',
      imageUrl: 'https://via.placeholder.com/60/00FF00',
      price: 9.50,
    },
    quantity: 1,
  },
};