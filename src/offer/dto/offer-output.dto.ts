import { OfferCategory } from '../model/offer-category.model';
import { OfferImage } from '../model/offer-images.model';
import { UserOutputDTO } from '../../user/dtos/user-output.dto';
import { Offer } from '../model/offer.model';

export class OfferOutput {
  id: number;
  name: string;
  price: number;
  productionDate: Date;
  images: OfferImage[];
  categories: OfferCategory[];
  description: string;
  restaurant: UserOutputDTO;
  seller: UserOutputDTO;

  static fromOffer(
    offer: Offer,
    restaurant: UserOutputDTO,
    seller: UserOutputDTO,
  ): OfferOutput {
    const output = new OfferOutput();

    output.id = offer.id;
    output.name = offer.name;
    output.price = offer.price;
    output.images = offer.images;
    output.categories = offer.categories;
    output.description = offer.description;
    output.restaurant = restaurant;
    output.seller = seller;

    return output;
  }
}
