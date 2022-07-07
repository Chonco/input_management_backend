import { Module } from '@nestjs/common';
import { OfferService } from './services/offer.service';
import { OfferController } from './controllers/offer.controller';
import { Offer } from './model/offer.model';
import { OfferImage } from './model/offer-images.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferCategory } from './model/offer-category.model';
import { UserModule } from '../user/user.module';
import { OfferImagesService } from './services/offer-images.service';
import { OfferCategoriesService } from './services/offer-categories.service';
import { OfferCategoriesController } from './controllers/offer-categories.controller';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([Offer, OfferImage, OfferCategory]),
  ],
  providers: [OfferService, OfferImagesService, OfferCategoriesService],
  controllers: [OfferController, OfferCategoriesController],
})
export class OfferModule {}
