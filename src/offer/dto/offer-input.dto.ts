import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { Offer } from '../model/offer.model';
import { OfferCategory } from '../model/offer-category.model';
import { User } from '../../user/models/user.model';
import { OfferStatus } from '../constants/OfferStatus.enum';

export class OfferInput {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0.1)
  price: number;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  images: string[];

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  categories: string[];

  @IsNotEmpty()
  description: string;

  @IsInt()
  @IsPositive()
  restaurantId: number;

  static toModel(
    input: OfferInput,
    categories: OfferCategory[],
    seller: User,
    restaurant: User,
  ): Offer {
    const offer = new Offer();

    offer.restaurant = restaurant;
    offer.seller = seller;
    offer.name = input.name;
    offer.price = input.price;
    offer.description = input.description;
    offer.categories = categories;
    offer.status = OfferStatus.OFFERED;

    return offer;
  }
}
