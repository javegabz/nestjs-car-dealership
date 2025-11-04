import { Brand } from '../../brands/entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';
export const BRAND_SEED: Brand[] = [
  {
    id: uuidv4(),
    name: 'Toyota',
    createdAt: new Date().getTime()
  },
  {
    id: uuidv4(),
    name: 'Honda',  
    createdAt: new Date().getTime()
  },                
  {
    id: uuidv4(),
    name: 'Ford',
    createdAt: new Date().getTime()
  },
    {
    id: uuidv4(),
    name: 'Mazda',
    createdAt: new Date().getTime()
  } ,
  {
    id: uuidv4(),
    name: 'Ferrari',
    createdAt: new Date().getTime()
  } ,
    {
    id: uuidv4(),
    name: 'Lamborghini',
    createdAt: new Date().getTime()
  } ,
      {
    id: uuidv4(),
    name: 'jeep',
    createdAt: new Date().getTime()
  }
];                                                                     
                                                              